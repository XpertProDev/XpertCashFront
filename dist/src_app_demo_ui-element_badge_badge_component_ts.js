"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_ui-element_badge_badge_component_ts"],{

/***/ 70820:
/*!**********************************************************!*\
  !*** ./src/app/demo/ui-element/badge/badge.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeComponent)
/* harmony export */ });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 33413);
// project import



class BadgeComponent {
  static {
    this.ɵfac = function BadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BadgeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BadgeComponent,
      selectors: [["app-badge"]],
      decls: 125,
      vars: 6,
      consts: [[1, "row", "btn-page"], [1, "col-sm-12"], ["cardTitle", "Basic Badges", "blockClass", "pt-0", 3, "options"], [1, "badge", "bg-secondary"], ["cardTitle", "Button Badges", "blockClass", "pt-0", 3, "options"], ["type", "button", 1, "btn", "btn-primary"], [1, "badge", "bg-light", "text-dark"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-info"], ["cardTitle", "Contextual Variations", "blockClass", "pt-0", 3, "options"], [1, "badge", "m-r-5", "bg-primary"], [1, "badge", "m-r-5", "bg-secondary"], [1, "badge", "m-r-5", "bg-success"], [1, "badge", "m-r-5", "bg-danger"], [1, "badge", "m-r-5", "bg-warning"], [1, "badge", "m-r-5", "bg-info"], [1, "badge", "m-r-5", "bg-light", "text-dark"], [1, "badge", "bg-dark"], ["cardTitle", "Pill Badges", "blockClass", "pt-0", 3, "options"], [1, "badge", "m-r-5", "badge-pill", "bg-primary"], [1, "badge", "m-r-5", "badge-pill", "bg-secondary"], [1, "badge", "m-r-5", "badge-pill", "bg-success"], [1, "badge", "m-r-5", "badge-pill", "bg-danger"], [1, "badge", "m-r-5", "badge-pill", "bg-warning"], [1, "badge", "m-r-5", "badge-pill", "bg-info"], [1, "badge", "m-r-5", "badge-pill", "bg-light", "text-dark"], [1, "badge", "badge-pill", "bg-dark"], ["cardTitle", "Links", "blockClass", "pt-0", 3, "options"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-primary"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-secondary"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-success"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-danger"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-warning"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-info"], ["href", "javascript:", 1, "badge", "m-r-5", "bg-light", "text-dark"], ["href", "javascript:", 1, "badge", "bg-dark"], ["cardTitle", "Light variant", "blockClass", "pt-0", 3, "options"], [1, "badge", "m-r-5", "badge-light-primary"], [1, "badge", "m-r-5", "badge-light-secondary"], [1, "badge", "m-r-5", "badge-light-success"], [1, "badge", "m-r-5", "badge-light-danger"], [1, "badge", "m-r-5", "badge-light-warning"], [1, "badge", "m-r-5", "badge-light-info"], [1, "badge", "m-r-5", "badge-light-light", "text-dark"], [1, "badge", "badge-light-dark"]],
      template: function BadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-card", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 1)(28, "app-card", 4)(29, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " primary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " secondary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " success ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " danger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " warning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 1)(54, "app-card", 12)(55, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 1)(72, "app-card", 21)(73, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 1)(90, "app-card", 30)(91, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 1)(108, "app-card", 39)(109, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby91aS1lbGVtZW50L2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-element_badge_badge_component_ts.js.map