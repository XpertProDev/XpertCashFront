"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-caisse-header_pos-caisse-header_component_ts"],{

/***/ 43121:
/*!**********************************************************************!*\
  !*** ./src/app/POS/pos-caisse-header/pos-caisse-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCaisseHeaderComponent: () => (/* binding */ PosCaisseHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_admin_page_MODELS_CaisseModel_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/MODELS/CaisseModel/safe-html.pipe */ 37726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/boutique-service */ 52719);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_caisse_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/caisse-state.service */ 12334);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pos-caisse-service */ 74864);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/boutique-state.service */ 37788);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pagination.service */ 35322);















const _c0 = a0 => ({
  "color": a0
});
function PosCaisseHeaderComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", boutique_r1.id)("disabled", !boutique_r1.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", boutique_r1.nomBoutique, " ");
  }
}
function PosCaisseHeaderComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_div_39_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onVoirToutesLesCaisses($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, ctx_r2.showAllCaissesSection ? "red" : "inherit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.showAllCaissesSection ? "Cacher toutes les caisses" : "Voir toutes les caisses", " ");
  }
}
function PosCaisseHeaderComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PosCaisseHeaderComponent_div_39_div_1_Template, 3, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Autres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isAllowedToViewAllCaisses);
  }
}
function PosCaisseHeaderComponent_div_41_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", boutique_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", boutique_r5.nomBoutique, " ");
  }
}
function PosCaisseHeaderComponent_div_41_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 55)(2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r2.errorMessage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function PosCaisseHeaderComponent_div_41_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ouvrir la caisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PosCaisseHeaderComponent_div_41_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 57);
  }
}
function PosCaisseHeaderComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Ouvrir une nouvelle caisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_div_41_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 41)(8, "form", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function PosCaisseHeaderComponent_div_41_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 43)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Boutique assign\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function PosCaisseHeaderComponent_div_41_Template_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.selectedBoutiqueId, $event) || (ctx_r2.selectedBoutiqueId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "S\u00E9lectionnez une boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, PosCaisseHeaderComponent_div_41_option_15_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 43)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Esp\u00E8ces \u00E0 l'ouverture");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function PosCaisseHeaderComponent_div_41_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r2.montantOuverture, $event) || (ctx_r2.montantOuverture = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PosCaisseHeaderComponent_div_41_div_20_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 49)(22, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_div_41_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_div_41_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, PosCaisseHeaderComponent_div_41_span_25_Template, 2, 0, "span", 52)(26, PosCaisseHeaderComponent_div_41_span_26_Template, 1, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedBoutiqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.boutiques);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.montantOuverture);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
  }
}
class PosCaisseHeaderComponent {
  constructor(boutiqueService, caisseState, posCaisseService, boutiqueState, router, usersService, paginationService) {
    this.boutiqueService = boutiqueService;
    this.caisseState = caisseState;
    this.posCaisseService = posCaisseService;
    this.boutiqueState = boutiqueState;
    this.router = router;
    this.usersService = usersService;
    this.paginationService = paginationService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.showMenuDropdown = false;
    this.showAllCaissesSection = true;
    this.isAllowedToViewAllCaisses = false;
    this.showModal = false;
    this.boutiques = [];
    this.montantOuverture = 0;
    this.isLoading = false;
    this.errorMessage = null;
    this.caisses = [];
    this.selectedBoutiqueIdForList = null;
    this.selectedBoutiqueId = null;
    // selectedBoutiqueIdForList: number = 0; 
    this.isLoadingCaisses = false;
    this.openMenuId = null;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = 0;
    this.displayStart = 0;
    this.displayEnd = 0;
    this.pageCount = 0;
    this.isFirstPage = true;
    this.isLastPage = true;
  }
  ngOnInit() {
    this.loadBoutiques();
    this.initBoutique();
    this.initStateCaisse();
    this.initPaginationService();
  }
  initBoutique() {
    // Initialiser avec la boutique sauvegardée
    const savedBoutiqueId = this.boutiqueState.getCurrentValue();
    if (savedBoutiqueId) {
      this.selectedBoutiqueIdForList = savedBoutiqueId;
    }
  }
  initStateCaisse() {
    this.caisseState.showAllCaisses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(val => {
      this.showAllCaissesSection = !!val;
      console.log('[Header] showAllCaisses$ ->', val);
    });
    // Ajouter cette ligne pour synchroniser avec l'état initial du service
    this.caisseState.showAllCaisses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(val => {
      this.showAllCaissesSection = !!val;
    });
  }
  initPaginationService() {
    // Subscribe to pagination changes
    this.paginationService.state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(state => {
      this.currentPage = state.currentPage;
      this.itemsPerPage = state.itemsPerPage;
      this.totalItems = state.totalItems;
      this.recomputeDisplay();
    });
  }
  // helper pour recalculer l'affichage
  recomputeDisplay() {
    this.pageCount = Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage || 1));
    this.displayStart = this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.itemsPerPage + 1;
    this.displayEnd = Math.min(this.totalItems, this.currentPage * this.itemsPerPage);
    this.isFirstPage = this.currentPage <= 1;
    this.isLastPage = this.currentPage >= this.pageCount;
  }
  // handlers appelés par le template
  prevPage() {
    if (this.isFirstPage) return;
    this.paginationService.setPage(this.currentPage - 1);
  }
  nextPage() {
    if (this.isLastPage) return;
    this.paginationService.setPage(this.currentPage + 1);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleMenuDropdown() {
    this.showMenuDropdown = !this.showMenuDropdown;
  }
  loadBoutiques() {
    this.isLoading = true;
    this.boutiques = [];
    this.errorMessage = null;
    // Essayer d'obtenir l'utilisateur depuis l'API
    this.usersService.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: user => {
        // Définit si l'utilisateur peut voir "Toutes les caisses"
        this.isAllowedToViewAllCaisses = !!(user && ['ADMIN', 'MANAGER'].includes(user.roleType));
        console.log('[loadBoutiques] user from API ->', user?.roleType);
        if (user && user.roleType === 'VENDEUR') {
          // Vendeur : utiliser uniquement ses boutiques
          this.boutiques = user.boutiques || [];
          this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
          this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
          // Charger la dernière caisse si on a une boutique sélectionnée
          if (this.selectedBoutiqueIdForList) {
            this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
          } else {
            // Pas de boutique disponible pour ce vendeur
            this.caisses = [];
          }
          this.isLoading = false;
        } else {
          // Admin/Manager (ou user non-vendeur) : récupérer toutes les boutiques de l'entreprise
          this.boutiqueService.getBoutiquesByEntreprise().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
            next: boutiques => {
              this.boutiques = boutiques || [];
              this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
              this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
              if (this.selectedBoutiqueIdForList) {
                this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
              } else {
                this.caisses = [];
              }
              this.isLoading = false;
            },
            error: err => {
              console.error('[loadBoutiques] erreur getBoutiquesByEntreprise', err);
              this.errorMessage = 'Erreur lors du chargement des boutiques';
              this.isLoading = false;
            }
          });
        }
      },
      error: err => {
        console.error('[loadBoutiques] getUserInfo() failed', err);
        // Fallback : essayer de récupérer l'utilisateur depuis le localStorage
        const localUser = this.usersService.getCurrentUser();
        if (localUser) {
          console.log('[loadBoutiques] using local user fallback ->', localUser?.roleType);
          this.isAllowedToViewAllCaisses = !!['ADMIN', 'MANAGER'].includes(localUser.roleType);
          if (localUser.roleType === 'VENDEUR') {
            this.boutiques = localUser.boutiques || [];
            this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
            this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
            if (this.selectedBoutiqueIdForList) {
              this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
            }
            this.isLoading = false;
            return;
          }
        }
        // Si pas de user local, retenter de charger toutes les boutiques (dégradation)
        this.boutiqueService.getBoutiquesByEntreprise().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
          next: boutiques => {
            this.boutiques = boutiques || [];
            this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
            this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
            if (this.selectedBoutiqueIdForList) {
              this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
            }
            this.isLoading = false;
          },
          error: err2 => {
            console.error('[loadBoutiques] fallback getBoutiquesByEntreprise failed', err2);
            this.errorMessage = 'Impossible de charger les boutiques';
            this.boutiques = [];
            this.isLoading = false;
          }
        });
      }
    });
  }
  getValidBoutiqueId() {
    return this.boutiqueState.getCurrentValue() || (this.boutiques.length > 0 ? this.boutiques[0].id : 0);
  }
  // Nouvelle méthode pour charger les caisses
  loadCaisses(boutiqueId) {
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
      next: caisses => {
        this.caisses = caisses;
        this.isLoadingCaisses = false;
      },
      error: error => {
        console.error('Erreur lors du chargement des caisses', error);
        this.isLoadingCaisses = false;
        this.errorMessage = 'Erreur lors du chargement des caisses';
      }
    });
  }
  // Ajouter cette nouvelle méthode dans PosCaisseComponent
  loadDerniereCaisseVendeur(boutiqueId) {
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.errorMessage = null;
    const currentBoutiqueId = boutiqueId; // Sauvegarder l'ID actuel
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: response => {
        // Vérifier si la sélection n'a pas changé pendant la requête
        if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
          this.isLoadingCaisses = false;
          return;
        }
        if (typeof response === 'string') {
          this.errorMessage = response;
        } else if (response && response.boutiqueId === boutiqueId) {
          // Filtrer par boutique
          this.caisses = [response];
        } else {
          this.errorMessage = 'Aucune caisse disponible pour cette boutique';
        }
        this.isLoadingCaisses = false;
      },
      error: error => {
        // Vérifier si la sélection n'a pas changé pendant la requête
        if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
          this.isLoadingCaisses = false;
          return;
        }
        console.error('Erreur lors du chargement de la dernière caisse', error);
        this.isLoadingCaisses = false;
        this.errorMessage = error.message || 'Erreur lors du chargement de la dernière caisse';
      }
    });
  }
  // Modifier onBoutiqueChange
  onBoutiqueChange() {
    if (this.selectedBoutiqueIdForList === null) return;
    this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
    this.caisses = [];
    this.errorMessage = null;
    this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
  }
  /**
   * Ouvre le modal et initialise `selectedBoutiqueId`.
   * @param preferDifferent si true -> sélectionne la première boutique différente de la sélection d'en-tête (comportement "autre boutique")
   *                         si false (par défaut) -> sélectionne la même boutique que l'en-tête si disponible, sinon la première disponible.
   */
  openModal(preferDifferent = false) {
    console.log('openModal() called. headerSelected=', this.selectedBoutiqueIdForList, 'boutiques length=', this.boutiques?.length);
    // Forcer le type number si la valeur vient en string
    if (this.selectedBoutiqueIdForList != null) {
      this.selectedBoutiqueIdForList = Number(this.selectedBoutiqueIdForList);
    }
    // Si les boutiques ne sont pas encore chargées, ouvrir modal sans sélection
    if (!this.boutiques || this.boutiques.length === 0) {
      console.warn('Boutiques non chargées au moment de openModal(). Ouvrir modal sans sélection.');
      this.selectedBoutiqueId = null;
      this.errorMessage = null;
      this.showModal = true;
      return;
    }
    // Filtrer boutiques actives (adapter si tu veux inclure les inactives)
    const available = (this.boutiques || []).filter(b => b && b.actif !== false).map(b => ({
      ...b,
      id: Number(b.id)
    })); // forcer id en number
    // Trier pour comportement déterministe (optionnel)
    available.sort((a, b) => a.id - b.id);
    if (available.length === 0) {
      // Aucune boutique disponible après filtre
      this.selectedBoutiqueId = null;
    } else if (preferDifferent) {
      // Option : sélectionner la première boutique différente de l'en-tête
      const firstDifferent = available.find(b => b.id !== this.selectedBoutiqueIdForList);
      this.selectedBoutiqueId = firstDifferent ? firstDifferent.id : available[0].id;
    } else {
      // Option par défaut : sélectionner la même boutique que l'en-tête si possible, sinon la première disponible
      this.selectedBoutiqueId = this.selectedBoutiqueIdForList != null && available.some(b => b.id === this.selectedBoutiqueIdForList) ? this.selectedBoutiqueIdForList : available[0].id;
    }
    console.log('Modal selection computed -> header:', this.selectedBoutiqueIdForList, 'modal:', this.selectedBoutiqueId, 'available:', available.map(x => ({
      id: x.id,
      nom: x.nomBoutique
    })));
    this.errorMessage = null;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }
  goToPosJournalCaisse() {
    this.router.navigate(['/pos-caisse/pos-journal-caisse']);
  }
  submitForm() {
    if (!this.selectedBoutiqueId) {
      this.errorMessage = 'Veuillez sélectionner une boutique';
      return;
    }
    if (this.montantOuverture < 0) {
      this.errorMessage = 'Le montant ne peut pas être négatif';
      return;
    }
    this.isLoading = true;
    this.errorMessage = null;
    const request = {
      boutiqueId: this.selectedBoutiqueId,
      montantInitial: this.montantOuverture
    };
    this.posCaisseService.ouvrirCaisse(request).subscribe({
      next: response => {
        console.log('Caisse ouverte avec succès', response);
        this.isLoading = false;
        this.closeModal();
        // CORRECTION : Utiliser triggerRefresh() au lieu de notifyCaissesUpdated()
        this.caisseState.notifyCaisseCreated(response);
        this.caisseState.triggerRefresh();
        // Rediriger vers l'interface de vente
        // this.router.navigate(['/pos/vente'], {
        //   state: { caisse: response }
        // });
        // Recharger les caisses pour la boutique actuellement sélectionnée
        if (this.selectedBoutiqueIdForList !== null) {
          this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
        }
      },
      error: error => {
        console.error('Erreur lors de l\'ouverture de la caisse', error);
        this.isLoading = false;
        let rawError = '';
        if (error.error?.error) rawError = error.error.error;else if (error.error?.message) rawError = error.error.message;else if (error.message) rawError = error.message;else rawError = 'Erreur inconnue lors de l\'ouverture de la caisse';
        // Supprime le préfixe avant " : "
        const prefixIndex = rawError.indexOf(': ');
        this.errorMessage = prefixIndex > 0 ? rawError.substring(prefixIndex + 2) : rawError;
      }
    });
  }
  goToDashboard() {
    this.router.navigate(['/analytics']);
  }
  onVoirToutesLesCaisses(event) {
    event.stopPropagation(); // empêche toggle parent
    this.showMenuDropdown = false; // ferme le menu
    // Si actuellement visible -> forcer fermeture, sinon ouvrir
    if (this.showAllCaissesSection) {
      // force close (assure la disparition du *ngIf)
      this.caisseState.showAllCaisses(false);
      console.log('[Header] clicked -> fermer toutes les caisses');
    } else {
      this.caisseState.showAllCaisses(true);
      console.log('[Header] clicked -> voir toutes les caisses');
    }
  }
  static {
    this.ɵfac = function PosCaisseHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCaisseHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_1__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_caisse_state_service__WEBPACK_IMPORTED_MODULE_2__.CaisseStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_3__.PosCaisseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_4__.BoutiqueStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pagination_service__WEBPACK_IMPORTED_MODULE_6__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: PosCaisseHeaderComponent,
      selectors: [["app-pos-caisse-header"]],
      decls: 42,
      vars: 9,
      consts: [[1, "container_pos_caisse"], [1, "content_pos_caisse"], [1, "header_pos_caisse"], [1, "content_header_pos_caisse_left"], [1, "double"], [1, "icon_retour", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "name_pos"], [2, "font-size", "16px"], ["name", "boutique", 1, "content_select", 3, "ngModelChange", "ngModel"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [1, "content_header_pos_caisse_right"], [1, "add-task", 3, "click"], [1, "barre"], ["aria-label", "Pagination", 1, "pager"], ["aria-live", "polite", 1, "pager-info"], [1, "o_pager_counter"], [1, "o_pager_limit"], ["aria-atomic", "true", "role", "group", "aria-label", "Navigation pages", 1, "btn-group", "d-print-none"], ["type", "button", "aria-label", "Pr\u00E9c\u00E9dent", "title", "Page pr\u00E9c\u00E9dente", 1, "o_pager_previous", 3, "click", "disabled"], ["type", "button", "aria-label", "Suivant", "title", "Page suivante", 1, "o_pager_next", 3, "click", "disabled"], [1, "ri-arrow-right-s-line"], [1, "inputSearch"], [1, "ri-search-2-line"], ["type", "text", "placeholder", "Recherche...."], ["clickOutside", "", 1, "menu", 3, "click", "clickOutside"], [1, "ri-menu-line"], ["class", "menu-dropdown", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [3, "ngValue", "disabled"], [1, "menu-dropdown"], ["class", "dropdown-item", 3, "ngStyle", "click", 4, "ngIf"], [1, "dropdown-item"], [1, "ri-restart-line"], [1, "dropdown-item", 3, "click", "ngStyle"], [1, "ri-eye-2-line"], [1, "modal-backdrop"], [1, "modal-container"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "ri-close-line"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-group"], ["name", "boutique", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "montant", "placeholder", "Entrez le montant", "required", "", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "disabled"], ["class", "error-message", 4, "ngIf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-submit", 3, "click", "disabled"], [4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "error-message"], [1, "ri-error-warning-line"], [3, "innerHTML"], [1, "loading-spinner"]],
      template: function PosCaisseHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ul")(5, "li")(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_Template_div_click_7_listener() {
            return ctx.goToDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Point de vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function PosCaisseHeaderComponent_Template_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.selectedBoutiqueIdForList, $event) || (ctx.selectedBoutiqueIdForList = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PosCaisseHeaderComponent_Template_select_ngModelChange_12_listener() {
            return ctx.onBoutiqueChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, PosCaisseHeaderComponent_option_13_Template, 2, 3, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_Template_button_click_15_listener() {
            return ctx.openModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Nouveau caisse");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "span", 16)(21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " / ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 18)(28, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_Template_button_click_28_listener() {
            return ctx.prevPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_Template_button_click_30_listener() {
            return ctx.nextPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 23)(35, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PosCaisseHeaderComponent_Template_div_click_37_listener() {
            return ctx.toggleMenuDropdown();
          })("clickOutside", function PosCaisseHeaderComponent_Template_div_clickOutside_37_listener() {
            return ctx.showMenuDropdown = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, PosCaisseHeaderComponent_div_39_Template, 5, 1, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, PosCaisseHeaderComponent_div_41_Template, 27, 11, "div", 28);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedBoutiqueIdForList);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.boutiques);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.displayStart, " - ", ctx.displayEnd, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.totalItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isFirstPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLastPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showMenuDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, src_app_admin_page_MODELS_CaisseModel_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
      styles: ["@charset \"UTF-8\";\n.content_pos_caisse[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header_pos_caisse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  height: 60px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  padding: 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.content_header_pos_caisse_right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.icon_retour[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n  border: 1px solid #000;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-task[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n.caisse-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 5px 20px 20px;\n}\n\n.all-caisse-container-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 20px 20px;\n}\n\n.caisse-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 4px;\n  min-height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.caisse-nom[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #1a1a1a;\n}\n\n.caisse-btn[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 6px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  align-self: flex-start;\n  transition: background-color 0.2s ease;\n}\n\n.caisse-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n.profil[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  padding: 0px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.profil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n}\n\n.icon_more[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: none;\n  position: absolute;\n  top: -11px;\n  right: -12px;\n}\n\n.icon_more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.caisse-card[_ngcontent-%COMP%]:hover   .icon_more[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.titre_all_caisse[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 500px;\n  max-width: 90%;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalAppear 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalAppear {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #333;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  transition: color 0.2s;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #555;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #eee;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  color: #444;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #eaeaea;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #b71c1c;\n  padding: 12px;\n  border-radius: 4px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 1s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.o_pager_previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.o_pager_next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_previous[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: none;\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_next[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.content_select[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px 30px 6px 7px;\n  background: #efefef;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  cursor: pointer;\n}\n\n\n\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  color: #64748b;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-caisses[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  border: 1px dashed #ddd;\n  border-radius: 8px;\n  color: #888;\n}\n.no-caisses[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.caisse-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.caisse-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 8px;\n  border-radius: 4px;\n  display: inline-block;\n  width: fit-content;\n}\n.caisse-status.open[_ngcontent-%COMP%] {\n  background-color: #e3f2ed;\n  color: #0a8150;\n}\n.caisse-status.closed[_ngcontent-%COMP%] {\n  background-color: #fbebec;\n  color: #de3618;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.icon_more[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.icon_more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  min-width: 120px;\n  margin-top: 6px;\n  padding: 0;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px 12px;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 12px;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.icon_more[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  \n\n  color: red;\n}\n\n.caisse-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.caisse-status.open[_ngcontent-%COMP%] {\n  background-color: #e3fcef;\n  color: #0e9f6e;\n}\n\n.caisse-status.closed[_ngcontent-%COMP%] {\n  background-color: #fde8e8;\n  color: #c81e1e;\n}\n\n.caisse-btn.disabled[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n\n.selected-boutique[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f0f4f8;\n  border-radius: 4px;\n  border: 1px solid #d1d5db;\n  font-weight: 500;\n  color: #1e293b;\n}\n\n.caisse-container-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n.caisse-btn[disabled][_ngcontent-%COMP%], \n.caisse-btn.disabled-like[_ngcontent-%COMP%] {\n  cursor: not-allowed; \n\n  opacity: 0.6; \n\n  pointer-events: none; \n\n}\n\n.menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  min-width: 200px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 12px;\n  color: #333;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n\n\n\n.dropdown-item.hide-all[_ngcontent-%COMP%] {\n  color: #e53935; \n\n}\n\n\n\n.dropdown-item.hide-all[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n\n\n.dropdown-item.hide-all[_ngcontent-%COMP%]:hover {\n  color: #c62828;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1jYWlzc2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vcG9zLWNhaXNzZS9wb3MtY2Fpc3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUFzQixrQkFBQTtBREd0Qjs7QUNGQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0MsU0FBQTtFQUFXLFdBQUE7RUFBYSxZQUFBO0VBQWMsc0JBQUE7RUFBd0IsK0NBQUE7RUFBaUQsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixNQUFBO0VBQVEsWUFBQTtBRGlCblA7O0FDaEJBO0VBQWtDLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FEc0J0RTs7QUNyQkE7RUFBSyxnQkFBQTtFQUFrQixTQUFBO0VBQVcsVUFBQTtBRDJCbEM7O0FDMUJBO0VBQUksU0FBQTtBRDhCSjs7QUM3QkE7RUFBVSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtBRG1DOUM7O0FDbENBO0VBQWlCLGVBQUE7RUFBaUIsZUFBQTtBRHVDbEM7O0FDdENBO0VBQWUsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFlBQUE7RUFBYyxhQUFBO0VBQWUsbUJBQUE7QUQ4QzlFOztBQzdDQTtFQUFxQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLHNCQUFBO0FEcUR4Rjs7QUNwREE7RUFBaUIsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQW9CLGVBQUE7QUQyRG5FOztBQzFEQTtFQUFTLFlBQUE7RUFBYyxVQUFBO0VBQVksNkNBQUE7RUFBNkIsZ0JBQUE7QURpRWhFOztBQ2hFQTtFQUFZLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsWUFBQTtBRHdFL0Y7O0FDdkVBO0VBQWtCLHlCQUFBO0FEMkVsQjs7QUMxRUE7RUFBb0IsYUFBQTtFQUFlLHFDQUFBO0VBQXVDLFNBQUE7RUFBVyxz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Q0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFzZk47QUFwZk07RUFDRSxtQkFBQTtBQXNmUjtBQW5mTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBcWZSOztBQS9lQSw0REFBQTtBQUNBO0VBQ0UsY0FBQSxFQUFBLGdCQUFBO0FBa2ZGOztBQS9lQSxrREFBQTtBQUNBO0VBQ0UsY0FBQTtBQWtmRjs7QUEvZUEsaURBQUE7QUFDQTtFQUNFLGNBQUE7QUFrZkY7O0FBL2VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWtmRiIsImZpbGUiOiJwb3MtY2Fpc3NlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Bvcy1jYWlzc2UvcG9zLWNhaXNzZS5jb21wb25lbnQuc2Nzcyc7XG5cbi5tZW51IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIC5tZW51LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBjb3VsZXVyIHJvdWdlIHZpc2libGUsIGFjY2Vzc2libGUgZXQgbMOpZ8OocmVtZW50IHNhdHVyw6llICovXG4uZHJvcGRvd24taXRlbS5oaWRlLWFsbCB7XG4gIGNvbG9yOiAjZTUzOTM1OyAgICAvKiByb3VnZSBjaGF1ZCAqL1xufVxuXG4vKiBzJ2Fzc3VyZXIgcXVlIGwnaWPDtG5lIHByZW5uZSBhdXNzaSBsYSBjb3VsZXVyICovXG4uZHJvcGRvd24taXRlbS5oaWRlLWFsbCBpIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIChvcHRpb25uZWwpIHN0eWxlIGhvdmVyIHBvdXIgcmVzdGVyIGNvaMOpcmVudCAqL1xuLmRyb3Bkb3duLWl0ZW0uaGlkZS1hbGw6aG92ZXIge1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLnBhZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufSIsIi5jb250ZW50X3Bvc19jYWlzc2UgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5oZWFkZXJfcG9zX2NhaXNzZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDsgcGFkZGluZzogMCAxNXB4OyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDk5OTt9XG4uY29udGVudF9oZWFkZXJfcG9zX2NhaXNzZV9yaWdodCB7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHh9XG51bCB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9XG5wIHsgbWFyZ2luOiAwOyB9XG4uZG91YmxlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O31cbi5pY29uX3JldG91ciBpIHsgZm9udC1zaXplOiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmlucHV0U2VhcmNoIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMjUwcHg7IGhlaWdodDogNDBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4uaW5wdXRTZWFyY2ggaW5wdXQgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiAxcHggc29saWQgIzAwMDt9XG4uaW5wdXRTZWFyY2ggaSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDA7IG1hcmdpbi1yaWdodDogMTVweDsgZm9udC1zaXplOiAxN3B4O31cbi5iYXJyZSB7IGhlaWdodDogMjVweDsgd2lkdGg6IDFweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmOyBtYXJnaW46IDhweCAxMHB4O31cbi5hZGQtdGFzayB7IHBhZGRpbmc6IDEwcHggMzBweDsgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgY29sb3I6ICNmZmZmZmY7IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiBub25lO31cbi5hZGQtdGFzazpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzYgfVxuLmNhaXNzZS1jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDVweCAyMHB4IDIwcHg7fVxuLy8gLmFsbF9jYWlzc2VfY29udGFpbmVyIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgZ2FwOiAxNnB4OyBwYWRkaW5nOiAwIDIwcHggMjBweDt9XG4uYWxsLWNhaXNzZS1jb250YWluZXItYm90dG9tIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgZ2FwOiAxNnB4OyBwYWRkaW5nOiAwIDIwcHggMjBweDt9XG4uY2Fpc3NlLWNhcmQgeyBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IG1pbi1oZWlnaHQ6IDE1MHB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fVxuLmNhaXNzZS1ub20geyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogIzFhMWExYTt9XG4uY2Fpc3NlLWJ0biB7IGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiA2cHggOHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDUwMDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7fVxuLmNhaXNzZS1idG46aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2MWM2O31cbi5wcm9maWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxOyBwYWRkaW5nOiAwcHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLnByb2ZpbCBzcGFuIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzAwMDAwMDt9XG4uaWNvbl9tb3JlIHsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTExcHg7IHJpZ2h0OiAtMTJweDt9XG4uaWNvbl9tb3JlIGkgeyBmb250LXNpemU6IDE4cHg7IH1cbi5ibG9jayB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcG9zaXRpb246IHJlbGF0aXZlO31cbi5jYWlzc2UtY2FyZDpob3ZlciAuaWNvbl9tb3JlIHsgZGlzcGxheTogYmxvY2s7fVxuLnRpdHJlX2FsbF9jYWlzc2UgaDYgeyBmb250LXNpemU6IDE2cHg7IH1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBhbmltYXRpb246IG1vZGFsQXBwZWFyIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxBcHBlYXIge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG4gIH1cbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyNHB4O1xuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICAgIFxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBcbiAgLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAuYnRuLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICB9XG4gIH1cbiAgXG4gIC5idG4tc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2MWM2O1xuICAgIH1cbiAgfVxufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgZXJyZXVycyAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2I3MWMxYztcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4vKiBTcGlubmVyIGRlIGNoYXJnZW1lbnQgKi9cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogRMOpc2FjdGl2ZXIgbGVzIGJvdXRvbnMgcGVuZGFudCBsZSBjaGFyZ2VtZW50ICovXG5idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5vX3BhZ2VyX3ByZXZpb3VzIGksXG4ub19wYWdlcl9uZXh0IGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uZC1wcmludC1ub25lIGJ1dHRvbntcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9wcmV2aW91cyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uZC1wcmludC1ub25lIC5vX3BhZ2VyX25leHQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRlbnRfc2VsZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMzBweCA2cHggN3B4O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWpvdXRleiBkYW5zIHBvcy1jYWlzc2UuY29tcG9uZW50LnNjc3MgKi9cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBcbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5uby1jYWlzc2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzg4ODtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5jYWlzc2UtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYWlzc2Utc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBcbiAgJi5vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmVkO1xuICAgIGNvbG9yOiAjMGE4MTUwO1xuICB9XG4gIFxuICAmLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWJlYztcbiAgICBjb2xvcjogI2RlMzYxODtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uaWNvbl9tb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGkgeyBmb250LXNpemU6IDE4cHg7IH1cblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTsgICAgICAgLy8ganVzdGUgZW4gZGVzc291cyBkZSBs4oCZaWPDtG5lXG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICAvKiBPcHRpb25uZWwgOiBhcHBhcmVuY2UgYXUgc3Vydm9sLCBtYWlzIGxlICpuZ0lmIGfDqHJlIGzigJlhZmZpY2hhZ2UgKi9cbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5cbi5jYWlzc2Utc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYWlzc2Utc3RhdHVzLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2ZjZWY7XG4gICAgY29sb3I6ICMwZTlmNmU7XG59XG5cbi5jYWlzc2Utc3RhdHVzLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZThlODtcbiAgICBjb2xvcjogI2M4MWUxZTtcbn1cblxuLmNhaXNzZS1idG4uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnNlbGVjdGVkLWJvdXRpcXVlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFlMjkzYjtcbn1cblxuLmNhaXNzZS1jb250YWluZXItYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWlzc2UtYnRuW2Rpc2FibGVkXSxcbi5jYWlzc2UtYnRuLmRpc2FibGVkLWxpa2Uge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAgICAvKiBjdXJzZXVyIGludGVyZGl0ICovXG4gIG9wYWNpdHk6IDAuNjsgICAgICAgICAgIC8qIHZpc3VlbCBhdHTDqW51w6kgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7ICAgLyogc8OpY3VyaXTDqSBzdXBwbMOpbWVudGFpcmUgKi9cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1jYWlzc2UtaGVhZGVyL3Bvcy1jYWlzc2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9QT1MvcG9zLWNhaXNzZS9wb3MtY2Fpc3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUFzQixrQkFBQTtBREd0Qjs7QUNGQTtFQUFxQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0MsU0FBQTtFQUFXLFdBQUE7RUFBYSxZQUFBO0VBQWMsc0JBQUE7RUFBd0IsK0NBQUE7RUFBaUQsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixNQUFBO0VBQVEsWUFBQTtBRGlCblA7O0FDaEJBO0VBQWtDLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FEc0J0RTs7QUNyQkE7RUFBSyxnQkFBQTtFQUFrQixTQUFBO0VBQVcsVUFBQTtBRDJCbEM7O0FDMUJBO0VBQUksU0FBQTtBRDhCSjs7QUM3QkE7RUFBVSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtBRG1DOUM7O0FDbENBO0VBQWlCLGVBQUE7RUFBaUIsZUFBQTtBRHVDbEM7O0FDdENBO0VBQWUsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFlBQUE7RUFBYyxhQUFBO0VBQWUsbUJBQUE7QUQ4QzlFOztBQzdDQTtFQUFxQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLHNCQUFBO0FEcUR4Rjs7QUNwREE7RUFBaUIsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQW9CLGVBQUE7QUQyRG5FOztBQzFEQTtFQUFTLFlBQUE7RUFBYyxVQUFBO0VBQVksNkNBQUE7RUFBNkIsZ0JBQUE7QURpRWhFOztBQ2hFQTtFQUFZLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLGNBQUE7RUFBZ0Isa0JBQUE7RUFBb0IsWUFBQTtBRHdFL0Y7O0FDdkVBO0VB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LGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBc2ZKO0FBcGZJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFzZk47QUFwZk07RUFDRSxtQkFBQTtBQXNmUjtBQW5mTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBcWZSOztBQS9lQSw0REFBQTtBQUNBO0VBQ0UsY0FBQSxFQUFBLGdCQUFBO0FBa2ZGOztBQS9lQSxrREFBQTtBQUNBO0VBQ0UsY0FBQTtBQWtmRjs7QUEvZUEsaURBQUE7QUFDQTtFQUNFLGNBQUE7QUFrZkY7O0FBL2VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWtmRjtBQUNBLHc0bUJBQXc0bUIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9wb3MtY2Fpc3NlL3Bvcy1jYWlzc2UuY29tcG9uZW50LnNjc3MnO1xuXG4ubWVudSBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICAubWVudS1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogY291bGV1ciByb3VnZSB2aXNpYmxlLCBhY2Nlc3NpYmxlIGV0IGzDg8KpZ8ODwqhyZW1lbnQgc2F0dXLDg8KpZSAqL1xuLmRyb3Bkb3duLWl0ZW0uaGlkZS1hbGwge1xuICBjb2xvcjogI2U1MzkzNTsgICAgLyogcm91Z2UgY2hhdWQgKi9cbn1cblxuLyogcydhc3N1cmVyIHF1ZSBsJ2ljw4PCtG5lIHByZW5uZSBhdXNzaSBsYSBjb3VsZXVyICovXG4uZHJvcGRvd24taXRlbS5oaWRlLWFsbCBpIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIChvcHRpb25uZWwpIHN0eWxlIGhvdmVyIHBvdXIgcmVzdGVyIGNvaMODwqlyZW50ICovXG4uZHJvcGRvd24taXRlbS5oaWRlLWFsbDpob3ZlciB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuXG4ucGFnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59IiwiLmNvbnRlbnRfcG9zX2NhaXNzZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmhlYWRlcl9wb3NfY2Fpc3NlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEwcHg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4OyBwYWRkaW5nOiAwIDE1cHg7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgei1pbmRleDogOTk5O31cbi5jb250ZW50X2hlYWRlcl9wb3NfY2Fpc3NlX3JpZ2h0IHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweH1cbnVsIHsgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbnAgeyBtYXJnaW46IDA7IH1cbi5kb3VibGUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7fVxuLmljb25fcmV0b3VyIGkgeyBmb250LXNpemU6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjt9XG4uaW5wdXRTZWFyY2ggeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAyNTBweDsgaGVpZ2h0OiA0MHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cbi5pbnB1dFNlYXJjaCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHBhZGRpbmctbGVmdDogMTBweDsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO31cbi5pbnB1dFNlYXJjaCBpIHsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgbWFyZ2luLXJpZ2h0OiAxNXB4OyBmb250LXNpemU6IDE3cHg7fVxuLmJhcnJlIHsgaGVpZ2h0OiAyNXB4OyB3aWR0aDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7IG1hcmdpbjogOHB4IDEwcHg7fVxuLmFkZC10YXNrIHsgcGFkZGluZzogMTBweCAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyBjb2xvcjogI2ZmZmZmZjsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IG5vbmU7fVxuLmFkZC10YXNrOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzAzNjFjNiB9XG4uY2Fpc3NlLWNvbnRhaW5lciB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IGdhcDogMTZweDsgcGFkZGluZzogNXB4IDIwcHggMjBweDt9XG4vLyAuYWxsX2NhaXNzZV9jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDAgMjBweCAyMHB4O31cbi5hbGwtY2Fpc3NlLWNvbnRhaW5lci1ib3R0b20geyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDAgMjBweCAyMHB4O31cbi5jYWlzc2UtY2FyZCB7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IHBhZGRpbmc6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDRweDsgbWluLWhlaWdodDogMTUwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt9XG4uY2Fpc3NlLW5vbSB7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjMWExYTFhO31cbi5jYWlzc2UtYnRuIHsgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDZweCA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNTAwOyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTt9XG4uY2Fpc3NlLWJ0bjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzY7fVxuLnByb2ZpbCB7IGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7IHBhZGRpbmc6IDBweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGN1cnNvcjogcG9pbnRlcjt9XG4ucHJvZmlsIHNwYW4geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMDAwMDAwO31cbi5pY29uX21vcmUgeyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTFweDsgcmlnaHQ6IC0xMnB4O31cbi5pY29uX21vcmUgaSB7IGZvbnQtc2l6ZTogMThweDsgfVxuLmJsb2NrIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmNhaXNzZS1jYXJkOmhvdmVyIC5pY29uX21vcmUgeyBkaXNwbGF5OiBibG9jazt9XG4udGl0cmVfYWxsX2NhaXNzZSBoNiB7IGZvbnQtc2l6ZTogMTZweDsgfVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGFuaW1hdGlvbjogbW9kYWxBcHBlYXIgMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBtb2RhbEFwcGVhciB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2NjY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgfVxufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBcbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIFxuICAuYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIH1cbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzY7XG4gICAgfVxuICB9XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlcyBlcnJldXJzICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gIGNvbG9yOiAjYjcxYzFjO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi8qIFNwaW5uZXIgZGUgY2hhcmdlbWVudCAqL1xuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICBhbmltYXRpb246IHNwaW4gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBEw4PCqXNhY3RpdmVyIGxlcyBib3V0b25zIHBlbmRhbnQgbGUgY2hhcmdlbWVudCAqL1xuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ub19wYWdlcl9wcmV2aW91cyBpLFxuLm9fcGFnZXJfbmV4dCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmQtcHJpbnQtbm9uZSBidXR0b257XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfcHJldmlvdXMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9uZXh0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5jb250ZW50X3NlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNnB4IDMwcHggNnB4IDdweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEFqb3V0ZXogZGFucyBwb3MtY2Fpc3NlLmNvbXBvbmVudC5zY3NzICovXG5cbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgXG4gIC5zcGluIHtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubm8tY2Fpc3NlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICM4ODg7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4uY2Fpc3NlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2Fpc3NlLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgXG4gICYub3BlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJlZDtcbiAgICBjb2xvcjogIzBhODE1MDtcbiAgfVxuICBcbiAgJi5jbG9zZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmViZWM7XG4gICAgY29sb3I6ICNkZTM2MTg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmljb25fbW9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpIHsgZm9udC1zaXplOiAxOHB4OyB9XG5cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7ICAgICAgIC8vIGp1c3RlIGVuIGRlc3NvdXMgZGUgbMOiwoDCmWljw4PCtG5lXG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICAvKiBPcHRpb25uZWwgOiBhcHBhcmVuY2UgYXUgc3Vydm9sLCBtYWlzIGxlICpuZ0lmIGfDg8KocmUgbMOiwoDCmWFmZmljaGFnZSAqL1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmNhaXNzZS1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhaXNzZS1zdGF0dXMub3BlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZmNlZjtcbiAgICBjb2xvcjogIzBlOWY2ZTtcbn1cblxuLmNhaXNzZS1zdGF0dXMuY2xvc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlOGU4O1xuICAgIGNvbG9yOiAjYzgxZTFlO1xufVxuXG4uY2Fpc3NlLWJ0bi5kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc2VsZWN0ZWQtYm91dGlxdWUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmODtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMWUyOTNiO1xufVxuXG4uY2Fpc3NlLWNvbnRhaW5lci1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhaXNzZS1idG5bZGlzYWJsZWRdLFxuLmNhaXNzZS1idG4uZGlzYWJsZWQtbGlrZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7ICAgIC8qIGN1cnNldXIgaW50ZXJkaXQgKi9cbiAgb3BhY2l0eTogMC42OyAgICAgICAgICAgLyogdmlzdWVsIGF0dMODwqludcODwqkgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7ICAgLyogc8ODwqljdXJpdMODwqkgc3VwcGzDg8KpbWVudGFpcmUgKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-caisse-header_pos-caisse-header_component_ts.js.map