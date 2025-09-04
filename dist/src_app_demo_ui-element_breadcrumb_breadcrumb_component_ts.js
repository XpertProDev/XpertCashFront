"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_ui-element_breadcrumb_breadcrumb_component_ts"],{

/***/ 32972:
/*!********************************************************************!*\
  !*** ./src/app/demo/ui-element/breadcrumb/breadcrumb.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class BreadcrumbComponent {
  static {
    this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 242,
      vars: 0,
      consts: [[1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-header"], [1, "card-body"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript:"], [1, "feather", "icon-home"], ["href", "javascript:", "title", "Home"], [1, "feather", "icon-home", "fs-6"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", "'>'"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", "url(\n              \"data:image/svg + xml,\n              %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='currentColor'/%3E%3C/svg%3E\"\n            )"], [1, "col-sm-12"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "javascript:", 1, "page-link"], [1, "mt-5"], ["href", "javascript:", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "javascript:", "aria-label", "Next", 1, "page-link"], ["aria-label", "..."], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item", "active"], ["aria-label", "...", 1, "mb-4"], [1, "pagination", "pagination-lg"], ["href", "javascript:", "tabindex", "-1", 1, "page-link"], [1, "pagination", "pagination-sm"], [1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-end"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "nav", 5)(8, "ol", 6)(9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 5)(12, "ol", 6)(13, "li", 8)(14, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav", 5)(19, "ol", 6)(20, "li", 8)(21, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8)(24, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1)(29, "div", 2)(30, "div", 3)(31, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Breadcrumb Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4)(34, "nav", 5)(35, "ol", 6)(36, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nav", 5)(39, "ol", 6)(40, "li", 8)(41, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nav", 5)(46, "ol", 6)(47, "li", 8)(48, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 8)(51, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1)(56, "div", 2)(57, "div", 3)(58, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Breadcrumb Dividers [ character ]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4)(61, "nav", 13)(62, "ol", 6)(63, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nav", 13)(66, "ol", 6)(67, "li", 8)(68, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nav", 13)(73, "ol", 6)(74, "li", 8)(75, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 8)(78, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1)(83, "div", 2)(84, "div", 3)(85, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Breadcrumb Dividers [ embedded SVG icon ]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 4)(88, "nav", 14)(89, "ol", 6)(90, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nav", 14)(93, "ol", 6)(94, "li", 8)(95, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nav", 14)(100, "ol", 6)(101, "li", 8)(102, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 8)(105, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15)(110, "div", 2)(111, "div", 3)(112, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4)(115, "nav", 16)(116, "ul", 17)(117, "li", 18)(118, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 18)(121, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 18)(124, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 18)(127, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 18)(130, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Working with Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "nav", 16)(136, "ul", 17)(137, "li", 18)(138, "a", 21)(139, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u00AB");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 18)(144, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 18)(147, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 18)(150, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 18)(153, "a", 24)(154, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u00BB");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Disabled and Active States");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "nav", 25)(162, "ul", 17)(163, "li", 26)(164, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 18)(167, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li", 28)(170, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " 2 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "(current)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 18)(175, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li", 18)(178, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "nav", 29)(184, "ul", 30)(185, "li", 26)(186, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 18)(189, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 18)(192, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nav", 25)(195, "ul", 32)(196, "li", 26)(197, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li", 18)(200, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 18)(203, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "nav", 16)(209, "ul", 33)(210, "li", 26)(211, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li", 18)(214, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li", 18)(217, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li", 18)(220, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li", 18)(223, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "nav", 16)(226, "ul", 34)(227, "li", 26)(228, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li", 18)(231, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li", 18)(234, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li", 18)(237, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 18)(240, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby91aS1lbGVtZW50L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-element_breadcrumb_breadcrumb_component_ts.js.map