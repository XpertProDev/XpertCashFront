"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_compte_compte_component_ts"],{

/***/ 31399:
/*!******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/roles.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesService: () => (/* binding */ RolesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class RolesService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
  getAllRoles() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("🔹 En-têtes envoyés :", headers);
      return this.http.get(`${this.apiUrl}/getAllRoles`, {
        headers
      });
    }));
  }
  static {
    this.ɵfac = function RolesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: RolesService,
      factory: RolesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57874:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/compte/compte.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompteComponent: () => (/* binding */ CompteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SERVICES/roles.service */ 31399);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/boutique-service */ 52719);













const _c0 = () => [5, 10, 25, 100];
function CompteComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function CompteComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function CompteComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CompteComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_tr_33_Template_tr_click_0_listener() {
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openPermissionDetail(user_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.nomComplet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.role == null ? null : user_r5.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r5.pays, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r5.phone);
  }
}
function CompteComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.messageNoClient, " ");
  }
}
function CompteComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function CompteComponent_div_35_Template_mat_paginator_page_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r1.filteredUsers.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
  }
}
function CompteComponent_div_36_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Le nom complet est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompteComponent_div_36_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Un email valide est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompteComponent_div_36_ng_container_24_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", role_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", role_r8.name, " ");
  }
}
function CompteComponent_div_36_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompteComponent_div_36_ng_container_24_option_1_Template, 2, 2, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const role_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isRoleVisible(role_r8.name));
  }
}
function CompteComponent_div_36_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Veuillez s\u00E9lectionner un r\u00F4le.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompteComponent_div_36_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Veuillez choisir un pays.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompteComponent_div_36_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Le num\u00E9ro de t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompteComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ajouter un membre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_div_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 36)(8, "div", 37)(9, "div", 38)(10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nom complet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CompteComponent_div_36_div_14_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CompteComponent_div_36_div_19_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 44)(21, "select", 45)(22, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Type de r\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CompteComponent_div_36_ng_container_24_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CompteComponent_div_36_div_25_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 48)(27, "div", 44)(28, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CompteComponent_div_36_Template_select_change_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Mali");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "S\u00E9n\u00E9gal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "C\u00F4te d'Ivoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CompteComponent_div_36_div_37_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CompteComponent_div_36_div_42_Template, 3, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 54)(44, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_div_36_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_div_36_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.userForm.get("nomComplet")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.userForm.get("nomComplet")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.userForm.get("roleType")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.userForm.get("roleType")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r1.userForm.get("pays")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.userForm.get("pays")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r1.userForm.get("phone")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.userForm.get("phone")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r1.userForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.userForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.userForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.userForm.invalid);
  }
}
class CompteComponent {
  constructor(rolesService, usersService, fb, http, router, route, boutiqueService) {
    this.rolesService = rolesService;
    this.usersService = usersService;
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.route = route;
    this.boutiqueService = boutiqueService;
    this.showPopup = false;
    this.roles = [];
    // roles: any[] = [];
    this.selectedRole = '';
    this.isLoading = false;
    this.errorMessage = null;
    this.successMessage = null;
    this.users = [];
    this.filteredUsers = [];
    this.messageNoClient = 'Aucun utilisateur disponible.';
    this.pageSize = 5;
    this.currentPage = 0;
    this.paginatedUsers = [];
    this.paysFlags = {
      'Mali': '🇲🇱',
      'Sénégal': '🇸🇳',
      'Côte d\'Ivoire': '🇨🇮',
      'Guinée': '🇬🇳',
      'Burkina Faso': '🇧🇫',
      'Niger': '🇳🇪'
    };
    this.indicatif = '';
    this.maxPhoneLength = 8;
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
      'Guinée': {
        indicatif: '+224',
        longueur: 9
      },
      'Burkina Faso': {
        indicatif: '+226',
        longueur: 8
      },
      'Niger': {
        indicatif: '+227',
        longueur: 8
      }
    };
    this.isAscending = true;
    this.searchTerm = '';
    this.currentUserRole = '';
    this.boutiques = [];
    this.showBoutiqueSelect = false;
  }
  ngOnInit() {
    this.loadRoles();
    this.initForm();
    this.updatePaginatedUsers();
    this.loadBoutiques();
    // this.handleRoleTypeChanges();
    this.loadCurrentUserRole();
    this.usersService.getUserInfo().subscribe({
      next: userData => {
        if (userData && userData.id) {
          this.entrepriseId = userData.id; // Stocker dans une propriété de classe
          this.loadUsersOfEntreprise(this.entrepriseId);
        }
      },
      error: err => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
      }
    });
    this.filteredUsers = this.users;
  }
  initForm() {
    this.userForm = this.fb.group({
      nomComplet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      roleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{8,15}$/)]],
      pays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      // boutiqueId: [null],
    });
  }
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
      this.userForm.controls['phone'].setValue(this.indicatif);
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }
  updatePhoneValidator(longueur) {
    this.userForm.controls['phone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)]);
    this.userForm.controls['phone'].updateValueAndValidity();
  }
  formatPhoneNumber() {
    let valeur = this.userForm.controls['phone'].value;
    if (!valeur.startsWith(this.indicatif)) {
      this.userForm.controls['phone'].setValue(this.indicatif);
    }
    let regex = new RegExp(`^\\${this.indicatif}(\\d*)$`);
    let match = valeur.match(regex);
    if (match) {
      let chiffres = match[1].replace(/\D/g, '');
      this.userForm.controls['phone'].setValue(this.indicatif + chiffres);
    }
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedUsers();
  }
  updatePaginatedUsers() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }
  loadRoles() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(token => {
      if (!token) {
        console.error('🔐 Aucun token trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.rolesService.getAllRoles();
    })).subscribe({
      next: data => {
        this.roles = data;
      },
      error: err => {
        console.error('Erreur lors du chargement des rôles', err);
      }
    });
  }
  loadUsersOfEntreprise(entrepriseId) {
    this.isLoading = true;
    const token = this.usersService.getToken();
    const connectedUserId = token ? this.usersService.extractUserIdFromToken(token) : null;
    this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
      next: data => {
        // ⚠️ Exclure l'utilisateur connecté
        const filteredData = data.filter(user => user.id !== connectedUserId);
        this.users = filteredData.map(user => ({
          ...user,
          flag: this.paysFlags[user.pays] || ''
        }));
        this.filteredUsers = this.users;
        this.updatePaginatedUsers();
        this.isLoading = false;
        console.log('Utilisateurs récupérés (hors connecté) :', this.users);
      },
      error: err => {
        console.error('Erreur lors du chargement des utilisateurs', err);
        this.isLoading = false;
      }
    });
  }
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
    this.resetForm();
  }
  resetForm() {
    this.userForm.patchValue({
      nomComplet: '',
      email: '',
      roleType: '',
      phone: '',
      pays: ''
      // boutiqueId: [null],
    });
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
    this.userForm.updateValueAndValidity();
  }
  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.userForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement.";
      return;
    }
    const request = this.userForm.value;
    this.isLoading = true;
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(token => {
      if (!token) {
        this.errorMessage = "Vous devez être connecté pour ajouter un utilisateur.";
        this.isLoading = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error("Aucun token trouvé"));
      }
      console.log("Données envoyées :", request);
      return this.usersService.addUserToEntreprise(request, token);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(response => {
      if (response.id) {
        this.successMessage = "Utilisateur ajouté avec succès !";
        this.userForm.reset();
        this.closePopup();
        // Redirection avec l'ID du nouvel utilisateur
        this.router.navigate(['/userPermission', response.id]);
        // Rafraîchir la liste avec l'ID stocké
        this.loadUsersOfEntreprise(this.entrepriseId);
        // Rafraîchir la liste des utilisateurs via getUserInfo
        return this.usersService.getUserInfo();
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
      }
    })).subscribe({
      next: userData => {
        if (userData && userData.id) {
          const entrepriseId = userData.id;
          this.loadUsersOfEntreprise(entrepriseId);
        }
        this.isLoading = false;
        setTimeout(() => this.successMessage = null, 3000);
      },
      error: err => {
        console.error("Erreur lors de l'ajout utilisateur ou récupération info utilisateur :", err);
        this.errorMessage = err.message || "Une erreur est survenue";
        this.isLoading = false;
      }
    });
  }
  openPermissionDetail(userId) {
    this.router.navigate(['/userPermission', userId]);
  }
  sortRoles() {
    this.users = this.users.sort((a, b) => {
      if (this.isAscending) {
        if (a.role?.name < b.role?.name) return -1;
        if (a.role?.name > b.role?.name) return 1;
      } else {
        if (a.role?.name > b.role?.name) return -1;
        if (a.role?.name < b.role?.name) return 1;
      }
      return 0;
    });
    this.isAscending = !this.isAscending;
    this.updatePaginatedUsers();
  }
  filterUsers(event) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user => user.nomComplet.toLowerCase().includes(this.searchTerm));
    this.currentPage = 0;
    this.updatePaginatedUsers();
  }
  clearSearch(inputElement) {
    this.searchTerm = '';
    this.filteredUsers = this.users;
    this.currentPage = 0; // Réinitialiser à la première page
    this.updatePaginatedUsers();
    inputElement.value = '';
  }
  /*
  handleRoleTypeChanges() {
    this.userForm.get('roleType')?.valueChanges.subscribe(role => {
      console.log('Rôle sélectionné :', role);
  
      if (role === 'VENDEUR') {
        this.showBoutiqueSelect = true;
        this.userForm.get('boutiqueId')?.setValidators(Validators.required);
        this.loadBoutiques();  // Charger les boutiques quand le rôle est VENDEUR
      } else {
        this.showBoutiqueSelect = false;
        this.userForm.get('boutiqueId')?.clearValidators();
        this.userForm.get('boutiqueId')?.setValue(null);
      }
      this.userForm.get('boutiqueId')?.updateValueAndValidity();
    });
  }
  */
  // loadBoutiques() {
  //   this.boutiqueService.getBoutiquesByEntreprise().subscribe({
  //     next: (data) => {
  //       this.boutiques = data;
  //       console.log("Liste des boutiques :", data);
  //     },
  //     error: (err) => {
  //       console.error('Erreur lors du chargement des boutiques', err);
  //     }
  //   });
  // }
  loadBoutiques() {
    // Vérifier rôle courant
    this.usersService.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe({
      next: user => {
        if (user && user.roleType === 'VENDEUR') {
          // Un vendeur ne doit pas créer/affecter d'autres vendeurs -> ne pas afficher la liste
          this.boutiques = user.boutiques || [];
        } else {
          // Admin/Manager : charge toutes les boutiques
          this.boutiqueService.getBoutiquesByEntreprise().subscribe({
            next: data => {
              this.boutiques = data;
            },
            error: err => console.error('Erreur lors du chargement des boutiques', err)
          });
        }
      },
      error: err => {
        // fallback
        this.boutiqueService.getBoutiquesByEntreprise().subscribe({
          next: data => {
            this.boutiques = data;
          },
          error: err => console.error(err)
        });
      }
    });
  }
  isRoleVisible(roleName) {
    if (this.currentUserRole === 'ADMIN' && roleName === 'ADMIN' || roleName === 'VENDEUR') {
      return false;
    }
    if (this.currentUserRole === 'MANAGER' && roleName === 'MANAGER' || roleName === 'ADMIN' || roleName === 'VENDEUR') {
      return false;
    }
    return true;
  }
  loadCurrentUserRole() {
    this.usersService.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe({
      next: user => {
        this.currentUserRole = user.roleType;
      },
      error: err => {
        console.error('Erreur lors de la récupération du rôle utilisateur :', err);
      }
    });
  }
  static {
    this.ɵfac = function CompteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_SERVICES_roles_service__WEBPACK_IMPORTED_MODULE_0__.RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_2__.BoutiqueService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CompteComponent,
      selectors: [["app-compte"]],
      decls: 37,
      vars: 8,
      consts: [["searchInput", ""], [1, "toast-container"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], [1, "containerTable"], ["class", "loading-overlay", 4, "ngIf"], [1, "tasks-header"], [1, "title"], [1, "actions"], [1, "add-task", 3, "click"], [1, "contentIcon"], [1, "bare"], [1, "inputSearch"], ["type", "text", "placeholder", "Recherche...", 3, "input"], [3, "click", "ngClass"], [1, "titleTableProduit"], [1, "content_sort"], [1, "icon_sort"], [1, "ri-sort-asc", 3, "click"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "no-client-message", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], [1, "alert", "alert-success", "toast-message-success"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [3, "click"], [1, "no-client-message"], [1, "pagination"], [3, "page", "length", "pageSize", "pageSizeOptions"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-header"], [1, "close-btn", 3, "click"], [3, "formGroup"], [1, "popup-body"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "formControlName", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], [1, "label"], [4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], [1, "champ_input"], ["formControlName", "roleType", 1, "input_focus"], ["value", "", "disabled", "", "selected", ""], [4, "ngFor", "ngForOf"], [1, "champ_grid"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["type", "text", "formControlName", "phone", "placeholder", "00 00 00 00", 1, "input_focus"], [1, "popup-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "error"], [3, "value", 4, "ngIf"], [3, "value"]],
      template: function CompteComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompteComponent_div_1_Template, 2, 1, "div", 2)(2, CompteComponent_div_2_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CompteComponent_div_4_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6)(6, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openPopup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CompteComponent_Template_input_input_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.filterUsers($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_Template_i_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const searchInput_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.clearSearch(searchInput_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "table")(18, "thead")(19, "tr", 15)(20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Nom complet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " R\u00F4le type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17)(27, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompteComponent_Template_i_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.sortRoles());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CompteComponent_tr_33_Template, 13, 6, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CompteComponent_div_34_Template, 2, 1, "div", 20)(35, CompteComponent_div_35_Template, 2, 4, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CompteComponent_div_36_Template, 48, 14, "div", 22);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.searchTerm ? "ri-close-line red-icon" : "ri-search-2-line");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredUsers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredUsers.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPopup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator],
      styles: ["@charset \"UTF-8\";\n.title_return[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 0 10px;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 15px 8px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n  transition: all 0.5s ease;\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  background-color: #eee;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.content_sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.icon_sort[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.icon_sort[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  cursor: pointer;\n  color: #292929;\n}\n\n\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.8823529412);\n  border: 1px solid #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #E7B1B6;\n  transition: all 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: rgba(6, 113, 228, 0.2039215686);\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 25px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 150px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #D5E6DE;\n  border: 1px solid #ACCEBC;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 9999999999;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.red-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 30px;\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXB0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSwwREFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7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QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQXJCRjs7QUF3QkE7RUFDRTtJQUFLLHVCQUFBO0VBcEJMO0VBcUJBO0lBQU8seUJBQUE7RUFsQlA7QUFDRjtBQW9CQTtFQUNFLFVBQUE7QUFsQkY7O0FBcUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFsQkYiLCJmaWxlIjoiY29tcHRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX3JldHVybiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgXG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4gIFxudGgsIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDE1cHggOHB4O1xuXG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gIFxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuICBcbi5jb250ZW50SWNvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbiAgXG4uY29udGVudEljb24gaXtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uY29udGVudEljb24gaTpob3ZlciB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbiAgXG4uYmFyZSB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbiAgXG4uaW5wdXRTZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGVudF9zb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX3NvcnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5pY29uX3NvcnQgaXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgLnBvcHVwLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5wb3B1cC1oZWFkZXIgaDQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnBvcHVwLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBlMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmJ0bi1jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0IxQjY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTQzNDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gIH1cblxuICAvLyAuYnRuLXN1Ym1pdDpob3ZlciB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0FDQ0VCQztcbiAgLy8gICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAvLyB9XG5cblxuICAvLyBpTlBVdFxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG5cbi5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG5cbi5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cblxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAvKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbiAvLyB0b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RTZERTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4vKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBldCBkaXNwYXJhw650cmUgbGUgdG9hc3QgKi9cbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw650IGF2ZWMgdW4gbMOpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICB9XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIC8vIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XG59XG5cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7IFxufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnJlZC1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm5vLWNsaWVudC1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jb21wdGUvY29tcHRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDBEQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNJLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxt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QTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXJCRjs7QUF3QkE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBckJGOztBQXdCQTtFQUNFO0lBQUssdUJBQUE7RUFwQkw7RUFxQkE7SUFBTyx5QkFBQTtFQWxCUDtBQUNGO0FBb0JBO0VBQ0UsVUFBQTtBQWxCRjs7QUFxQkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQWxCRjtBQUNBLHcrYUFBdythIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX3JldHVybiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgXG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4gIFxudGgsIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDE1cHggOHB4O1xuXG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gIFxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuICBcbi5jb250ZW50SWNvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbiAgXG4uY29udGVudEljb24gaXtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uY29udGVudEljb24gaTpob3ZlciB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbiAgXG4uYmFyZSB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbiAgXG4uaW5wdXRTZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGVudF9zb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX3NvcnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5pY29uX3NvcnQgaXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgLnBvcHVwLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5wb3B1cC1oZWFkZXIgaDQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnBvcHVwLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBlMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmJ0bi1jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0IxQjY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTQzNDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gIH1cblxuICAvLyAuYnRuLXN1Ym1pdDpob3ZlciB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0FDQ0VCQztcbiAgLy8gICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAvLyB9XG5cblxuICAvLyBpTlBVdFxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG5cbi5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG5cbi5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cblxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAvKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbiAvLyB0b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RTZERTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4vKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDg8KudHJlIGV0IGRpc3BhcmHDg8KudHJlIGxlIHRvYXN0ICovXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgLyogTGUgdG9hc3QgZGlzcGFyYcODwq50IGF2ZWMgdW4gbMODwqlnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gIH1cbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgLy8gZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogOTk5OTk5OTk5OTtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ucmVkLWljb24ge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubm8tY2xpZW50LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_compte_compte_component_ts.js.map