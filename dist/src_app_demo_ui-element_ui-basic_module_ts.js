"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_ui-element_ui-basic_module_ts"],{

/***/ 32570:
/*!************************************************************!*\
  !*** ./src/app/demo/ui-element/ui-basic-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBasicRoutingModule: () => (/* binding */ UiBasicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



const routes = [{
  path: '',
  children: [{
    path: 'badges',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_badge_badge_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./badge/badge.component */ 70820))
  }, {
    path: 'button',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_button_button_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./button/button.component */ 8822))
  }, {
    path: 'breadcrumb-paging',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_breadcrumb_breadcrumb_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./breadcrumb/breadcrumb.component */ 32972))
  }, {
    path: 'collapse',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_collapse_collapse_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./collapse/collapse.component */ 76084))
  }, {
    path: 'tabs-pills',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_tabs-pills_tabs-pills_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs-pills/tabs-pills.component */ 13380))
  }, {
    path: 'typography',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_typography_typography_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./typography/typography.component */ 48996))
  }]
}];
class UiBasicRoutingModule {
  static {
    this.ɵfac = function UiBasicRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UiBasicRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiBasicRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiBasicRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 1859:
/*!****************************************************!*\
  !*** ./src/app/demo/ui-element/ui-basic.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBasicModule: () => (/* binding */ UiBasicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-basic-routing.module */ 32570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class UiBasicModule {
  static {
    this.ɵfac = function UiBasicModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UiBasicModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiBasicModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBasicRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiBasicModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBasicRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-element_ui-basic_module_ts.js.map