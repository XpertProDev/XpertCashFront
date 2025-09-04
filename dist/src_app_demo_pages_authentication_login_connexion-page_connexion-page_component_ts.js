"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_pages_authentication_login_connexion-page_connexion-page_component_ts"],{

/***/ 66840:
/*!********************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/login/connexion-page/connexion-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnexionPageComponent: () => (/* binding */ ConnexionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_admin_page_Navigation_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/Navigation/header-nav/header-nav.component */ 10611);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/auth.service */ 71348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);









const _c0 = a0 => ({
  "error": a0
});
function ConnexionPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ConnexionPageComponent_div_10_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Le mot de passe est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Au moins 8 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ConnexionPageComponent_div_10_div_9_span_1_Template, 2, 0, "span", 7)(2, ConnexionPageComponent_div_10_div_9_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.newPasswordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.newPasswordForm.get("newPassword")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function ConnexionPageComponent_div_10_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La confirmation est requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ConnexionPageComponent_div_10_div_14_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.newPasswordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function ConnexionPageComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Les mots de passe ne correspondent pas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.otpErrorMessage, " ");
  }
}
function ConnexionPageComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.otpSuccessMessage, " ");
  }
}
function ConnexionPageComponent_div_10_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "R\u00E9initialiser le mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Traitement en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 25)(2, "div", 26)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "R\u00E9initialiser votre mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ConnexionPageComponent_div_10_div_9_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ConnexionPageComponent_div_10_div_14_Template, 2, 1, "div", 30)(15, ConnexionPageComponent_div_10_div_15_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ConnexionPageComponent_div_10_div_16_Template, 2, 1, "div", 30)(17, ConnexionPageComponent_div_10_div_17_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 33)(19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_10_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitNewPasswordForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ConnexionPageComponent_div_10_span_20_Template, 2, 0, "span", 7)(21, ConnexionPageComponent_div_10_span_21_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 35)(23, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_10_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goBackToOtpVerification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " \u2190 Retour \u00E0 la v\u00E9rification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.newPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.newPasswordForm.get("newPassword")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.newPasswordForm.get("newPassword")) == null ? null : tmp_2_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.newPasswordForm.get("confirmPassword")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.newPasswordForm.get("confirmPassword")) == null ? null : tmp_3_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.newPasswordForm.errors == null ? null : ctx_r1.newPasswordForm.errors["mismatch"]) && ctx_r1.newPasswordForm.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.newPasswordForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
  }
}
function ConnexionPageComponent_div_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Veuillez saisir un code complet \u00E0 6 chiffres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.otpErrorMessage, " ");
  }
}
function ConnexionPageComponent_div_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.otpSuccessMessage, " ");
  }
}
function ConnexionPageComponent_div_11_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verify Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_11_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "V\u00E9rification en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 25)(2, "div", 26)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "V\u00E9rifiez votre adresse e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nous avons envoy\u00E9 un code \u00E0 6 chiffres \u00E0 votre adresse e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 40)(10, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(1, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(2, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(3, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(4, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(5, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ConnexionPageComponent_div_11_Template_input_input_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpInput(6, $event));
    })("keydown", function ConnexionPageComponent_div_11_Template_input_keydown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onOtpBackspace(6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ConnexionPageComponent_div_11_div_16_Template, 2, 0, "div", 30)(17, ConnexionPageComponent_div_11_div_17_Template, 2, 1, "div", 30)(18, ConnexionPageComponent_div_11_div_18_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Vous souhaitez modifier votre adresse e-mail? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_11_Template_a_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goBackToReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Cliquez ici. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 33)(24, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_11_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitOtpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ConnexionPageComponent_div_11_span_25_Template, 2, 0, "span", 7)(26, ConnexionPageComponent_div_11_span_26_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 48)(28, "p")(29, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_11_Template_a_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.resetEmailForOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpForm.invalid && ctx_r1.otpForm.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
  }
}
function ConnexionPageComponent_div_12_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_12_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email n'est pas valide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ConnexionPageComponent_div_12_div_15_span_1_Template, 2, 0, "span", 7)(2, ConnexionPageComponent_div_12_div_15_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.rf["resetEmail"].errors == null ? null : ctx_r1.rf["resetEmail"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.rf["resetEmail"].errors == null ? null : ctx_r1.rf["resetEmail"].errors["email"]);
  }
}
function ConnexionPageComponent_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.resetSuccessMessage, " ");
  }
}
function ConnexionPageComponent_div_12_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.resetErrorMessage, " ");
  }
}
function ConnexionPageComponent_div_12_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Envoyer le code de v\u00E9rification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_12_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Envoi en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 25)(2, "div", 26)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Mot de passe oubli\u00E9 ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Indiquez votre adresse e-mail ci-dessous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Un code de v\u00E9rification \u00E0 6 chiffres vous sera envoy\u00E9 par e-mail afin de r\u00E9initialiser votre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "mot de passe.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Adresse e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ConnexionPageComponent_div_12_div_15_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ConnexionPageComponent_div_12_div_16_Template, 2, 1, "div", 32)(17, ConnexionPageComponent_div_12_div_17_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 33)(19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_12_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r1.submitResetForm();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.resetOtpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ConnexionPageComponent_div_12_span_20_Template, 2, 0, "span", 7)(21, ConnexionPageComponent_div_12_span_21_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 48)(23, "p")(24, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_div_12_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleResetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.resetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.rf["resetEmail"].touched && ctx_r1.rf["resetEmail"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.resetSuccessMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.resetErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.resetForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
  }
}
function ConnexionPageComponent_form_13_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_form_13_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email n'est pas valide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_form_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ConnexionPageComponent_form_13_div_6_span_1_Template, 2, 0, "span", 7)(2, ConnexionPageComponent_form_13_div_6_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["email"].errors == null ? null : ctx_r1.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["email"].errors == null ? null : ctx_r1.f["email"].errors["email"]);
  }
}
function ConnexionPageComponent_form_13_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mot de passe est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_form_13_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Au moins 8 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConnexionPageComponent_form_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ConnexionPageComponent_form_13_div_11_span_1_Template, 2, 0, "span", 7)(2, ConnexionPageComponent_form_13_div_11_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["password"].errors == null ? null : ctx_r1.f["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["password"].errors == null ? null : ctx_r1.f["password"].errors["minlength"]);
  }
}
function ConnexionPageComponent_form_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function ConnexionPageComponent_form_13_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_form_13_div_26_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r1.popupType === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.popupImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.popupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.popupMessage);
  }
}
function ConnexionPageComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 25)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Votre email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ConnexionPageComponent_form_13_div_6_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ConnexionPageComponent_form_13_div_11_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 53)(13, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_form_13_Template_p_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleResetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Mot de passe oubli\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ConnexionPageComponent_form_13_div_15_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 33)(17, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_form_13_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitForm());
    })("click", function ConnexionPageComponent_form_13_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 48)(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Vous n\u2019avez pas encore de compte ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConnexionPageComponent_form_13_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goToInscription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ConnexionPageComponent_form_13_div_26_Template, 11, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["email"].touched && ctx_r1.f["email"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f["password"].touched && ctx_r1.f["password"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showPopup);
  }
}
class ConnexionPageComponent {
  constructor(fb, usersService, authService, router) {
    this.fb = fb;
    this.usersService = usersService;
    this.authService = authService;
    this.router = router;
    this.errorMessage = '';
    this.isResetPassword = false;
    // Propriétés pour la popup (utilisées uniquement en cas d'erreur)
    this.showPopup = false;
    this.popupTitle = '';
    this.popupMessage = '';
    this.popupImage = '';
    this.popupType = 'success';
    this.isLoading = false;
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;
    this.showOtpVerification = false;
    this.resetEmailForOtp = '';
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
    this.showPasswordResetForm = false;
    this.resetToken = '';
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]]
    });
    this.resetForm = this.fb.group({
      resetEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]]
    });
    this.initOptForm();
    this.initNewPassword();
  }
  initNewPassword() {
    this.newPasswordForm = this.fb.group({
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(form) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value ? null : {
      mismatch: true
    };
  }
  initOptForm() {
    this.otpForm = this.fb.group({
      digit1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]],
      digit2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]],
      digit3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]],
      digit4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]],
      digit5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]],
      digit6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/[0-9]/)]]
    });
    this.otpErrorMessage = ''; // <-- Ajout ici
    this.otpSuccessMessage = '';
  }
  onOtpBackspace(index, event) {
    const input = event.target;
    if (event.key === 'Backspace' && !input.value && index > 1) {
      const prevInput = document.querySelector(`[formControlName="digit${index - 1}"]`);
      if (prevInput) {
        prevInput.focus();
        prevInput.select(); // Sélectionne le contenu pour faciliter la suppression
      }
    }
  }
  // Getter pour accéder facilement aux contrôles
  get rf() {
    return this.resetForm.controls;
  }
  goToInscription() {
    this.router.navigate(['/inscription']);
  }
  // Méthode pour basculer entre les vues
  toggleResetPassword() {
    this.isResetPassword = !this.isResetPassword;
  }
  openPopup(title, message, type) {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    this.popupImage = type === 'success' ? 'assets/img/succcccc.png' : 'assets/img/error.png';
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  submitForm() {
    if (this.loginForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
    this.isLoading = true;
    const credentials = this.loginForm.value;
    setTimeout(() => {
      this.usersService.connexionUser(credentials).subscribe({
        next: response => {
          this.isLoading = false;
          if (response.accessToken && response.refreshToken) {
            console.log("Access Token :", response.accessToken);
            console.log("Refresh Token :", response.refreshToken);
            // Sauvegarde les tokens dans le service d'authentification
            this.authService.saveTokens(response.accessToken, response.refreshToken);
            // Récupérer les informations de l'utilisateur après la connexion
            this.usersService.getUserInfo().subscribe({
              next: user => {
                const userRoleType = user.roleType; // Récupérer le roleType de l'utilisateur
                const userPermissions = user.permissions; // Récupérer les permissions de l'utilisateur
                // Vérification des permissions
                if (userPermissions.includes("VENDRE_PRODUITS")) {
                  // Si l'utilisateur a "VENDRE_PRODUITS" + une autre permission
                  if (userPermissions.length > 1) {
                    // Redirection vers "analytics" si l'utilisateur a plus qu'une seule permission
                    this.router.navigate(['/analytics']).then(success => {
                      console.log("Navigation vers analytics réussie ?", success);
                    });
                  } else {
                    // Si l'utilisateur n'a que "VENDRE_PRODUITS", redirection vers "pos-caisse"
                    this.router.navigate(['/pos-caisse']).then(success => {
                      console.log("Navigation vers pos-caisse réussie ?", success);
                    });
                  }
                } else if (userPermissions.includes("VENDRE_PRODUITS")) {
                  // Redirection vers "pos-caisse" pour les permissions liées à la gestion des produits
                  this.router.navigate(['/pos-caisse']).then(success => {
                    console.log("Navigation vers pos-caisse réussie ?", success);
                  });
                } else {
                  // Redirection par défaut si aucune des conditions ci-dessus n'est remplie
                  this.router.navigate(['/analytics']).then(success => {
                    console.log("Navigation vers la page par défaut réussie ?", success);
                  });
                }
              },
              error: err => {
                console.error("Erreur lors de la récupération des infos utilisateur :", err);
                this.errorMessage = "Impossible de récupérer les informations utilisateur.";
                this.openPopup("Erreur", this.errorMessage, "error");
              }
            });
          } else {
            this.errorMessage = response.error || "Erreur de connexion, veuillez réessayer.";
            this.openPopup("Erreur de connexion", this.errorMessage, 'error');
          }
        },
        error: error => {
          this.isLoading = false;
          console.log("Erreur complète :", error);
          console.log("Réponse API :", error.error);
          let message = "Une erreur est survenue lors de la connexion.";
          if (error.status === 400 || error.status === 401) {
            if (typeof error.error === "string") {
              message = error.error;
            } else if (error.error?.error) {
              message = error.error.error;
            }
          }
          this.openPopup("❌ Oups, une erreur !", message, "error");
        }
      });
    }, 1000);
  }
  get f() {
    return this.loginForm.controls;
  }
  // Méthode de soumission du formulaire de réinitialisation
  submitResetForm() {
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;
    if (this.resetForm.invalid) {
      this.resetErrorMessage = 'Veuillez saisir une adresse email valide.';
      return;
    }
    const email = this.resetForm.get('resetEmail')?.value;
    this.isLoading = true;
    this.usersService.forgotPassword(email).subscribe({
      next: response => {
        this.isLoading = false;
        // this.resetSuccessMessage = `Un lien de réinitialisation a été envoyé à ${email}. Vérifiez votre boîte de réception.`;
        this.resetSuccessMessage = `Votre code de vérification a été envoyé par e-mail.`;
        this.resetEmailForOtp = email;
        this.resetForm.reset();
        this.resetOtpForm();
        setTimeout(() => {
          this.isResetPassword = false; // Masquer la vue réinitialisation
          this.showOtpVerification = true; // Afficher la vue OTP
          this.resetSuccessMessage = null; // Effacer le message
        }, 2000);
      },
      error: error => {
        this.isLoading = false;
        if (error.status === 404) {
          this.resetErrorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard.";
        } else {
          this.resetErrorMessage = "Aucun compte n'est associé à cet email.";
          // this.resetErrorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard.";
        }
      }
    });
  }
  submitOtpForm() {
    if (this.otpForm.invalid) {
      this.otpErrorMessage = "Veuillez saisir un code complet à 6 chiffres";
      return;
    }
    this.isLoading = true;
    this.otpErrorMessage = '';
    // Concaténer les chiffres
    const code = Object.values(this.otpForm.value).join('');
    // Appel au backend pour validation
    this.usersService.validateOtp(this.resetEmailForOtp, code).subscribe({
      next: response => {
        this.isLoading = false;
        this.otpSuccessMessage = "Votre email a été vérifié avec succès!";
        this.resetToken = response.token; // Stocker le token reçu du backend
        this.otpForm.reset();
        setTimeout(() => {
          this.otpSuccessMessage = '';
          this.showOtpVerification = false;
          this.showPasswordResetForm = true;
        }, 2000);
      },
      error: error => {
        this.isLoading = false;
        this.otpErrorMessage = error.error?.error || "Code invalide ou expiré";
      }
    });
  }
  resetComponentState() {
    this.isResetPassword = false;
    this.showOtpVerification = false;
    this.showPasswordResetForm = false;
    this.otpSuccessMessage = '';
    this.otpErrorMessage = '';
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;
    this.errorMessage = '';
    // Réinitialiser les formulaires
    this.loginForm.reset();
    this.resetForm.reset();
    this.otpForm.reset();
    this.newPasswordForm.reset();
  }
  // Ajouter pour la navigation entre les vues
  goBackToReset() {
    this.resetOtpForm();
    this.resetForm.patchValue({
      resetEmail: this.resetEmailForOtp
    });
    this.showOtpVerification = false;
    this.isResetPassword = true;
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
    this.resetSuccessMessage = null;
  }
  // Ajoutez cette méthode pour réinitialiser les champs OTP
  resetOtpForm() {
    this.otpForm.reset();
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
  }
  goToLogin() {
    this.isResetPassword = false;
    this.showOtpVerification = false;
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
  }
  // Gestion du focus automatique
  onOtpInput(index, event) {
    const value = event.target.value;
    if (value && index < 6) {
      const nextInput = document.querySelector(`[formControlName="digit${index + 1}"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  goBackToOtpVerification() {
    this.showPasswordResetForm = false;
    this.showOtpVerification = true;
  }
  submitNewPasswordForm() {
    if (this.newPasswordForm.invalid) {
      return;
    }
    const newPassword = this.newPasswordForm.get('newPassword')?.value;
    this.isLoading = true;
    this.usersService.resetPassword(this.resetToken, newPassword).subscribe({
      next: () => {
        this.isLoading = false;
        this.otpSuccessMessage = "Votre mot de passe a été réinitialisé avec succès!";
        setTimeout(() => {
          // Réinitialiser tous les états avant la navigation
          this.isResetPassword = false;
          this.showOtpVerification = false;
          this.showPasswordResetForm = false;
          this.otpSuccessMessage = '';
          this.otpErrorMessage = '';
          this.resetSuccessMessage = null;
          this.resetErrorMessage = null;
          // Naviguer vers la page de connexion
          this.resetComponentState();
          this.router.navigate(['/connexion']);
        }, 2000);
      },
      error: error => {
        this.isLoading = false;
        this.otpErrorMessage = error.error?.error || "Erreur lors de la réinitialisation du mot de passe.";
      }
    });
  }
  static {
    this.ɵfac = function ConnexionPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConnexionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ConnexionPageComponent,
      selectors: [["app-connexion-page"]],
      decls: 35,
      vars: 5,
      consts: [[1, "container_global"], [1, "container_global_content"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_page"], [1, "title_form"], [1, "formulaire_img"], [1, "info_form_left"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "info_form_right"], [1, "image_header"], ["src", "assets/img/logout_img.png", "alt", ""], [1, "container_temoignage"], [1, "content_temoignage"], [1, "temoignage_left"], [1, "image_temoignage"], ["src", "assets/img/temoignage1.png", "alt", "Image de temoignage"], [1, "temoignage_right"], [1, "title"], [1, "contenue"], [1, "mes_footer"], [1, "copyRight"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [3, "formGroup"], [1, "formulaire"], [1, "champ_input"], ["type", "password", "formControlName", "newPassword", "placeholder", "Nouveau mot de passe", 1, "input_focus"], [1, "label"], ["class", "error-message", 4, "ngIf"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirmer le mot de passe", 1, "input_focus"], ["class", "success-message", 4, "ngIf"], [1, "btn_contact"], ["type", "submit", 3, "click", "disabled"], [1, "reset-instructions", 2, "text-align", "center", "margin-top", "20px"], [2, "cursor", "pointer", "color", "#0672E4", "text-decoration", "underline", 3, "click"], [1, "error-message"], [1, "success-message"], [1, "reset-instructions"], [1, "otp-inputs"], ["type", "text", "formControlName", "digit1", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], ["type", "text", "formControlName", "digit2", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], ["type", "text", "formControlName", "digit3", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], ["type", "text", "formControlName", "digit4", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], ["type", "text", "formControlName", "digit5", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], ["type", "text", "formControlName", "digit6", "maxlength", "1", 1, "otp-input", 3, "input", "keydown"], [1, "reset-instructions", 2, "font-size", "12px", "text-align", "center"], [1, "registerPage"], [1, "logout", 3, "click"], ["type", "email", "formControlName", "resetEmail", "placeholder", "Saisis votre email", 1, "input_focus", 2, "min-width", "200px"], ["type", "email", "formControlName", "email", "placeholder", "Saisis votre email", 1, "input_focus"], ["type", "password", "formControlName", "password", "placeholder", "****************", 1, "input_focus"], [1, "resetPassword"], [3, "click"], ["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-content", 3, "ngClass"], [1, "popup-header"], [1, "popup-img"], ["alt", "Icone", 1, "popup-icon", 3, "src"]],
      template: function ConnexionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header-nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ConnexionPageComponent_div_3_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ConnexionPageComponent_div_10_Template, 25, 9, "div", 7)(11, ConnexionPageComponent_div_11_Template, 31, 8, "div", 7)(12, ConnexionPageComponent_div_12_Template, 26, 7, "div", 7)(13, ConnexionPageComponent_form_13_Template, 27, 6, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17)(23, "h2", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Une Exp\u00E9rience Exceptionnelle !");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " J\u2019ai \u00E9t\u00E9 impressionn\u00E9 par la qualit\u00E9 du service et l\u2019attention port\u00E9e aux d\u00E9tails. D\u00E8s le premier contact, j\u2019ai ressenti un r\u00E9el professionnalisme et une \u00E9coute attentive. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ul")(28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Le processus a \u00E9t\u00E9 fluide, rapide et parfaitement adapt\u00E9 \u00E0 mes besoins. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Je recommande vivement \u00E0 toute personne cherchant une exp\u00E9rience fiable et de grande qualit\u00E9. Merci encore pour cette belle prestation ! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "footer", 20)(33, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \u00A9 Copyright Groupe XpertPro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPasswordResetForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showOtpVerification);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isResetPassword && !ctx.showOtpVerification);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isResetPassword && !ctx.showOtpVerification && !ctx.showPasswordResetForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_admin_page_Navigation_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__.HeaderNavComponent],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.container_global_content[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  background-color: #0672E4;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 9999999999;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n#nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n}\n\n.menu-bars[_ngcontent-%COMP%], \n.menu-close[_ngcontent-%COMP%] {\n  color: rgba(20, 20, 20, 0.8784313725);\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  margin-left: 30px;\n}\n\n.logos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #E9D421;\n  cursor: pointer;\n  font-size: 30px;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  top: 10px;\n  margin-right: 20px;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 10px 20px;\n}\n\n.nav__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n}\n\n.nav__link[_ngcontent-%COMP%]:hover {\n  color: #E9D421;\n  transition: all ease-in-out 0.5s;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  margin-top: 90px;\n}\n\n.welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #0672E4;\n}\n\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n}\n\n.content_page[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.inpuemail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 400px;\n  height: 49px;\n  outline: none;\n  border: none;\n  margin: 5px 0px;\n  transition: all 0.3s;\n  font-size: 16px;\n  padding-left: 10px;\n  background-color: #ffffff;\n  color: #000;\n  box-shadow: rgba(90, 94, 97, 0.053) 0px 8px 24px;\n  border-radius: 5px;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.afficheEntreprise[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.entreprseDomaine[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 5px;\n  font-size: 12px;\n}\n\n.entreprseDomaineSite[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 10px;\n  pointer-events: none;\n  color: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -6px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 13px;\n  padding: 0;\n  background-color: #fff;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 2px;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.icon_reseau_contact[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.icon_reseau_contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1725490196);\n}\n\n.btn_contact[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 25px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.btn_contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 40px 10px 25px;\n  font-size: 15px;\n  cursor: pointer;\n  border-radius: 10px;\n  border: none;\n  background-color: rgba(6, 113, 228, 0.7725490196);\n  color: #fff;\n  transition: all 0.3s;\n  position: relative;\n  width: 100%;\n}\n\n.registerPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n}\n\n.registerPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  color: #0672E4;\n  font-weight: 500;\n  cursor: pointer;\n  color: #0361c5;\n}\n\n.btn_contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all 0.5;\n}\n\n.champ_input_margin[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.title_form[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 30px;\n  text-align: center;\n  color: #2b2929;\n}\n\n.champ_input_login[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.resetPassword[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  position: relative;\n  top: -12px;\n}\n\n.resetPassword[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: underline;\n  color: #1e1e1e;\n  cursor: pointer;\n}\n\n.resetPassword[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #000;\n  transition: all 0.5;\n}\n\n.formulaire_img[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.info_form_right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.container_temoignage[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  height: 60vh;\n}\n\n.content_temoignage[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n}\n\n.temoignage_left[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n\n.temoignage_right[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 50px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .contenue[_ngcontent-%COMP%] {\n  color: #f0eeee;\n  letter-spacing: 1px;\n  line-height: 20px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .contenue[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 90%;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.reset-instructions[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.registerPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.logout[_ngcontent-%COMP%] {\n  color: #0672E4;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.registerPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a.logout[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  color: #28a745;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 15px 0;\n  text-align: center;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 15px 0;\n  text-align: center;\n}\n\n\n\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 25px 0;\n}\n\n.otp-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  border: 2px solid #0672E4;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n  transition: all 0.3s;\n}\n\n.otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #034b9e;\n  box-shadow: 0 0 0 3px rgba(6, 114, 228, 0.2);\n  outline: none;\n}\n\n\n\n.otp-toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #0672E4;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-top: 15px;\n  font-size: 14px;\n  padding: 5px;\n}\n\n.otp-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #034b9e;\n}\n\n\n\n@media (max-width: 768px) {\n  .otp-input[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 20px;\n  }\n}\n.mes_footer[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: #202020;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.copyRight[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5leGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLG1CQUFBO0FBRUo7O0FBQ0U7RUFDSSx5QkFBQTtBQUVOOztBQUNFO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNOOztBQUVFO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDTjs7QUFFRTs7RUFHSSxxQ0FBQTtFQUNBLGFBQUE7QUFBTjs7QUFHRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHRTtFQUNJLGFBQUE7QUFBTjs7QUFHRTtFQUNJLGNBQUE7RUFJQSxlQUFBO0VBQ0EsZUFBQTtBQUhOOztBQU9FO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSk47O0FBT0U7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBSk47O0FBT0U7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUpOOztBQU9FO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0FBSk47O0FBVUU7RUFDSSxnQkFBQTtBQVBOOztBQVVFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFQTjs7QUFVRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVBOOztBQVdFO0VBQ0ksaUJBQUE7QUFSTjs7QUFZRSxlQUFBO0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVk47O0FBYUk7RUFDRSxnQkFBQTtBQVZOOztBQWFJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFLQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQWRO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QUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNCRjs7QUE4QkEsK0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBM0JGOztBQThCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtBQTNCRjs7QUE4QkEsc0JBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBM0JGOztBQThCQTtFQUNFLGNBQUE7QUEzQkY7O0FBOEJBLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQTNCRjtBQUNGO0FBOENFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBNUNKOztBQStDRTtFQUNFLFdBQUE7RUFFQSxlQUFBO0FBN0NKIiwiZmlsZSI6ImNvbm5leGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9nbG9iYWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9nbG9iYWxfY29udGVudHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIG5hdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFlYjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgfVxuICBcbiAgI25hdiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1lbnUtYmFycyxcbiAgLm1lbnUtY2xvc2VcbiAge1xuICAgICAgY29sb3I6ICMxNDE0MTRlMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5sb2dvIGgye1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuICBcbiAgLmxvZ29zIHNwYW57XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubG9nbyBzcGFue1xuICAgICAgY29sb3I6ICNFOUQ0MjE7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLy9wYWRkaW5nOiA1cHggN3B4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxO1xuICB9XG4gIFxuICAubmF2LWxpc3R7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAubmF2LWl0ZW1ze1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gIFxuICAubmF2X19saW5re1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLm5hdl9fbGluazpob3ZlcntcbiAgICAgIGNvbG9yOiAjRTlENDIxO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC41cztcbiAgfVxuICBcbiAgXG4gIC8vIFNlY3Rpb24gcG91ciBsYSBiaWVudmVudVxuICBcbiAgLndlbGNvbWUge1xuICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgfVxuICBcbiAgLndlbGNvbWUgaDJ7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjb2xvcjogIzA2NzJFNDtcbiAgfVxuICBcbiAgLndlbGNvbWUgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICAuY29udGVudF9wYWdlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG4gIFxuICBcbiAgLyogZm9ybXVsYWlyZSAqL1xuICAgIFxuICAgIC5jaGFtcF9pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW5wdWVtYWlsIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjYmNiYztcbiAgICAgIC8vIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAvLyBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIC8vIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSg5MCwgOTQsIDk3LCAwLjA1MykgMHB4IDhweCAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5hZmZpY2hlRW50cmVwcmlzZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5lbnRyZXByc2VEb21haW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5lbnRyZXByc2VEb21haW5lU2l0ZSB7XG4gICAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIycHg7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogMDAwO1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gICAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgICAgdG9wOiAtNnB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5kb3VibGVfaW5wdXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5pY29uX3Jlc2VhdV9jb250YWN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5pY29uX3Jlc2VhdV9jb250YWN0IGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJjO1xuICAgIH1cbiAgICBcbiAgICAuYnRuX2NvbnRhY3Qge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYnRuX2NvbnRhY3QgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDI1cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM1O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5yZWdpc3RlclBhZ2UgcHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXJQYWdlIHAgLmxvZ291dCB7XG4gICAgICBjb2xvcjogIzA2NzJFNDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyUGFnZSBwIC5sb2dvdXQge1xuICAgICAgY29sb3I6ICMwMzYxYzU7XG4gICAgfVxuICAgIFxuICAgIC5idG5fY29udGFjdCBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNTtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2lucHV0X21hcmdpbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAudGl0bGVfZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzJiMjkyOTtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2lucHV0X2xvZ2luIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgXG4gICAgLnJlc2V0UGFzc3dvcmQge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC0xMnB4O1xuICAgIH1cbiAgICBcbiAgICAucmVzZXRQYXNzd29yZCBwe1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogIzFlMWUxZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAucmVzZXRQYXNzd29yZCBwOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC41O1xuICAgIH1cbiAgXG4gIC5mb3JtdWxhaXJlX2ltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIFxuICBcbiAgLy8gaW1hZ2UgXG4gIFxuICBcbiAgLmluZm9fZm9ybV9yaWdodCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIFxuICAvLyBQb3AgdXBcbiAgXG4gIC8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICAvKiBDb250ZW51IGRlIGxhIHBvcHVwICovXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAvKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5wb3B1cC1pbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAucG9wdXAtaWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuICAubW9kYWwtY29udGVudCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudC5lcnJvciBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICB9XG4gIFxuICAvKiBBbmltYXRpb24gZCdhcHBhcml0aW9uICovXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFN0eWxlIHBvdXIgbGVzIHRlbW9pZ25hZ2VcbiAgXG4gIC5jb250YWluZXJfdGVtb2lnbmFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gIH1cbiAgXG4gIC5jb250ZW50X3RlbW9pZ25hZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnRlbW9pZ25hZ2VfbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIH1cbiAgXG4gIC50ZW1vaWduYWdlX3JpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIC50ZW1vaWduYWdlX3JpZ2h0IC50aXRsZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB9XG4gIFxuICAudGVtb2lnbmFnZV9yaWdodCAuY29udGVudWUge1xuICAgIGNvbG9yOiAjZjBlZWVlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC50ZW1vaWduYWdlX3JpZ2h0IC5jb250ZW51ZSB1bCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIFxuICBcbiAgLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcblxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gICAgXG4gIC5yZXNldC1pbnN0cnVjdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAvLyBQb3VyIGxlIHRleHRlIFwiQ29ubmV4aW9uXCIgZGFucyBsYSB2dWUgcsOpaW5pdGlhbGlzYXRpb25cbiAgLnJlZ2lzdGVyUGFnZSBwIGEubG9nb3V0IHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAucmVnaXN0ZXJQYWdlIHAgYS5sb2dvdXQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbi5zdWNjZXNzLW1lc3NhZ2Uge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlcyBpbnB1dHMgT1RQICovXG4ub3RwLWlucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4ub3RwLWlucHV0IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ub3RwLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDM0YjllO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg2LCAxMTQsIDIyOCwgMC4yKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogQm91dG9uIHRvZ2dsZSBPVFAgKi9cbi5vdHAtdG9nZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3RwLXRvZ2dsZS1idG46aG92ZXIge1xuICBjb2xvcjogIzAzNGI5ZTtcbn1cblxuLyogUmVzcG9uc2l2ZSBwb3VyIHBldGl0cyDDqWNyYW5zICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm90cC1pbnB1dCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAvLyBTdHlsZSBwb3VyIGZvb3RlciBcbiAgXG4gIC5tZXNfZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb3B5UmlnaHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9jb25uZXhpb24tcGFnZS9jb25uZXhpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxtQkFBQTtBQUVKOztBQUNFO0VBQ0kseUJBQUE7QUFFTjs7QUFDRTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDTjs7QUFFRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ047O0FBRUU7O0VBR0kscUNBQUE7RUFDQSxhQUFBO0FBQU47O0FBR0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQU47O0FBR0U7RUFDSSxhQUFBO0FBQU47O0FBR0U7RUFDSSxjQUFBO0VBSUEsZUFBQTtFQUNBLGVBQUE7QUFITjs7QUFPRTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUpOOztBQU9FO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUpOOztBQU9FO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFPRTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUpOOztBQVVFO0VBQ0ksZ0JBQUE7QUFQTjs7QUFVRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUE47O0FBVUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFQTjs7QUFXRTtFQUNJLGlCQUFBO0FBUk47O0FBWUUsZUFBQTtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVZOOztBQWFJO0VBQ0UsZ0JBQUE7QUFWTjs7QUFhSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBS0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtF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Qko7O0FBOEJFO0VBQ0UsMEJBQUE7QUEzQko7O0FBOEJBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBOEJBLCtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUEzQkY7O0FBOEJBLHNCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxjQUFBO0FBM0JGOztBQThCQSxrQ0FBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEzQkY7QUFDRjtBQThDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSxXQUFBO0VBRUEsZUFBQTtBQTdDSjtBQUZBLHd6bkJBQXd6bkIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2dsb2JhbHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyX2dsb2JhbF9jb250ZW50e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgfVxuICBcbiAgbmF2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWViO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICB9XG4gIFxuICAjbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWVudS1iYXJzLFxuICAubWVudS1jbG9zZVxuICB7XG4gICAgICBjb2xvcjogIzE0MTQxNGUwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmxvZ28gaDJ7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIFxuICAubG9nb3Mgc3BhbntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5sb2dvIHNwYW57XG4gICAgICBjb2xvcjogI0U5RDQyMTtcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAvL3BhZGRpbmc6IDVweCA3cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gIH1cbiAgXG4gIC5uYXYtbGlzdHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5uYXYtaXRlbXN7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbiAgXG4gIC5uYXZfX2xpbmt7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAubmF2X19saW5rOmhvdmVye1xuICAgICAgY29sb3I6ICNFOUQ0MjE7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjVzO1xuICB9XG4gIFxuICBcbiAgLy8gU2VjdGlvbiBwb3VyIGxhIGJpZW52ZW51XG4gIFxuICAud2VsY29tZSB7XG4gICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG4gIFxuICAud2VsY29tZSBoMntcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICB9XG4gIFxuICAud2VsY29tZSBwe1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgXG4gIC5jb250ZW50X3BhZ2Uge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3JtdWxhaXJlICovXG4gICAgXG4gICAgLmNoYW1wX2lucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1ZW1haWwge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgIGhlaWdodDogNDlweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNiY2JjO1xuICAgICAgLy8gYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIC8vIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgLy8gYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDkwLCA5NCwgOTcsIDAuMDUzKSAwcHggOHB4IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFmZmljaGVFbnRyZXByaXNlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLmVudHJlcHJzZURvbWFpbmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmVudHJlcHJzZURvbWFpbmVTaXRlIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGNvbG9yOiAwMDA7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgICB0b3A6IC02cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLmRvdWJsZV9pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmljb25fcmVzZWF1X2NvbnRhY3Qge1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmljb25fcmVzZWF1X2NvbnRhY3QgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmM7XG4gICAgfVxuICAgIFxuICAgIC5idG5fY29udGFjdCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5idG5fY29udGFjdCBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0YzU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyUGFnZSBwe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5yZWdpc3RlclBhZ2UgcCAubG9nb3V0IHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXJQYWdlIHAgLmxvZ291dCB7XG4gICAgICBjb2xvcjogIzAzNjFjNTtcbiAgICB9XG4gICAgXG4gICAgLmJ0bl9jb250YWN0IGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC41O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfbWFyZ2luIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC50aXRsZV9mb3JtIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMmIyOTI5O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfbG9naW4ge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAucmVzZXRQYXNzd29yZCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTEycHg7XG4gICAgfVxuICAgIFxuICAgIC5yZXNldFBhc3N3b3JkIHB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiAjMWUxZTFlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5yZXNldFBhc3N3b3JkIHA6aG92ZXIge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjU7XG4gICAgfVxuICBcbiAgLmZvcm11bGFpcmVfaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgXG4gIFxuICAvLyBpbWFnZSBcbiAgXG4gIFxuICAuaW5mb19mb3JtX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC8vIFBvcCB1cFxuICBcbiAgLyogT3ZlcmxheSBkZSBsYSBwb3B1cCAqL1xuICAubW9kYWwtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIC8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC8qIEhlYWRlciBkZSBsYSBwb3B1cCBhdmVjIGwnaW1hZ2UgZXQgbGUgdGl0cmUgKi9cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnBvcHVwLWltZyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5wb3B1cC1pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgZHUgYm91dG9uICovXG4gIC5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudC5lcnJvciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBkJ2FwcGFyaXRpb24gKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gU3R5bGUgcG91ciBsZXMgdGVtb2lnbmFnZVxuICBcbiAgLmNvbnRhaW5lcl90ZW1vaWduYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGhlaWdodDogNjB2aDtcbiAgfVxuICBcbiAgLmNvbnRlbnRfdGVtb2lnbmFnZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAudGVtb2lnbmFnZV9sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgfVxuICBcbiAgLnRlbW9pZ25hZ2VfcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgfVxuICBcbiAgLnRlbW9pZ25hZ2VfcmlnaHQgLnRpdGxle1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cbiAgXG4gIC50ZW1vaWduYWdlX3JpZ2h0IC5jb250ZW51ZSB7XG4gICAgY29sb3I6ICNmMGVlZWU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgLnRlbW9pZ25hZ2VfcmlnaHQgLmNvbnRlbnVlIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7IFxuICB9XG4gIFxuICAuc3Bpbm5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgICBcbiAgLnJlc2V0LWluc3RydWN0aW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC8vIFBvdXIgbGUgdGV4dGUgXCJDb25uZXhpb25cIiBkYW5zIGxhIHZ1ZSByw4PCqWluaXRpYWxpc2F0aW9uXG4gIC5yZWdpc3RlclBhZ2UgcCBhLmxvZ291dCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLnJlZ2lzdGVyUGFnZSBwIGEubG9nb3V0OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4uc3VjY2Vzcy1tZXNzYWdlIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgaW5wdXRzIE9UUCAqL1xuLm90cC1pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW46IDI1cHggMDtcbn1cblxuLm90cC1pbnB1dCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAycHggc29saWQgIzA2NzJFNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm90cC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAzNGI5ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNiwgMTE0LCAyMjgsIDAuMik7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEJvdXRvbiB0b2dnbGUgT1RQICovXG4ub3RwLXRvZ2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm90cC10b2dnbGUtYnRuOmhvdmVyIHtcbiAgY29sb3I6ICMwMzRiOWU7XG59XG5cbi8qIFJlc3BvbnNpdmUgcG91ciBwZXRpdHMgw4PCqWNyYW5zICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm90cC1pbnB1dCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAvLyBTdHlsZSBwb3VyIGZvb3RlciBcbiAgXG4gIC5tZXNfZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb3B5UmlnaHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_login_connexion-page_connexion-page_component_ts.js.map