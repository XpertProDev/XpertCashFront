"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_ui-element_typography_typography_component_ts"],{

/***/ 48996:
/*!********************************************************************!*\
  !*** ./src/app/demo/ui-element/typography/typography.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 33413);
// project import



class TypographyComponent {
  static {
    this.ɵfac = function TypographyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TypographyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TypographyComponent,
      selectors: [["app-typography"]],
      decls: 202,
      vars: 8,
      consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "badges"], [1, "card-body"], [1, "clearfix"], ["cardTitle", "Display Headings", 3, "options"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "display-5"], [1, "display-6"], [1, "col-md-6"], ["cardTitle", "Inline Text Elements", 3, "options"], [1, "lead", "m-t-0"], ["cardTitle", "Contextual Text Colors", 3, "options"], [1, "text-muted", "mb-1"], [1, "text-primary", "mb-1"], [1, "text-success", "mb-1"], [1, "text-info", "mb-1"], [1, "text-warning", "mb-1"], [1, "text-danger", "mb-1"], [1, "text-dark", "mb-1"], [1, "col-md-6", "col-lg-4"], ["cardTitle", "Unordered", 3, "options"], ["cardTitle", "Ordered", 3, "options"], [1, "col-md-12", "col-lg-4"], ["cardTitle", "Unstyled", 3, "options"], [1, "list-unstyled"], [1, "list-inline", "m-b-0"], [1, "list-inline-item"], ["cardTitle", "Blockquotes", 3, "options"], [1, "text-muted", "m-b-30"], [1, "blockquote"], [1, "mb-2", "pb-2"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "text-muted", "m-b-15", "m-t-20"], [1, "blockquote", "text-end"], ["cardTitle", ">Horizontal Description", 3, "options"], [1, "dl-horizontal", "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"]],
      template: function TypographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Headings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p")(7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ".h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " through .h6 classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "h1. Heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "h2. Heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "This is a H3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "This is a H4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "This is a H5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "This is a H6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 1)(29, "app-card", 7)(30, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Display 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h1", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Display 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Display 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h1", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Display 4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Display 5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h1", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Display 6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 14)(43, "app-card", 15)(44, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Your title goes here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " You can use the mark tag to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "highlight");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " text. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "del");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "This line of text is meant to be treated as deleted text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "This line of text is meant to be treated as an addition to the document.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "rendered as bold text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "rendered as italicized text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 14)(63, "app-card", 17)(64, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Nullam id dolor id nibh ultricies vehicula ut id elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Maecenas sed diam eget risus varius blandit sit amet non magna.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Etiam porta sem malesuada magna mollis euismod.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Donec ullamcorper nulla non metus auctor fringilla.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Nullam id dolor id nibh ultricies vehicula ut id elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 25)(79, "app-card", 26)(80, "ul")(81, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Lorem ipsum dolor sit amet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Consectetur adipiscing elit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Integer molestie lorem at massa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Facilisis in pretium nisl aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Nulla volutpat aliquam velit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "ul")(92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Phasellus iaculis neque");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Purus sodales ultricies");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Vestibulum laoreet porttitor sem");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Ac tristique libero volutpat at");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Faucibus porta lacus fringilla vel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Aenean sit amet erat nunc");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Eget porttitor lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 25)(107, "app-card", 27)(108, "ol")(109, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Lorem ipsum dolor sit amet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Consectetur adipiscing elit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Integer molestie lorem at massa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Facilisis in pretium nisl aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Nulla volutpat aliquam velit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "ul")(120, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Phasellus iaculis neque");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Purus sodales ultricies");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Vestibulum laoreet porttitor sem");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Ac tristique libero volutpat at");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Faucibus porta lacus fringilla vel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Aenean sit amet erat nunc");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Eget porttitor lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 28)(135, "app-card", 29)(136, "ul", 30)(137, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Lorem ipsum dolor sit amet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " Integer molestie lorem at massa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "ul")(142, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Phasellus iaculis neque");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Faucibus porta lacus fringilla vel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Eget porttitor lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Inline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "ul", 31)(152, "li", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Lorem ipsum");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "li", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Phasellus iaculis");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Nulla volutpat");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 14)(159, "app-card", 33)(160, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Your awesome text goes here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "blockquote", 35)(163, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "footer", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " Someone famous in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "cite", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Source Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, ".text-end");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " for a blockquote with right-aligned content. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "blockquote", 40)(175, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "footer", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, " Someone famous in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "cite", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Source Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 14)(182, "app-card", 41)(183, "dl", 42)(184, "dt", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Description lists");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "dd", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "A description list is perfect for defining terms.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "dt", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Euismod");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "dd", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "dd", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Donec id elit non mi porta gravida at eget metus.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "dt", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Malesuada porta");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "dd", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Etiam porta sem malesuada magna mollis euismod.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "dt", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Truncated term is truncated");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "dd", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, " Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby91aS1lbGVtZW50L3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-element_typography_typography_component_ts.js.map