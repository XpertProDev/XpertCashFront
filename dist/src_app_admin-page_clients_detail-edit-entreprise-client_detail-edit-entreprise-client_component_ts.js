"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_detail-edit-entreprise-client_detail-edit-entreprise-client_component_ts"],{

/***/ 94235:
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin-page/clients/detail-edit-entreprise-client/detail-edit-entreprise-client.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailEditEntrepriseClientComponent: () => (/* binding */ DetailEditEntrepriseClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../MODELS/truncate-email.pipe */ 65698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SERVICES/client-service */ 47746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/entreprise-clients-service */ 31673);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);











function DetailEditEntrepriseClientComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function DetailEditEntrepriseClientComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function DetailEditEntrepriseClientComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailEditEntrepriseClientComponent_div_12_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_div_12_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseClientComponent_div_12_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_div_12_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_15_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_15_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Minimum 2 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailEditEntrepriseClientComponent_div_12_div_15_small_1_Template, 2, 0, "small", 55)(2, DetailEditEntrepriseClientComponent_div_12_div_15_small_2_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.entrepriseClientForm.get("nom")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r1.entrepriseClientForm.get("nom")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_20_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Format d'email invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailEditEntrepriseClientComponent_div_12_div_20_small_1_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.entrepriseClientForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_38_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Format invalide pour ", (tmp_4_0 = ctx_r1.entrepriseClientForm.get("pays")) == null ? null : tmp_4_0.value, ". Exemple: ", ctx_r1.paysIndicatifs[(tmp_4_0 = ctx_r1.entrepriseClientForm.get("pays")) == null ? null : tmp_4_0.value].exemple, " ");
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailEditEntrepriseClientComponent_div_12_div_38_small_1_Template, 2, 2, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.entrepriseClientForm.get("pays")) == null ? null : tmp_3_0.value);
  }
}
function DetailEditEntrepriseClientComponent_div_12_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 58)(3, "div", 59)(4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_div_12_div_48_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToClients());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 61)(7, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_div_12_div_48_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.entrepriseClientForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.entrepriseClientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.entrepriseClientForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.entrepriseClientForm.invalid);
  }
}
function DetailEditEntrepriseClientComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Modifier un entreprise client");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DetailEditEntrepriseClientComponent_div_12_i_8_Template, 1, 0, "i", 30)(9, DetailEditEntrepriseClientComponent_div_12_i_9_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 32)(11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Nom d'entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DetailEditEntrepriseClientComponent_div_12_div_15_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DetailEditEntrepriseClientComponent_div_12_div_20_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 32)(22, "div", 33)(23, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailEditEntrepriseClientComponent_div_12_Template_select_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "S\u00E9lectionne un pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Mali");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "S\u00E9n\u00E9gal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "C\u00F4te d'Ivoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 33)(35, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function DetailEditEntrepriseClientComponent_div_12_Template_input_input_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.formatPhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, DetailEditEntrepriseClientComponent_div_12_div_38_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 32)(40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Secteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, DetailEditEntrepriseClientComponent_div_12_div_48_Template, 9, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.entrepriseClientForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.entrepriseClientForm.get("nom")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.entrepriseClientForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.entrepriseClientForm.get("email")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.entrepriseClientForm.get("telephone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.entrepriseClientForm.get("telephone")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
  }
}
function DetailEditEntrepriseClientComponent_div_22_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "truncateEmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, client_r8.email), " ");
  }
}
function DetailEditEntrepriseClientComponent_div_22_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", client_r8.telephone, " ");
  }
}
function DetailEditEntrepriseClientComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_div_22_div_1_Template_div_click_0_listener() {
      const client_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openClientDetail(client_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 68)(4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DetailEditEntrepriseClientComponent_div_22_div_1_span_7_Template, 4, 3, "span", 55)(8, DetailEditEntrepriseClientComponent_div_22_div_1_span_8_Template, 3, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const client_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", client_r8.id === ctx_r1.currentClientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](client_r8.nomComplet || "Nom non disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", client_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", client_r8.telephone);
  }
}
function DetailEditEntrepriseClientComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailEditEntrepriseClientComponent_div_22_div_1_Template, 9, 5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.clientsAffilies);
  }
}
function DetailEditEntrepriseClientComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Aucun client affili\u00E9 \u00E0 cette entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class DetailEditEntrepriseClientComponent {
  constructor(clientService, router, route, fb, entrepriseClientService, usersService) {
    this.clientService = clientService;
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.entrepriseClientService = entrepriseClientService;
    this.usersService = usersService;
    this.currentClientId = null;
    this.errorMessage = '';
    this.errorMessageApi = '';
    this.successMessage = '';
    this.isListView = true;
    this.showDropdown = false;
    this.showPopup = false;
    this.clients = [];
    this.sortField = 'nomComplet';
    this.sortDirection = 'asc';
    this.noClientsAvailable = false;
    this.messageNoClient = 'Aucun client disponible.';
    this.client = {
      entrepriseClient: {} // Initialisation par défaut
    };
    this.clientsAffilies = [];
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.isLoading = false;
    this.isEditing = false;
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
    // Définissez les indicatifs par pays
    this.paysIndicatifs = {
      'Mali': {
        indicatif: '+223 ',
        longueur: 8,
        exemple: '+223 12345678'
      },
      'Sénégal': {
        indicatif: '+221 ',
        longueur: 9,
        exemple: '+221 123456789'
      },
      'Côte d\'Ivoire': {
        indicatif: '+225 ',
        longueur: 10,
        exemple: '+225 0123456789'
      }
    };
  }
  ngOnInit() {
    // Récupérer la préférence depuis le localStorage
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid';
    this.getListClients();
    const id = +this.route.snapshot.params['id'];
    this.currentClientId = id;
    this.getClient(id);
    this.getFormEntreprise();
    this.myControl.disable();
  }
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.indicatif = paysInfo.indicatif;
      // Mettre à jour le validateur
      this.updatePhoneValidator(paysInfo.longueur);
      // Mettre à jour la valeur du téléphone
      const telephoneControl = this.entrepriseClientForm.get('telephone');
      if (!telephoneControl?.value.startsWith(this.indicatif)) {
        telephoneControl?.setValue(this.indicatif);
      }
    }
  }
  formatPhoneNumber() {
    const telephoneControl = this.entrepriseClientForm.get('telephone');
    let valeur = telephoneControl?.value || '';
    if (this.indicatif && !valeur.startsWith(this.indicatif)) {
      // Réinitialiser si l'indicatif est modifié manuellement
      telephoneControl?.setValue(this.indicatif);
      return;
    }
    // Nettoyer les caractères non numériques
    const chiffres = valeur.replace(/\D/g, '');
    // Réappliquer l'indicatif + chiffres
    telephoneControl?.setValue(this.indicatif + chiffres.slice(this.indicatif.replace(/\D/g, '').length));
  }
  updatePhoneValidator(longueur) {
    const regex = new RegExp(`^${this.indicatif.replace('+', '\\+')}\\d{${longueur}}$`);
    this.entrepriseClientForm.get('telephone')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(regex)]);
    this.entrepriseClientForm.get('telephone')?.updateValueAndValidity();
  }
  getFormEntreprise() {
    this.entrepriseClientForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^\d+$/)]],
      adresse: [''],
      pays: [''],
      siege: [''],
      secteur: ['']
    });
  }
  // Modifier getClient() pour récupérer les clients affiliés
  getClient(id) {
    this.clientService.getClientById(id).subscribe({
      next: client => {
        this.client = client;
        this.initializeForm();
        // Filtrer les clients affiliés
        this.getClientsAffilies();
      },
      error: err => console.error('Erreur lors de la récupération:', err)
    });
  }
  // Nouvelle méthode pour récupérer les clients affiliés
  getClientsAffilies() {
    if (!this.client?.entrepriseClient?.id) return;
    const entrepriseId = this.client.entrepriseClient.id;
    this.clientService.getClientsByEntreprise(entrepriseId).subscribe({
      next: clients => {
        this.clientsAffilies = clients;
      },
      error: err => {
        console.error('Erreur lors de la récupération des clients affiliés:', err);
      }
    });
  }
  toggleView(viewType) {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }
  initializeForm() {
    if (this.client?.entrepriseClient) {
      this.entrepriseClientForm.patchValue({
        nom: this.client.entrepriseClient.nom || '',
        email: this.client.entrepriseClient.email || '',
        telephone: this.client.entrepriseClient.telephone || '',
        adresse: this.client.entrepriseClient.adresse || '',
        pays: this.client.entrepriseClient.pays || '',
        siege: this.client.entrepriseClient.siege || '',
        secteur: this.client.entrepriseClient.secteur || ''
      });
      // Initialiser l'indicatif si pays existant
      if (this.client.entrepriseClient.pays && this.paysIndicatifs[this.client.entrepriseClient.pays]) {
        this.indicatif = this.paysIndicatifs[this.client.entrepriseClient.pays].indicatif;
        this.updatePhoneValidator(this.paysIndicatifs[this.client.entrepriseClient.pays].longueur);
      }
      // Formater le téléphone
      this.entrepriseClientForm.patchValue({
        telephone: this.client.entrepriseClient.telephone || this.indicatif
      });
    }
  }
  // list clients 
  getListClients() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(token => {
      if (!token) {
        console.error('🔐 Aucun token trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.clientService.getListClients();
    })).subscribe({
      next: data => {
        console.log('Données brutes:', data);
        this.clients = data.map(client => ({
          ...client,
          entrepriseClient: client.entrepriseClient ? {
            id: client.entrepriseClient.id,
            nom: client.entrepriseClient.nom
          } : null
        }));
        // Trier par id décroissant
        this.clients = this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        if (this.clients.length > 0) {
          console.log('Exemple de client:', this.clients[0]);
          console.log('Entreprise associée:', this.clients[0].entrepriseClient);
        }
        console.log('Clients récupérées (triées) :', this.clients);
      },
      error: err => {
        console.error('Erreur lors de la récupération des clients :', err);
      }
    });
  }
  // client id routing
  openClientDetail(clientId) {
    this.router.navigate(['/detail-client', clientId]);
  }
  // entreprise client id routing
  openEntrepriseClientDetail(clientId, event) {
    event.stopPropagation();
    this.router.navigate(['/detail-entreprise-client', clientId]);
  }
  // Ouvre/ferme le popup choix d'ajoute client
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  goToClients() {
    this.router.navigate(['/clients']);
  }
  onSubmit() {
    if (!this.isEditing) return;
    this.errorMessage = '';
    this.successMessage = '';
    // Activer l'indicateur de chargement
    this.isLoading = true;
    // Ajouter un délai de 3 secondes avant la modification
    setTimeout(() => {
      if (this.entrepriseClientForm.valid && this.client?.entrepriseClient?.id) {
        const updatedEntreprise = this.getFormData();
        this.entrepriseClientService.updateEntrepriseClient(this.client.entrepriseClient.id, updatedEntreprise).subscribe({
          next: updatedEntreprise => {
            console.log('Entreprise mise à jour:', updatedEntreprise);
            this.client.entrepriseClient = {
              ...this.client.entrepriseClient,
              ...updatedEntreprise
            };
            // Ajout du message de succès
            this.successMessage = 'Entreprise mise à jour avec succès !';
            // Option 1 : Recharger les données du client
            this.getClient(this.client.id);
            this.isEditing = false;
            // Désactiver l'indicateur de chargement
            this.isLoading = false;
            // Effacer le message de succès après 3 secondes
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
          },
          error: err => {
            console.error('Erreur lors de la mise à jour:', err);
            this.errorMessage = err.error?.message || 'Erreur lors de la modification';
            this.isLoading = false;
          }
        });
      } else {
        this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire';
        this.isLoading = false;
      }
    }, 3000); // Délai de 3 secondes
  }
  getFormData() {
    return {
      id: this.client.entrepriseClient?.id,
      nom: this.entrepriseClientForm.get('nom')?.value,
      pays: this.client.entrepriseClient?.pays,
      email: this.entrepriseClientForm.get('email')?.value,
      telephone: this.entrepriseClientForm.get('telephone')?.value,
      adresse: this.entrepriseClientForm.get('adresse')?.value,
      siege: this.client.entrepriseClient?.siege,
      secteur: this.client.entrepriseClient?.secteur,
      logo: this.client.entrepriseClient?.logo,
      nif: this.client.entrepriseClient?.nif,
      nina: this.client.entrepriseClient?.nina,
      banque: this.client.entrepriseClient?.banque,
      rccm: this.client.entrepriseClient?.rccm,
      siteWeb: this.client.entrepriseClient?.siteWeb,
      signataire: this.client.entrepriseClient?.signataire,
      signataireNom: this.client.entrepriseClient?.signataireNom,
      prefixe: this.client.entrepriseClient?.prefixe,
      suffixe: this.client.entrepriseClient?.suffixe,
      tauxTva: this.client.entrepriseClient?.tauxTva,
      signaturNum: this.client.entrepriseClient?.signaturNum,
      cachetNum: this.client.entrepriseClient?.cachetNum
    };
  }
  navigateBack() {
    this.router.navigate(['/clients']);
  }
  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      // Activer tous les contrôles
      this.entrepriseClientForm.enable();
      this.myControl.enable();
    } else {
      // Désactiver et réinitialiser
      this.entrepriseClientForm.disable();
      this.myControl.disable();
    }
  }
  static {
    this.ɵfac = function DetailEditEntrepriseClientComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailEditEntrepriseClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_1__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_2__.EntrepriseClientService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DetailEditEntrepriseClientComponent,
      selectors: [["app-detail-edit-entreprise-client"]],
      decls: 25,
      vars: 9,
      consts: [["noAffilie", ""], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], ["title", "Retour sur la page produit", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], ["class", "form_left_right", 4, "ngIf"], [1, "information_cadre", "cadre_affilie"], [1, "header_affilie"], [2, "font-weight", "400"], [2, "color", "#0672E4", "letter-spacing", "0.60px"], [1, "count"], ["class", "content_affilie", 4, "ngIf", "ngIfElse"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "content_return", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "icon_edit", 2, "cursor", "pointer"], ["style", "font-size: 16px;", "class", "ri-edit-box-line", "title", "Cliquer ici pour modifier", 3, "click", 4, "ngIf"], ["style", "color: #ff0000; font-size: 16px;", "class", "ri-close-line", "title", "Fermer l'\u00E9dition", 3, "click", 4, "ngIf"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "nom", "formControlName", "nom", "placeholder", "Saisis le nom d'entreprise", 1, "input_focus"], ["for", "nom", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "pays", "formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["for", "pays", 1, "label"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], ["autocomplete", "off", "id", "siege", "formControlName", "siege", "name", "siege", "placeholder", "Saisis le siege", 1, "input_focus"], ["for", "siege", 1, "label"], ["autocomplete", "off", "id", "secteur", "formControlName", "secteur", "name", "secteur", "placeholder", "Saisis le secteur", 1, "input_focus"], ["for", "secteur", 1, "label"], ["class", "information_cadre information_cadre_save", 4, "ngIf"], ["title", "Cliquer ici pour modifier", 1, "ri-edit-box-line", 2, "font-size", "16px", 3, "click"], ["title", "Fermer l'\u00E9dition", 1, "ri-close-line", 2, "color", "#ff0000", "font-size", "16px", 3, "click"], [1, "error"], [4, "ngIf"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "content_affilie"], ["class", "client_card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "client_card", 3, "click"], [1, "avatar"], ["src", "assets/img/profil.png", "alt", "Photo client"], [1, "info"], [1, "name"], [1, "contact"], [1, "ri-mail-line"], [1, "ri-phone-line"], [1, "no-affiliation"], [1, "ri-group-line"]],
      template: function DetailEditEntrepriseClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailEditEntrepriseClientComponent_div_1_Template, 2, 1, "div", 2)(2, DetailEditEntrepriseClientComponent_div_2_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DetailEditEntrepriseClientComponent_div_4_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "form", 8)(8, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailEditEntrepriseClientComponent_Template_p_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DetailEditEntrepriseClientComponent_div_12_Template, 49, 6, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Clients affili\u00E9s \u00E0 l'entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DetailEditEntrepriseClientComponent_div_22_Template, 2, 1, "div", 18)(23, DetailEditEntrepriseClientComponent_ng_template_23_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const noAffilie_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.entrepriseClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.client == null ? null : ctx.client.entrepriseClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.client.entrepriseClient.nom || "cette entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.clientsAffilies.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.clientsAffilies.length > 0)("ngIfElse", noAffilie_r9);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncateEmailPipe],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  position: relative;\n  gap: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #999;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 30px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.cadre_client[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n.cadre_affilie[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.cadre_affilie[_ngcontent-%COMP%]   .header_affilie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .header_affilie[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .header_affilie[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background: #0672E4;\n  color: white;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .content_affilie[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n  max-height: 405px;\n  overflow-y: auto;\n  white-space: nowrap;\n  padding-bottom: 5px;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .content_affilie[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .content_affilie[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background: transparent;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .content_affilie[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #f9fafb;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid #eee;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #0672E4;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #0672E4;\n  background-color: #f0f7ff;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(6, 114, 228, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 5px rgba(6, 114, 228, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(6, 114, 228, 0);\n  }\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 15px;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 3px;\n  color: #333;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #666;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .client_card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 14px;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .no-affiliation[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #888;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .no-affiliation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 15px;\n  color: #ccc;\n}\n.cadre_affilie[_ngcontent-%COMP%]   .no-affiliation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1lZGl0LWVudHJlcHJpc2UtY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0U7O0VBRUUsY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFB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RTtJQUNFLFVBQUE7SUFDQSwwQkFBQSxFQUFBLDJEQUFBO0VBbkVKO0FBQ0YiLCJmaWxlIjoiZGV0YWlsLWVkaXQtZW50cmVwcmlzZS1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2dsb2JhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBnYXA6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgLy8gZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAvLyAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHRvcDogMjJweDtcbiAgLy8gICBsZWZ0OiAwcHg7XG4gIC8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC8vICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgLy8gfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIC5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG5cbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgwqsgc2xpZGVyIMK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYWRyZV9jbGllbnQge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4uY2FkcmVfYWZmaWxpZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAvLyBoZWlnaHQ6IDY5JTtcbiAgXG4gIC5oZWFkZXJfYWZmaWxpZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIFxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICBcbiAgICAuY291bnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50X2FmZmlsaWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogMTVweDtcblxuICAgIC8vIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLy8gcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgbWF4LWhlaWdodDogNDA1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IFxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGhlaWdodDogMnB4O1xuXG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIC8vIGJhY2tncm91blFkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNsaWVudF9jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgfVxuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY3ZmY7IFxuICAgICAgXG4gICAgICAvLyBBbmltYXRpb24gc3VidGlsZSBwb3VyIGF0dGlyZXIgbCdhdHRlbnRpb25cbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg2LCAxMTQsIDIyOCwgMC40KTsgfVxuICAgICAgICA3MCUgeyBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSg2LCAxMTQsIDIyOCwgMCk7IH1cbiAgICAgICAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg2LCAxMTQsIDIyOCwgMCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIFxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgZmxleDogMTtcbiAgICAgIFxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29udGFjdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIFxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vLWFmZmlsaWF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBcbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbn1cblxuLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5cbiAgLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZWI4NztcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cbiAgXG4vL3RvYXN0IHN1Y2Nlc3Ncbi50b2FzdC1tZXNzYWdlLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDqWNpZmlxdWVzXG4gICAgfVxuICB9XG4gIFxuICAvKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBldCBkaXNwYXJhw650cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw650IGF2ZWMgdW4gbMOpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICAgIH1cbiAgfSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2RldGFpbC1lZGl0LWVudHJlcHJpc2UtY2xpZW50L2RldGFpbC1lZGl0LWVudHJlcHJpc2UtY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0U7O0VBRUUsY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Es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QUFBO0VBbkVKO0VBcUVFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBbkVKO0VBcUVFO0lBQ0UsVUFBQTtFQW5FSjtFQXFFRTtJQUNFLFVBQUE7SUFDQSwwQkFBQSxFQUFBLDJEQUFBO0VBbkVKO0FBQ0Y7QUFDQSxnaTZCQUFnaTZCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9nbG9iYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC8qIGZvcm11bGFpcmUgKi9cbiAgXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9saXN0X3N0b2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCAudGl0bGVfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xOHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvcm11bGFpcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLlRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM3Nzc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgLy8gLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICB0b3A6IDIycHg7XG4gIC8vICAgbGVmdDogMHB4O1xuICAvLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvLyAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIC8vIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dCB7XG4gICAgcGFkZGluZzogMjBweDsgXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbiAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZG91YmxlX2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSB7XG4gICAgLy8gZmxleDogMTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHN2ZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgcCB7XG4gICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgXG4gICNmaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAvLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLy8gVG9nZ2xlIFxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMOCwqsgc2xpZGVyIMOCwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7IFxuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4OyBcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDg8KpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEJ1dHRvbiBcblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2ZmNDQ0NDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FkcmVfY2xpZW50IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmNhZHJlX2FmZmlsaWUge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLy8gaGVpZ2h0OiA2OSU7XG4gIFxuICAuaGVhZGVyX2FmZmlsaWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBcbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgXG4gICAgLmNvdW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzA2NzJFNDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cblxuICAuY29udGVudF9hZmZpbGllIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICAvLyBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgIG1heC1oZWlnaHQ6IDQwNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyBcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDJweDtcblxuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAvLyBiYWNrZ3JvdW5RZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5jbGllbnRfY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmN2ZmOyBcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0aW9uIHN1YnRpbGUgcG91ciBhdHRpcmVyIGwnYXR0ZW50aW9uXG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNiwgMTE0LCAyMjgsIDAuNCk7IH1cbiAgICAgICAgNzAlIHsgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoNiwgMTE0LCAyMjgsIDApOyB9XG4gICAgICAgIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNiwgMTE0LCAyMjgsIDApOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBcbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbnRhY3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICBcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uby1hZmZpbGlhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG59XG5cbi5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICBcbiAgLmxvYWRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDsgXG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIC8qIENvbnRlbmV1ciBkdSB0b2FzdCAqL1xuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogMzVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2ViODc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG4gIFxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4udG9hc3QtbWVzc2FnZS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuICAvLyBBam91dGVyIGwnYW5pbWF0aW9uIHBvdXIgdG91cyBsZXMgdHlwZXMgZCdhbGVydGVzXG4gIC5hbGVydCB7XG4gICAgLy8gLi4uIHN0eWxlcyBleGlzdGFudHNcbiAgICBcbiAgICAmLXdhcm5pbmcge1xuICAgICAgQGV4dGVuZCAuYWxlcnQ7XG4gICAgICAvLyAuLi4gc3R5bGVzIHNww4PCqWNpZmlxdWVzXG4gICAgfVxuICB9XG4gIFxuICAvKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDg8KudHJlIGV0IGRpc3BhcmHDg8KudHJlIGxlIHRvYXN0ICovXG4gIEBrZXlmcmFtZXMgZmFkZUluT3V0IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgLyogTGUgdG9hc3QgZGlzcGFyYcODwq50IGF2ZWMgdW4gbMODwqlnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_detail-edit-entreprise-client_detail-edit-entreprise-client_component_ts.js.map