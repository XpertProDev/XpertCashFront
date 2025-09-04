"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["default-src_app_admin-page_facture-proforma_facture-proforma-apercu_facture-proforma-apercu_c-3bb9cc"],{

/***/ 13868:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/MODELS/number-to-words.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnLettresPipe: () => (/* binding */ EnLettresPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class EnLettresPipe {
  constructor() {
    this.unite = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    this.dizaine = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
    this.dizaineSpecial = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
  }
  transform(value) {
    if (isNaN(value)) {
      return '';
    }
    const n = Math.floor(value);
    const words = this.numberToWords(n) + ' Francs CFA';
    // Mettre en majuscule la première lettre
    return words.charAt(0).toUpperCase() + words.slice(1);
  }
  numberToWords(n) {
    if (n < 10) {
      return this.unite[n];
    }
    if (n < 17) {
      return this.dizaineSpecial[n - 10];
    }
    if (n < 20) {
      return 'dix-' + this.unite[n - 10];
    }
    if (n < 70) {
      const d = Math.floor(n / 10);
      const reste = n % 10;
      return this.dizaine[d] + (reste ? '-' + this.unite[reste] : '');
    }
    if (n < 80) {
      return 'soixante-' + this.numberToWords(n - 60);
    }
    if (n < 100) {
      return 'quatre-vingt' + (n % 20 ? '-' + this.numberToWords(n % 20) : '');
    }
    if (n < 1000) {
      const c = Math.floor(n / 100);
      const reste = n % 100;
      return (c > 1 ? this.unite[c] + '-cent' : 'cent') + (reste ? '-' + this.numberToWords(reste) : '');
    }
    if (n < 1000000) {
      const m = Math.floor(n / 1000);
      const reste = n % 1000;
      return (m > 1 ? this.numberToWords(m) + ' mille' : 'mille') + (reste ? ' ' + this.numberToWords(reste) : '');
    }
    if (n < 1000000000) {
      const millions = Math.floor(n / 1000000);
      const reste = n % 1000000;
      return (millions > 1 ? this.numberToWords(millions) + ' millions' : 'un million') + (reste ? ' ' + this.numberToWords(reste) : '');
    }
    return 'nombre trop grand';
  }
  static {
    this.ɵfac = function EnLettresPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EnLettresPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "enLettres",
      type: EnLettresPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 44074:
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureProformaApercuComponent: () => (/* binding */ FactureProformaApercuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MODELS/number-to-words.pipe */ 13868);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/facture-preview-service */ 61068);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/factureproforma-service */ 72409);
/* harmony import */ var _SERVICES_form_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/form-state.service */ 88704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);













function FactureProformaApercuComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Client : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.facture.client.nomComplet);
  }
}
function FactureProformaApercuComponent_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Entreprise :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.facture.entrepriseClient.nom);
  }
}
function FactureProformaApercuComponent_div_0_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r3.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r1.formatDescription(ligne_r3.ligneDescription || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ligne_r3.prixUnitaire));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r3.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 7, ligne_r3.prixUnitaire * ligne_r3.quantite));
  }
}
function FactureProformaApercuComponent_div_0_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Remise (", ctx_r1.facture.remise, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, ctx_r1.facture.totalHT * ctx_r1.facture.remise / 100));
  }
}
function FactureProformaApercuComponent_div_0_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, ctx_r1.facture.totalHT - ctx_r1.facture.totalHT * ctx_r1.facture.remise / 100), " ");
  }
}
function FactureProformaApercuComponent_div_0_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" TVA (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, ((tmp_4_0 = ctx_r1.tauxTva) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0) * 100, "1.0-2"), " %) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 5, (ctx_r1.facture.totalHT - ctx_r1.facture.totalHT * ((tmp_5_0 = ctx_r1.facture.remise) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0) / 100) * ((tmp_5_0 = ctx_r1.tauxTva) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0), "1.0-2"), " ");
  }
}
function FactureProformaApercuComponent_div_0_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, ctx_r1.facture.totalFacture));
  }
}
function FactureProformaApercuComponent_div_0_p_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.siteWeb);
  }
}
function FactureProformaApercuComponent_div_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getLegalInfo());
  }
}
function FactureProformaApercuComponent_div_0_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getAddressInfo());
  }
}
function FactureProformaApercuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureProformaApercuComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.navigateBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function FactureProformaApercuComponent_div_0_Template_img_error_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.logo = ctx_r1.fallbackLogo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "hr")(22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 18)(24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Facture proforma n\u02DA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "xxx-xx-xxxx");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 20)(29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, FactureProformaApercuComponent_div_0_div_32_Template, 5, 1, "div", 21)(33, FactureProformaApercuComponent_div_0_div_33_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 22)(35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Object :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "table", 23)(40, "thead")(41, "tr")(42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Prix Unitaire (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, FactureProformaApercuComponent_div_0_tr_53_Template, 12, 9, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "tfoot")(55, "tr")(56, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, FactureProformaApercuComponent_div_0_tr_61_Template, 6, 4, "tr", 27)(62, FactureProformaApercuComponent_div_0_tr_62_Template, 6, 3, "tr", 27)(63, FactureProformaApercuComponent_div_0_tr_63_Template, 7, 8, "tr", 27)(64, FactureProformaApercuComponent_div_0_tr_64_Template, 6, 3, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 28)(66, "p")(67, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "enLettres");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 31)(74, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 33)(81, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "hr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, FactureProformaApercuComponent_div_0_p_83_Template, 3, 1, "p", 27)(84, FactureProformaApercuComponent_div_0_div_84_Template, 3, 1, "div", 27)(85, FactureProformaApercuComponent_div_0_div_85_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Secterur: ", ctx_r1.secteur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" T\u00E9l\u00E9phone : ", ctx_r1.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.siege, ", le ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](31, 23, ctx_r1.facture.dateCreation, "dd MMMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.entrepriseClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.facture.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.facture.lignesFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 26, ctx_r1.facture.totalHT));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.remise);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.remise && ctx_r1.facture.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.facture.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 28, ctx_r1.facture.totalFacture), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.signataire);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.signataireNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.signataireNom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.siteWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getLegalInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getAddressInfo());
  }
}
function FactureProformaApercuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Aucune donn\u00E9e d\u2019aper\u00E7u\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureProformaApercuComponent_ng_template_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.router.navigate(["/add-facture-proforma"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class FactureProformaApercuComponent {
  constructor(previewService, userService, factureService,
  // Utiliser le bon nom
  formStateService,
  // Ajouter le service
  router, entrepriseService) {
    this.previewService = previewService;
    this.userService = userService;
    this.factureService = factureService;
    this.formStateService = formStateService;
    this.router = router;
    this.entrepriseService = entrepriseService;
    this.facture = null;
    this.nom = null;
    this.logo = null;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imgUrl;
    this.fallbackLogo = `${this.apiUrl}/defaultLogo/Votre.png`;
  }
  ngOnInit() {
    this.getFacturePreview();
    this.getUserEntrepriseInfo();
  }
  getFacturePreview() {
    this.previewService.getPreview().subscribe(data => {
      if (!data) {
        // Si pas de données, on revient en arrière
        this.router.navigate(['/addfacture-proforma']);
      } else {
        this.facture = data;
      }
    });
  }
  onCreate() {
    if (!this.facture) return;
    // Préparer le payload comme dans AddfactureProformaComponent
    const dto = {
      description: this.facture.description,
      client: this.facture.client ? {
        id: this.facture.client.id
      } : undefined,
      entrepriseClient: this.facture.entrepriseClient ? {
        id: this.facture.entrepriseClient.id
      } : undefined,
      lignesFacture: this.facture.lignesFacture.map(l => ({
        produit: {
          id: l.produit.id
        },
        quantite: l.quantite,
        ligneDescription: l.ligneDescription,
        prixUnitaire: l.prixUnitaire
      }))
    };
    this.factureService.creerFactureProforma(dto,
    // Utiliser le dto créé
    this.facture.remise ?? undefined,
    // Prendre la remise depuis la preview
    this.facture.tva,
    // Prendre la TVA depuis la preview
    !!this.facture.remise || this.facture.tva).subscribe({
      next: res => {
        this.formStateService.clearState();
        this.router.navigate(['/facture-proforma']);
      },
      error: err => console.error('Erreur création facture :', err)
    });
  }
  navigateBack() {
    this.router.navigate(['/addfacture-proforma']);
  }
  getUserEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: entreprise => {
        console.log("Entreprise reçue :", entreprise);
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;
        this.siteWeb = entreprise.siteWeb;
        this.signataire = entreprise.signataire;
        this.signataireNom = entreprise.signataireNom;
        this.tauxTva = entreprise.tauxTva;
        // Ajout du préfixe si nécessaire
        this.logo = `${this.apiUrl}${entreprise.logo}`;
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  getLegalInfo() {
    const parts = [];
    if (this.nina) {
      parts.push(`NINA : ${this.nina}`);
    }
    if (this.rccm) {
      parts.push(`RCCM : ${this.rccm}`);
    }
    if (this.nif) {
      parts.push(`NIF : ${this.nif}`);
    }
    if (this.banque) {
      parts.push(`Banque : ${this.banque}`);
    }
    return parts.join(' ; ');
  }
  getAddressInfo() {
    const adresse = this.adresse;
    const siege = this.siege;
    const pays = this.pays;
    if (adresse && siege && pays) {
      return `Adresse : ${adresse} / ${siege}-${pays}`;
    } else if (adresse && siege) {
      return `Adresse : ${adresse} / ${siege}`;
    } else if (adresse && pays) {
      return `Adresse : ${adresse} / ${pays}`;
    } else if (siege && pays) {
      return `Adresse : ${siege} / ${pays}`;
    } else if (adresse) {
      return `Adresse : ${adresse}`;
    } else if (siege) {
      return `Adresse : ${siege}`;
    } else if (pays) {
      return `Adresse : ${pays}`;
    }
    return '';
  }
  formatDescription(desc) {
    if (!desc) return '';
    return desc.replace(/-\s*/g, '<br>- ');
  }
  static {
    this.ɵfac = function FactureProformaApercuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureProformaApercuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_3__.FacturePreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_5__.FactureProFormaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_form_state_service__WEBPACK_IMPORTED_MODULE_6__.FormStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__.EntrepriseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FactureProformaApercuComponent,
      selectors: [["app-facture-proforma-apercu"]],
      decls: 3,
      vars: 2,
      consts: [["noData", ""], ["class", "container_global", 4, "ngIf", "ngIfElse"], [1, "container_global"], [1, "information_cadre", 2, "position", "relative"], [1, "cadre_retour"], [1, "retour_icon", 3, "click"], [1, "ri-arrow-left-long-fill"], [1, "info_titre_input"], [1, "content"], [1, "header_apercu"], [1, "logo_entreprise"], ["alt", "Logo de l'entreprise", 3, "error", "src"], [1, "entete_entreprise"], [1, "content_entete"], [1, "para1"], [1, "para2"], [1, "para3"], ["href", "mail"], [1, "titre"], [2, "color", "#0000003e"], [1, "date"], ["class", "droit", 4, "ngIf"], [1, "object"], [1, "table"], [2, "width", "260px!important"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [4, "ngIf"], [1, "contenu_bottom"], [2, "font-weight", "600"], [1, "cachet_container"], [1, "cachet"], [1, "name_directeur"], [1, "container_footer"], [1, "footer"], [2, "margin-top", "40px"], ["style", "margin-top: -4px;", 4, "ngIf"], [1, "droit"], [1, "td_left"], [1, "td_left", 3, "innerHTML"], [2, "margin-top", "-4px"], [3, "click"]],
      template: function FactureProformaApercuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FactureProformaApercuComponent_div_0_Template, 86, 30, "div", 1)(1, FactureProformaApercuComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const noData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.facture)("ngIfElse", noData_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__.CustomNumberPipe, _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__.EnLettresPipe],
      styles: ["@charset \"UTF-8\";\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container_global[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.cadre_retour[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(60, 60, 60, 0.1607843137);\n  padding: 10px 10px 10px 15px;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.6px;\n}\n\n.retour_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #0672E4;\n  font-size: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 1223px;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.header_apercu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 70px;\n}\n\n.entete_entreprise[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.content_entete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n\n.content_entete[_ngcontent-%COMP%]   .para1[_ngcontent-%COMP%], \n.content_entete[_ngcontent-%COMP%]   .para2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n\n.titre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  text-align: center;\n  margin: 20px;\n}\n\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 5%;\n  font-size: 12px;\n}\n\n.droit[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-left: 37px;\n}\n\n.droit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.droit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #555;\n  margin: 10px 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 90%;\n  border-collapse: collapse;\n  margin: 20px 37px;\n  font-size: 11px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: center;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.total-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 50%;\n  margin-left: auto;\n}\n\n.total-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-top: 2px solid #333;\n  margin: 20px 0;\n}\n\ntd.table_td_1[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\ntd.table_td[_ngcontent-%COMP%] {\n  border-right: none;\n  border-top: none;\n  border-left: none;\n}\n\n.table_td_descripton[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd.td_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.contenu_bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  margin-left: 37px;\n}\n\n.cachet_container[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cachet[_ngcontent-%COMP%] {\n  position: relative;\n  top: 30px;\n  right: 41px;\n}\n\n.cachet[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n}\n\n.cachet[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n\n.cachet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #000;\n  font-family: brittany;\n  margin-top: 52%;\n}\n\n.name_directeur[_ngcontent-%COMP%] {\n  position: relative;\n  top: 26px;\n}\n\n.container_footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  bottom: 45px;\n  width: 96%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0.6px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n\n\n.facture-container[_ngcontent-%COMP%] {\n  max-width: 210mm; \n\n  margin: 20px auto;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  font-family: \"Arial\", sans-serif;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n.facture-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  padding: 1rem;\n  border: 1px solid #dc3545;\n  margin: 1rem 0;\n  border-radius: 4px;\n}\n\n\n\n.facture-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #333;\n  padding-bottom: 1rem;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-date[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n\n\n\n.client-info[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.client-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n\n\n.products-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ecf0f1;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #2c3e50;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n\n\n.totals-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: right;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n  color: #7f8c8d;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line.grand-total[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #2c3e50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmUtcHJvZm9ybWEtYXBlcmN1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUFHLFNBQUE7QUFHSDs7QUFGQTtFQUFJLFNBQUE7QUFNSjs7QUFKQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtBQUtKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQVNBO0VBQ0ksZUFBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVNBOztFQUdJLGdCQUFBO0FBUEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBYUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFBOztFQUdJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBWEo7O0FB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Y0FBQTtBQXBDUjtBQXVDTTtFQUNFLHlCQUFBO0FBckNSOztBQTBDRSxVQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBdkNKO0FBeUNJO0VBQ0UsY0FBQTtBQXZDTjtBQXlDTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQXZDUjtBQTBDTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBeENSIiwiZmlsZSI6ImZhY3R1cmUtcHJvZm9ybWEtYXBlcmN1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7bWFyZ2luOiAwO31cbmg0IHttYXJnaW46IDA7fVxuXG4uY29udGFpbmVyX2dsb2JhbCB7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhZHJlX3JldG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcbn1cblxuLmJ0bl9ham91dGVyIHAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4ucmV0b3VyX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLy8gY2FkcmUgaW5mb3JtYXRpb25cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogMTIyM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbn1cblxuLmhlYWRlcl9hcGVyY3Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBlbnRldGVfZW50cmVwcmlzZVxuXG4uZW50ZXRlX2VudHJlcHJpc2Uge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb250ZW50X2VudGV0ZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUwcHg7XG59XG5cbi5jb250ZW50X2VudGV0ZSAucGFyYTEsXG4uY29udGVudF9lbnRldGUgLnBhcmEyXG57XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLyBMaWduZVxuaHIge1xuICAgIG1hcmdpbjogM3B4IDA7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vIFRpcmVcblxuLnRpdHJlIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXRlIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvaXQsXG4ub2JqZWN0XG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzN3B4O1xufSBcblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTI7XG59XG5cbi5oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAyMHB4IDM3cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG50aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4udG90YWwtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udG90YWwtbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzMzMztcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxudGQudGFibGVfdGRfMSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ZC50YWJsZV90ZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnRhYmxlX3RkX2Rlc2NyaXB0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQudGRfbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW51X2JvdHRvbSBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XG59XG5cbi5jYWNoZXRfY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYWNoZXRfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhY2hldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogNDFweDtcbn1cblxuLmNhY2hldCBoNntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FjaGV0IGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNhY2hldCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IGJyaXR0YW55O1xuICBtYXJnaW4tdG9wOiA1MiU7XG59XG5cblxuLm5hbWVfZGlyZWN0ZXVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNnB4O1xufVxuXG4uY29udGFpbmVyX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDVweDtcbiAgICB3aWR0aDogOTYlO1xufVxuXG4uZm9vdGVyIHAge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi5mb290ZXIgcCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3RlciBlbSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5cblxuXG5cblxuLyogU3R5bGVzIGRlIGJhc2UgKi9cbi5mYWN0dXJlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMTBtbTsgLyogRm9ybWF0IEE0ICovXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgXG4gICAgLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgXG4gICAgICAuc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLyogRW4tdMOqdGUgKi9cbiAgLmZhY3R1cmUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBcbiAgICAuY29tcGFueS1pbmZvIHtcbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmZhY3R1cmUtbWV0YSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIFxuICAgICAgLmZhY3R1cmUtbnVtYmVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZmFjdHVyZS1kYXRlIHtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBTZWN0aW9uIGNsaWVudCAqL1xuICAuY2xpZW50LWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgXG4gICAgaDMge1xuICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBUYWJsZWF1IGRlcyBwcm9kdWl0cyAqL1xuICAucHJvZHVjdHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgXG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZjBmMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogVG90YWwgKi9cbiAgLnRvdGFscy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICBcbiAgICAudG90YWwtbGluZSB7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIFxuICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuZ3JhbmQtdG90YWwge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgfVxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXByb2Zvcm1hL2ZhY3R1cmUtcHJvZm9ybWEtYXBlcmN1L2ZhY3R1cmUtcHJvZm9ybWEtYXBlcmN1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUFHLFNBQUE7QUFHSDs7QUFGQTtFQUFJLFNBQUE7QUFNSjs7QUFKQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtBQUtKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQVNBO0VBQ0ksZUFBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVNBOztFQUdJLGdCQUFBO0FBUEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBYUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtB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QUFuQ047QUFxQ007RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQW5DUjtBQXNDTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQXBDUjtBQXVDTTtFQUNFLHlCQUFBO0FBckNSOztBQTBDRSxVQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBdkNKO0FBeUNJO0VBQ0UsY0FBQTtBQXZDTjtBQXlDTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQXZDUjtBQTBDTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBeENSO0FBRkEsd3JaQUF3cloiLCJzb3VyY2VzQ29udGVudCI6WyJwIHttYXJnaW46IDA7fVxuaDQge21hcmdpbjogMDt9XG5cbi5jb250YWluZXJfZ2xvYmFsIHtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FkcmVfcmV0b3VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNjM2MzYzI5O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufVxuXG4uYnRuX2Fqb3V0ZXIgcCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi5yZXRvdXJfaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMjIzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxufVxuXG4uaGVhZGVyX2FwZXJjdSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb19lbnRyZXByaXNlIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGVudGV0ZV9lbnRyZXByaXNlXG5cbi5lbnRldGVfZW50cmVwcmlzZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubG9nb19lbnRyZXByaXNlIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIC5wYXJhMSxcbi5jb250ZW50X2VudGV0ZSAucGFyYTJcbntcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vIExpZ25lXG5ociB7XG4gICAgbWFyZ2luOiAzcHggMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmRhdGUgcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XG59IFxuXG4uZHJvaXQgaDQsXG4ub2JqZWN0IGg0IFxue1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5kcm9pdCBwLFxuLm9iamVjdCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMjtcbn1cblxuLmhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW46IDIwcHggMzdweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbnRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi50b3RhbC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi50b3RhbC1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG50ZC50YWJsZV90ZF8xIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbnRkLnRhYmxlX3RkIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAvLyBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udGFibGVfdGRfZGVzY3JpcHRvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnVfYm90dG9tIHB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMzdweDtcbn1cblxuLmNhY2hldF9jb250YWluZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhY2hldF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FjaGV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiA0MXB4O1xufVxuXG4uY2FjaGV0IGg2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWNoZXQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uY2FjaGV0IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogYnJpdHRhbnk7XG4gIG1hcmdpbi10b3A6IDUyJTtcbn1cblxuXG4ubmFtZV9kaXJlY3RldXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI2cHg7XG59XG5cbi5jb250YWluZXJfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0NXB4O1xuICAgIHdpZHRoOiA5NiU7XG59XG5cbi5mb290ZXIgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbn1cblxuLmZvb3RlciBwIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9vdGVyIGVtIHtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cblxuXG5cblxuXG4vKiBTdHlsZXMgZGUgYmFzZSAqL1xuLmZhY3R1cmUtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIxMG1tOyAvKiBGb3JtYXQgQTQgKi9cbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBcbiAgICAubG9hZGluZy1vdmVybGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBcbiAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzNDk4ZGI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xuICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG4gIFxuICAvKiBFbi10w4PCqnRlICovXG4gIC5mYWN0dXJlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgXG4gICAgLmNvbXBhbnktaW5mbyB7XG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5mYWN0dXJlLW1ldGEge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBcbiAgICAgIC5mYWN0dXJlLW51bWJlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZhY3R1cmUtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogU2VjdGlvbiBjbGllbnQgKi9cbiAgLmNsaWVudC1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLyogVGFibGVhdSBkZXMgcHJvZHVpdHMgKi9cbiAgLnByb2R1Y3RzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIFxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIFxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2YwZjE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFRvdGFsICovXG4gIC50b3RhbHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICAgLnRvdGFsLWxpbmUge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBcbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLmdyYW5kLXRvdGFsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin-page_facture-proforma_facture-proforma-apercu_facture-proforma-apercu_c-3bb9cc.js.map