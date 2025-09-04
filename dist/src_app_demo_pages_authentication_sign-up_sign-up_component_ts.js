"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_pages_authentication_sign-up_sign-up_component_ts"],{

/***/ 76746:
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/sign-up/sign-up.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);

// project import



const _c0 = () => ["/auth/signin"];
class SignUpComponent {
  static {
    this.ɵfac = function SignUpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignUpComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 36,
      vars: 2,
      consts: [[1, "auth-wrapper"], [1, "auth-content"], [1, "card"], [1, "row", "align-items-center", "text-center"], [1, "col-md-12"], [1, "card-body"], ["src", "assets/images/logo-dark.png", "alt", "logo", 1, "img-fluid", "mb-4"], [1, "mb-3", "f-w-400"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "feather", "icon-user"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "feather", "icon-mail"], ["type", "email", "placeholder", "Email address", "aria-label", "Username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group", "mb-4"], ["id", "basic-addon3", 1, "input-group-text"], [1, "feather", "icon-lock"], ["type", "password", "placeholder", "Password", "aria-label", "Username", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "form-group", "text-start", "mt-2"], [1, "checkbox", "checkbox-primary", "d-inline"], ["type", "checkbox", "name", "checkbox-fill-2", "id", "checkbox-fill-2"], ["for", "checkbox-fill-2", 1, "cr"], ["href", "javascript:"], [1, "d-grid"], [1, "btn", "btn-primary", "btn-block", "mb-4"], [1, "mb-2"], [1, "f-w-400", 3, "routerLink"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19)(22, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Send me the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " weekly. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24)(30, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Signin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_sign-up_sign-up_component_ts.js.map