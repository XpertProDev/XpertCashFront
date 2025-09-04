"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_pages_authentication_sign-in_sign-in_component_ts"],{

/***/ 53662:
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/sign-in/sign-in.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);

// project import



const _c0 = () => ["/auth/signup"];
class SignInComponent {
  static {
    this.ɵfac = function SignInComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignInComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 33,
      vars: 2,
      consts: [[1, "auth-wrapper"], [1, "auth-content"], [1, "card"], [1, "row", "align-items-center", "text-center"], [1, "col-md-12"], [1, "card-body"], ["src", "assets/images/logo-dark.png", "alt", "logo", 1, "img-fluid", "mb-4"], [1, "mb-3", "f-w-400"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "feather", "icon-mail"], ["type", "email", "placeholder", "Email address", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "input-group", "mb-4"], ["id", "basic-addon3", 1, "input-group-text"], [1, "feather", "icon-lock"], ["type", "password", "placeholder", "Password", "aria-label", "Username", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "form-group", "text-start", "mt-2"], [1, "checkbox", "checkbox-primary", "d-inline"], ["type", "checkbox", "name", "checkbox-fill-1", "id", "checkbox-fill-a1", "checked", ""], ["for", "checkbox-fill-a1", 1, "cr"], [1, "d-grid"], [1, "btn", "btn-block", "btn-primary", "mb-4"], [1, "mb-2", "text-muted"], ["href", "javascriprt:", 1, "f-w-400"], [1, "mb-0", "text-muted"], [1, "f-w-400", 3, "routerLink"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "SignIn");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12)(14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16)(18, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save credentials");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20)(23, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "SignIn");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Forgot password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Don\u2019t have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Signup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_sign-in_sign-in_component_ts.js.map