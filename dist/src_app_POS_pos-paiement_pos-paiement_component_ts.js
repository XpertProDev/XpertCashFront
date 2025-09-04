"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-paiement_pos-paiement_component_ts"],{

/***/ 46447:
/*!************************************************************!*\
  !*** ./src/app/POS/pos-paiement/pos-paiement.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosPaiementComponent: () => (/* binding */ PosPaiementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/vente-service */ 44413);
/* harmony import */ var src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/entreprise-service */ 92120);









const _c0 = ["receipt"];
function PosPaiementComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2714\uFE0E");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Paiement r\u00E9ussi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PosPaiementComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](3, 2, ctx_r1.vente.montantTotal, "CFA ", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("/ ", ctx_r1.paymentMethod, "");
  }
}
function PosPaiementComponent_li_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.nomProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](8, 4, item_r3.prixUnitaire, "CFA ", "symbol", "1.0-0"), " / Unit\u00E9(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](11, 9, item_r3.montantLigne, "CFA ", "symbol", "1.0-0"));
  }
}
function PosPaiementComponent_li_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Aucun produit trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PosPaiementComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Monnaie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](5, 1, ctx_r1.changeDue, "CFA ", "symbol", "1.0-0"));
  }
}
function PosPaiementComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reste \u00E0 payer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](5, 1, ctx_r1.changeDue, "CFA ", "symbol", "1.0-0"));
  }
}
function PosPaiementComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chargement du re\u00E7u...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PosPaiementComponent_div_62_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Monnaie \u00E0 rendre: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](3, 1, ctx_r1.tempPaymentAmount - ((tmp_4_0 = ctx_r1.vente == null ? null : ctx_r1.vente.montantTotal) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0), "CFA ", "symbol", "1.0-0"), "");
  }
}
function PosPaiementComponent_div_62_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Reste \u00E0 payer: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](3, 1, ((tmp_4_0 = ctx_r1.vente == null ? null : ctx_r1.vente.montantTotal) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0) - ctx_r1.tempPaymentAmount, "CFA ", "symbol", "1.0-0"), "");
  }
}
function PosPaiementComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Modifier le re\u00E7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 47)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 47)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Montant pay\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function PosPaiementComponent_div_62_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.tempPaymentAmount, $event) || (ctx_r1.tempPaymentAmount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function PosPaiementComponent_div_62_Template_input_input_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.calculateChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 47)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Mode de paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function PosPaiementComponent_div_62_Template_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.tempPaymentMethod, $event) || (ctx_r1.tempPaymentMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Esp\u00E8ces");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Virement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Mobile Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PosPaiementComponent_div_62_div_24_Template, 4, 6, "div", 54)(25, PosPaiementComponent_div_62_div_25_Template, 4, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 55)(27, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PosPaiementComponent_div_62_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PosPaiementComponent_div_62_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.updatePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Valider et Imprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Montant total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](7, 5, ctx_r1.vente == null ? null : ctx_r1.vente.montantTotal, "CFA ", "symbol", "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tempPaymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tempPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.tempPaymentAmount >= ((tmp_6_0 = ctx_r1.vente == null ? null : ctx_r1.vente.montantTotal) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.tempPaymentAmount < ((tmp_7_0 = ctx_r1.vente == null ? null : ctx_r1.vente.montantTotal) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0));
  }
}
class PosPaiementComponent {
  constructor(router, venteService, entrepriseService) {
    this.router = router;
    this.venteService = venteService;
    this.entrepriseService = entrepriseService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.logo = null;
    this.fallbackLogo = 'assets/img/TCHAKEDA.png';
    this.vente = null;
    this.paymentAmount = 0;
    this.changeDue = 0;
    this.paymentMethod = 'Espèces';
    this.loading = false;
    this.errorMessage = null;
    this.showModifyModal = false;
    this.tempPaymentAmount = 0;
    this.tempPaymentMethod = 'Espèces';
  }
  ngOnInit() {
    // 1) Lecture rapide depuis localStorage si tu as déjà stocké l'entreprise
    const stored = localStorage.getItem('entreprise');
    if (stored) {
      try {
        const ent = JSON.parse(stored);
        // si ent.logo contient le path relatif côté backend, on le préfixe par imgUrl
        this.logo = ent.logo ? this.ensureAbsoluteLogoUrl(ent.logo) : null;
      } catch (e) {
        this.logo = null;
      }
    }
    // 2) Option robuste : demander l'info à l'API si non trouvée localement
    if (!this.logo) {
      this.entrepriseService.getEntrepriseInfo().subscribe({
        next: ent => {
          this.logo = ent.logo ? this.ensureAbsoluteLogoUrl(ent.logo) : null;
          // optional: sauvegarder pour réutiliser plus tard
          try {
            localStorage.setItem('entreprise', JSON.stringify(ent));
          } catch {}
        },
        error: err => {
          console.warn('Impossible de charger info entreprise pour logo', err);
          this.logo = null;
        }
      });
    }
    // ton code existant: récupérer state vente, etc.
    const state = history && history.state ? history.state : {};
    if (state && state.vente) {
      this.vente = state.vente;
      this.paymentAmount = state.paymentAmount ?? this.vente?.montantPaye ?? 0;
      this.changeDue = state.changeDue ?? this.paymentAmount - (this.vente?.montantTotal ?? 0);
      this.paymentMethod = state.paymentMethod ?? this.vente?.modePaiement ?? this.paymentMethod;
      return;
    }
    if (state && state.venteId) {
      this.loadVenteById(state.venteId);
      return;
    }
  }
  // transforme un path relatif en url absolue si nécessaire
  ensureAbsoluteLogoUrl(path) {
    if (!path) return this.fallbackLogo;
    if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) {
      return path;
    }
    // si path contient déjà la base, évite la double concaténation
    if (this.imgUrl && path.startsWith(this.imgUrl)) return path;
    // s'assurer qu'il y a bien un slash
    const prefix = this.imgUrl.endsWith('/') ? this.imgUrl.slice(0, -1) : this.imgUrl;
    const suffix = path.startsWith('/') ? path : `/${path}`;
    return prefix + suffix;
  }
  // handler pour fallback si image ne se charge pas
  onLogoError() {
    this.logo = this.fallbackLogo;
  }
  loadVenteById(id) {
    this.loading = true;
    this.venteService.getVenteById(id).subscribe({
      //console log des info dune vente
      next: res => {
        console.log('Réponse API:', res);
        this.vente = res;
        this.paymentAmount = res.montantPaye ?? res.montantTotal ?? 0;
        this.changeDue = this.paymentAmount - (res.montantTotal ?? 0);
        this.paymentMethod = res.modePaiement ?? this.paymentMethod;
        this.loading = false;
        console.log('Vente chargée:', res);
      },
      error: err => {
        console.error('Erreur chargement vente', err);
        this.errorMessage = err?.error?.message || err?.message || 'Erreur chargement vente';
        this.loading = false;
      }
    });
  }
  // Impression : cloner le contenu et ouvrir une nouvelle fenêtre propre
  impressionReceipt() {
    if (!this.receiptEl) return;
    // Récupérer la base URL pour les chemins absolus
    const baseUrl = window.location.origin;
    let printContent = this.receiptEl.nativeElement.innerHTML;
    // Corriger les chemins relatifs des assets
    printContent = printContent.replace(/src="assets\//g, `src="${baseUrl}/assets/`);
    const printWindow = window.open('', '_blank', 'left=0,top=0,width=380,height=500,toolbar=0,scrollbars=0,status=0');
    printWindow?.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Reçu de paiement</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body { 
            padding: 10px; 
            background: white;
          }
          .paiement_right {
            width: 100%
            display: flex !important;
            align-items: center !important;
            justify-content: center;
          }
          .receipt {
            width: 100% !important;
            min-width: 350px !important; /* Largeur augmentée */
            min-height: 0 !important;
            margin: 0 auto;
            padding: 15px !important;
            box-shadow: none !important;
          }
          .no-print { display: none !important; }
          .paleft { padding-left: 5px !important; }
          /* Centrage du header */
          .receipt-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 15px !important;
          }
          .receipt-header .logo {
            max-width: 100px !important; /* Taille originale */
            margin-bottom: 10px !important;
          }
          .ticket-info div {
            font-size: 10px !important;
            line-height: 1.4 !important; 
            margin-top: 4px !important; /* Espacement réduit */
          }
          
          .items-list { 
            margin-bottom: 10px !important; 
            width: 100%;
          }
          .item .qty {
              width: 8px !important;
            }
          .item {
            display: flex !important;
            align-items: flex-start !important;
            margin-bottom: 8px !important;
          }
          .divider {
            border-top: 1px dotted #000 !important;
            margin: 8px 0 !important;
          }
          .line span {
            font-size: 11px !important; /* Taille de police augmentée */
          }
          
          /* Centrage du footer */
          .receipt-footer { 
            position: relative !important; 
            bottom: 0 !important;
            margin-top: 20px !important;
            font-size: 10px !important;
            text-align: center !important;
            width: 100%;
          }
          
          .qty, .name, .total {
            font-size: 10px !important; /* Taille de police augmentée */
          }
          .unit-price {
            font-size: 10px !important; /* Taille de police augmentée */
          }
          
          @page { 
            size: auto; 
            margin: 0; 
          }
          @media print {
            body { padding: 0 !important; }
          }
        </style>
      </head>
      <body>
        ${printContent}
        <div class="no-print" style="text-align:center;margin-top:20px;">
          <button onclick="window.print()" style="padding:8px 16px;background:#1976D2;color:white;border:none;border-radius:4px;cursor:pointer;">
            Imprimer
          </button>
          <button onclick="window.close()" style="padding:8px 16px;margin-left:10px;background:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;">
            Fermer
          </button>
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() {
              window.close();
            }, 1000);
          };
        </script>
      </body>
      </html>
    `);
    printWindow?.document.close();
  }
  // Retourner à l'accueil POS / nouvelle commande
  newOrder() {
    // Navigate back to the POS page (ajuste la route si nécessaire)
    this.router.navigate(['/pos-accueil']);
  }
  // Utility pour afficher une ligne produit (sécurité si vente undefined)
  getLignes() {
    return this.vente?.lignes ?? [];
  }
  modifyPaymentRecu() {
    this.tempPaymentAmount = this.paymentAmount;
    this.tempPaymentMethod = this.paymentMethod;
    this.showModifyModal = true;
  }
  updatePayment() {
    this.paymentAmount = this.tempPaymentAmount;
    this.paymentMethod = this.tempPaymentMethod;
    // Calculer le changement ou le reste à payer
    const total = this.vente?.montantTotal ?? 0;
    this.changeDue = this.paymentAmount - total;
    //numeroFacture
    this.showModifyModal = false;
    // Réimprimer automatiquement
    setTimeout(() => {
      this.impressionReceipt();
    }, 100);
  }
  cancelModify() {
    this.showModifyModal = false;
  }
  calculateChange() {
    // Cette méthode est appelée automatiquement lors de la saisie
    const total = this.vente?.montantTotal ?? 0;
    this.changeDue = this.tempPaymentAmount - total;
  }
  static {
    this.ɵfac = function PosPaiementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosPaiementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_1__.VenteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__.EntrepriseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PosPaiementComponent,
      selectors: [["app-pos-paiement"]],
      viewQuery: function PosPaiementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.receiptEl = _t.first);
        }
      },
      decls: 63,
      vars: 35,
      consts: [["receipt", ""], ["loadingTpl", ""], [1, "container_paiement"], [1, "content_paiement"], [1, "paiement_left"], [1, "content_paiement_left"], ["class", "card status-card", 4, "ngIf", "ngIfElse"], ["class", "card amount-card", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "email-send"], ["type", "email", "placeholder", "example@gmail.com"], [1, "btn-send"], [1, "ri-send-plane-fill"], [1, "btn", "btn-primary", "btn-new-order", 3, "click"], [1, "paiement_right"], [1, "receipt"], [1, "receipt-header"], ["alt", "Logo XpertPro", 1, "logo", 3, "error", "src"], [1, "ticket-info"], [1, "items-list"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "no-items", 4, "ngIf"], [1, "divider"], [1, "totals"], [1, "line"], [1, "paleft"], [1, "line", "total-line"], [1, "payments-breakdown"], ["class", "line", 4, "ngIf"], [1, "receipt-footer"], ["class", "modal-overlay", 4, "ngIf"], [1, "card", "status-card"], [1, "status-icon"], [1, "status-text"], [1, "card", "amount-card"], [1, "amount"], [1, "method"], [1, "item"], [1, "qty"], [1, "desc"], [1, "name"], [1, "unit-price"], [1, "total"], [1, "no-items"], [1, "loading"], [1, "modal-overlay"], [1, "modal-content"], [1, "form-group"], ["type", "number", "min", "0", "step", "100", 3, "ngModelChange", "input", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "Esp\u00E8ces"], ["value", "Carte"], ["value", "Virement"], ["value", "Mobile Money"], ["class", "form-group", 4, "ngIf"], [1, "modal-actions"]],
      template: function PosPaiementComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PosPaiementComponent_div_4_Template, 5, 0, "div", 6)(5, PosPaiementComponent_div_5_Template, 6, 7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PosPaiementComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.modifyPaymentRecu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Modifier le re\u00E7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PosPaiementComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.impressionReceipt());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Imprimer le re\u00E7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PosPaiementComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.newOrder());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Nouvelle commande");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "div", 15, 0)(19, "div", 16)(20, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function PosPaiementComponent_Template_img_error_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onLogoError());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18)(22, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PosPaiementComponent_li_32_Template, 12, 14, "li", 20)(33, PosPaiementComponent_li_33_Template, 2, 0, "li", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Sous-total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 26)(43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 27)(50, "div", 24)(51, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, PosPaiementComponent_div_56_Template, 6, 6, "div", 28)(57, PosPaiementComponent_div_57_Template, 6, 6, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " G\u00E9n\u00E9r\u00E9 par Tchakeda ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, PosPaiementComponent_ng_template_60_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, PosPaiementComponent_div_62_Template, 31, 10, "div", 30);
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_16_0;
          let tmp_17_0;
          const loadingTpl_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vente)("ngIfElse", loadingTpl_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vente);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.logo || "assets/logo/rec\u0327u.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ticket : ", (tmp_6_0 = ctx.vente == null ? null : ctx.vente.numeroFacture) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "\u2014", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 17, ctx.vente == null ? null : ctx.vente.dateVente, "dd/MM/yyyy HH:mm"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Servi par : ", (tmp_8_0 = ctx.vente == null ? null : ctx.vente.nomVendeur) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "\u2014", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Boutique : ", (tmp_9_0 = ctx.vente == null ? null : ctx.vente.nomBoutique) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "\u2014", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getLignes());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getLignes().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](41, 20, ctx.vente == null ? null : ctx.vente.montantTotal, "CFA ", "symbol", "1.0-0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](47, 25, ctx.vente == null ? null : ctx.vente.montantTotal, "CFA ", "symbol", "1.0-0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](55, 30, ctx.paymentAmount, "CFA ", "symbol", "1.0-0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.paymentAmount >= ((tmp_16_0 = ctx.vente == null ? null : ctx.vente.montantTotal) !== null && tmp_16_0 !== undefined ? tmp_16_0 : 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.paymentAmount < ((tmp_17_0 = ctx.vente == null ? null : ctx.vente.montantTotal) !== null && tmp_17_0 !== undefined ? tmp_17_0 : 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModifyModal);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
      styles: ["\n\n.container_paiement[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content_paiement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: 100vh;\n  background: #fff;\n}\n\n\n\n.paiement_left[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content_paiement_left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 15px;\n  width: 60%;\n  position: relative;\n  top: -10%;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #A5D6A7;\n  border-radius: 4px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.status-card[_ngcontent-%COMP%] {\n  background: #E8F5E9;\n  margin-bottom: 0;\n  padding: 30px 20px;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #4CAF50;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  font-size: 16px;\n}\n\n.status-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2E7D32;\n}\n\n.amount-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-bottom: 0;\n}\n\n.amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2E7D32;\n}\n\n.method[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2E7D32;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  color: #333;\n}\n\n.email-send[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n\n.email-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 12px;\n  font-size: 14px;\n}\n\n.email-send[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.btn-send[_ngcontent-%COMP%] {\n  background: #1976D2;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 0;\n  border: none;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  padding: 8px 22px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #1976D2;\n  color: #fff;\n}\n\n.btn-new-order[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n\n\n.paiement_right[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: #ECECEC;\n  overflow-y: auto;\n  margin-bottom: 8%;\n}\n\n.receipt[_ngcontent-%COMP%] {\n  max-width: 350px;\n  min-height: 80vh;\n  margin: 0 auto;\n  background: #fff;\n  padding: 24px 15px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n\n.receipt-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.receipt-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 130px;\n}\n\n.ticket-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n  line-height: 2px;\n  margin-top: 20px;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 16px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n\n.item[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  width: 14px;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.desc[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 12px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n}\n\n.unit-price[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #777;\n}\n\n.total[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 13px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px dotted #bbb;\n  margin: 12px 0;\n}\n\n.totals[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], \n.payments-breakdown[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 13px;\n}\n\n.total-line[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.receipt-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 8px;\n  color: #888;\n  text-align: center;\n  font-style: italic;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 400px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1wYWllbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUEsc0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBLGlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFFRSxnQkFBQTtBQUhGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BOztFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQVBGOztBQVVBO0VBQ0UsbUJBQUE7QUFQRjtBQVNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFZQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVRGIiwiZmlsZSI6InBvcy1wYWllbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBhaWVtZW50LmNvbXBvbmVudC5jc3MgKi9cbi5jb250YWluZXJfcGFpZW1lbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnRfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi8qID09PSBMZWZ0IHBhbmUgPT09ICovXG4ucGFpZW1lbnRfbGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuLy8gICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudF9wYWllbWVudF9sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0E1RDZBNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3RhdHVzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjRThGNUU5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG5cbi5zdGF0dXMtaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzJFN0QzMjtcbn1cblxuLmFtb3VudC1jYXJkIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYW1vdW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzJFN0QzMjtcbn1cblxuLm1ldGhvZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyRTdEMzI7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmVtYWlsLXNlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVtYWlsLXNlbmQgaW5wdXQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmVtYWlsLXNlbmQgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLXNlbmQge1xuICBiYWNrZ3JvdW5kOiAjMTk3NkQyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAyMnB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMTk3NkQyO1xuICBjb2xvcjogI2ZmZjtcbi8vICAgcGFkZGluZzogMTBweCAyNXB4O1xufVxuXG4uYnRuLW5ldy1vcmRlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi8qID09PSBSaWdodCBwYW5lIChyZWNlaXB0KSA9PT0gKi9cbi5wYWllbWVudF9yaWdodCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4ucmVjZWlwdCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlY2VpcHQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucmVjZWlwdC1oZWFkZXIgLmxvZ28ge1xuICAvLyBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGlja2V0LWluZm8gZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzU1NTtcbiAgbGluZS1oZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLml0ZW1zLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uaXRlbSAucXR5IHtcbiAgd2lkdGg6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kZXNjIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udW5pdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi50b3RhbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNiYmI7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG4udG90YWxzIC5saW5lLFxuLnBheW1lbnRzLWJyZWFrZG93biAubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50b3RhbC1saW5lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4ucmVjZWlwdC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cblxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgaW5wdXQsIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5tb2RhbC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vLyBAbWVkaWEgc2NyZWVuIHtcbi8vICAgLnBhaWVtZW50X3JpZ2h0IHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIH1cbiAgXG4vLyAgIC5yZWNlaXB0IHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICB9XG4gIFxuLy8gICAucmVjZWlwdDpob3ZlciB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4xKTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIC5wYWllbWVudF9yaWdodCB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIFxuLy8gICAucmVjZWlwdCB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbi8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBcbi8vICAgICAmOmhvdmVyIHtcbi8vICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4xKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnJlY2VpcHQtaGVhZGVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbi8vICAgLmxvZ28ge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4vLyAgIH1cbi8vIH1cblxuLy8gLnJlY2VpcHQtZm9vdGVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1wYWllbWVudC9wb3MtcGFpZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBLHNCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQURGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQSxpQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBRUUsZ0JBQUE7QUFIRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSwyQkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTs7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVBGOztBQVVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFQRjs7QUFVQTtFQUNFLG1CQUFBO0FBUEY7QUFTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFURjtBQUNBLHd4VEFBd3hUIiwic291cmNlc0NvbnRlbnQiOlsiLyogcGFpZW1lbnQuY29tcG9uZW50LmNzcyAqL1xuLmNvbnRhaW5lcl9wYWllbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudF9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLyogPT09IExlZnQgcGFuZSA9PT0gKi9cbi5wYWllbWVudF9sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4vLyAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50X3BhaWVtZW50X2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZ2FwOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwJTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQTVENkE3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zdGF0dXMtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNFOEY1RTk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cblxuLnN0YXR1cy1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RhdHVzLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMkU3RDMyO1xufVxuXG4uYW1vdW50LWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hbW91bnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMkU3RDMyO1xufVxuXG4ubWV0aG9kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzJFN0QzMjtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZW1haWwtc2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZW1haWwtc2VuZCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW1haWwtc2VuZCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tc2VuZCB7XG4gIGJhY2tncm91bmQ6ICMxOTc2RDI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4IDIycHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMxOTc2RDI7XG4gIGNvbG9yOiAjZmZmO1xuLy8gICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59XG5cbi5idG4tbmV3LW9yZGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLyogPT09IFJpZ2h0IHBhbmUgKHJlY2VpcHQpID09PSAqL1xuLnBhaWVtZW50X3JpZ2h0IHtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZDogI0VDRUNFQztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG5cbi5yZWNlaXB0IHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI0cHggMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVjZWlwdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yZWNlaXB0LWhlYWRlciAubG9nbyB7XG4gIC8vIG1heC13aWR0aDogMTYwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi50aWNrZXQtaW5mbyBkaXYge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTU1O1xuICBsaW5lLWhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaXRlbXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5pdGVtIC5xdHkge1xuICB3aWR0aDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRlc2Mge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTJweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi51bml0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLnRvdGFsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2JiYjtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi50b3RhbHMgLmxpbmUsXG4ucGF5bWVudHMtYnJlYWtkb3duIC5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRvdGFsLWxpbmUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5yZWNlaXB0LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuXG5cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBpbnB1dCwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLm1vZGFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vIEBtZWRpYSBzY3JlZW4ge1xuLy8gICAucGFpZW1lbnRfcmlnaHQge1xuLy8gICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgfVxuICBcbi8vICAgLnJlY2VpcHQge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4vLyAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgIH1cbiAgXG4vLyAgIC5yZWNlaXB0OmhvdmVyIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuLy8gICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjEpO1xuLy8gICB9XG4vLyB9XG5cblxuLy8gLnBhaWVtZW50X3JpZ2h0IHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuLy8gICBwYWRkaW5nLXRvcDogNDBweDtcbiAgXG4vLyAgIC5yZWNlaXB0IHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIFxuLy8gICAgICY6aG92ZXIge1xuLy8gICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjEpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAucmVjZWlwdC1oZWFkZXIge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuLy8gICAubG9nbyB7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbi8vICAgfVxuLy8gfVxuXG4vLyAucmVjZWlwdC1mb290ZXIge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 92120:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/entreprise-service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntrepriseService: () => (/* binding */ EntrepriseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class EntrepriseService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.entrepriseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.entreprise$ = this.entrepriseSubject.asObservable();
  }
  // Dans client.service.ts
  // Dans entreprise.service.ts
  getListEntreprises() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/entreprises`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Aucune entreprise trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // Ajouter une entreprise
  addEntreprise(entreprise) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/entreprise-clients`, entreprise, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(newEntreprise => {
      const currentEntreprise = this.entrepriseSubject.value;
      this.entrepriseSubject.next([...currentEntreprise, newEntreprise]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // List de tout les entreprises
  getListEntreprise() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("En-têtes envoyés : ", headers);
      return this.http.get(`${this.apiUrl}/entreprises`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(data => {
      this.entrepriseSubject.next(data);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // Recuperer information d'une entreprise de la user connecter
  getEntrepriseById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('Token manquant');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/entreprises/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  updateEntreprise(id, formData) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, {
        headers,
        responseType: 'text' // réponse en texte brut
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // updateEntreprise(id: number, formData: FormData): Observable<any> {
  //   const token = localStorage.getItem('accessToken') || '';
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, { headers }).pipe(
  //     catchError(error => {
  //       let errorMsg = 'Erreur inconnue';
  //       if (error.error instanceof ErrorEvent) {
  //         errorMsg = `Erreur: ${error.error.message}`;
  //       } else if (error.status === 400) {
  //         errorMsg = error.error || 'Données invalides';
  //       }
  //       return throwError(() => new Error(errorMsg));
  //     })
  //   );
  // }
  // Get entreprise d'un user
  getEntrepriseInfo() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/myEntreprise`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(entreprise => {
        localStorage.setItem('entreprise', JSON.stringify(entreprise));
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur récupération info entreprise:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // Simpl dcodage JWT pour vérifier si le token est expiré
  decodeJwt(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  // Vérifier si le token est expiré
  isTokenExpired(decodedToken) {
    const expirationDate = new Date(decodedToken.exp * 1000);
    return expirationDate < new Date();
  }
  // Rafraîchir le token avec un refresh token (si applicable)
  getNewTokenFromApi() {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/refresh-token`, {
      refreshToken
    });
  }
  static {
    this.ɵfac = function EntrepriseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntrepriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EntrepriseService,
      factory: EntrepriseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-paiement_pos-paiement_component_ts.js.map