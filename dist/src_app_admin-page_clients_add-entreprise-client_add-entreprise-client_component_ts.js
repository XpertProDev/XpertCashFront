"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_add-entreprise-client_add-entreprise-client_component_ts"],{

/***/ 46199:
/*!*********************************************************************************************!*\
  !*** ./src/app/admin-page/clients/add-entreprise-client/add-entreprise-client.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddEntrepriseClientComponent: () => (/* binding */ AddEntrepriseClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SERVICES/entreprise-clients-service */ 31673);








function AddEntrepriseClientComponent_div_20_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddEntrepriseClientComponent_div_20_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Minimum 2 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddEntrepriseClientComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEntrepriseClientComponent_div_20_small_1_Template, 2, 0, "small", 44)(2, AddEntrepriseClientComponent_div_20_small_2_Template, 2, 0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.entrepriseClientForm.get("nom")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function AddEntrepriseClientComponent_div_25_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Format d'email invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddEntrepriseClientComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEntrepriseClientComponent_div_25_small_1_Template, 2, 0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.entrepriseClientForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function AddEntrepriseClientComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", nomPays_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", nomPays_r2, " (", ctx_r0.paysIndicatifs[nomPays_r2].indicatif, ") ");
  }
}
function AddEntrepriseClientComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r0.paysIndicatifs[pays_r3].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r0.paysIndicatifs[pays_r3].indicatif.trim(), ". ");
  }
}
function AddEntrepriseClientComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AddEntrepriseClientComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessageApi);
  }
}
function AddEntrepriseClientComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
class AddEntrepriseClientComponent {
  constructor(router, fb, entrepriseClientService) {
    this.router = router;
    this.fb = fb;
    this.entrepriseClientService = entrepriseClientService;
    this.errorMessageApi = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
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
      'Burkina Faso': {
        indicatif: '+226',
        longueur: 8
      },
      'Niger': {
        indicatif: '+227',
        longueur: 8
      },
      'France': {
        indicatif: '+33',
        longueur: 9
      },
      'Belgique': {
        indicatif: '+32',
        longueur: 9
      },
      'Suisse': {
        indicatif: '+41',
        longueur: 9
      },
      'Canada': {
        indicatif: '+1',
        longueur: 10
      },
      'États-Unis': {
        indicatif: '+1',
        longueur: 10
      },
      'Maroc': {
        indicatif: '+212',
        longueur: 9
      },
      'Algérie': {
        indicatif: '+213',
        longueur: 9
      },
      'Tunisie': {
        indicatif: '+216',
        longueur: 8
      },
      'Togo': {
        indicatif: '+228',
        longueur: 8
      },
      'Bénin': {
        indicatif: '+229',
        longueur: 8
      },
      'Guinée': {
        indicatif: '+224',
        longueur: 9
      },
      'Tchad': {
        indicatif: '+235',
        longueur: 8
      },
      'Cameroun': {
        indicatif: '+237',
        longueur: 9
      },
      'RDC': {
        indicatif: '+243',
        longueur: 9
      },
      'Gabon': {
        indicatif: '+241',
        longueur: 9
      },
      'Afrique du Sud': {
        indicatif: '+27',
        longueur: 9
      },
      'Rwanda': {
        indicatif: '+250',
        longueur: 9
      },
      'Kenya': {
        indicatif: '+254',
        longueur: 9
      },
      'Nigéria': {
        indicatif: '+234',
        longueur: 10
      },
      'Ghana': {
        indicatif: '+233',
        longueur: 9
      },
      'Éthiopie': {
        indicatif: '+251',
        longueur: 9
      },
      'Égypte': {
        indicatif: '+20',
        longueur: 10
      },
      'Inde': {
        indicatif: '+91',
        longueur: 10
      },
      'Chine': {
        indicatif: '+86',
        longueur: 11
      },
      'Mexique': {
        indicatif: '+52',
        longueur: 10
      },
      'Allemagne': {
        indicatif: '+49',
        longueur: 10
      },
      'Espagne': {
        indicatif: '+34',
        longueur: 9
      },
      'Italie': {
        indicatif: '+39',
        longueur: 10
      },
      'Royaume-Uni': {
        indicatif: '+44',
        longueur: 10
      },
      'Pays-Bas': {
        indicatif: '+31',
        longueur: 9
      },
      'Portugal': {
        indicatif: '+351',
        longueur: 9
      }
    };
    this.paysKeys = Object.keys(this.paysIndicatifs);
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Ajouter ces méthodes
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (!paysInfo) return;
    this.entrepriseIndicatif = paysInfo.indicatif;
    this.entrepriseMaxPhoneLength = paysInfo.longueur;
    const ctrl = this.entrepriseClientForm.get('telephone');
    if (!ctrl.value?.startsWith(this.entrepriseIndicatif)) {
      ctrl.setValue(this.entrepriseIndicatif);
    }
    this.updatePhoneValidator(paysInfo.longueur);
  }
  // Méthode de mise à jour du validateur
  updatePhoneValidator(longueur) {
    const ctrl = this.entrepriseClientForm.get('telephone');
    const regex = new RegExp(`^\\${this.entrepriseIndicatif.trim()}\\s?\\d{${longueur}}$`);
    ctrl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(regex)]);
    ctrl.updateValueAndValidity();
  }
  // Formatage "en direct" du numéro
  formatEntreprisePhoneNumber() {
    const ctrl = this.entrepriseClientForm.get('telephone');
    let valeur = ctrl.value;
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      ctrl.setValue(this.entrepriseIndicatif);
      return;
    }
    // Retirer tout sauf les chiffres après l’indicatif
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    // Reformater avec espace conservé
    const numeroFormate = `${this.entrepriseIndicatif}${chiffres}`.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength);
    ctrl.setValue(numeroFormate, {
      emitEvent: false
    });
  }
  initializeForm() {
    this.entrepriseClientForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      adresse: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      telephone: [''],
      pays: [''],
      siege: [''],
      secteur: ['']
    });
  }
  ajouterEntrepriseClient() {
    this.errorMessageApi = '';
    this.successMessage = '';
    if (this.entrepriseClientForm.invalid) {
      this.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const entrepriseClient = this.entrepriseClientForm.value;
    this.entrepriseClientService.addEntrepriseClient(entrepriseClient).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.successMessage = 'Entreprise ajoutée avec succès!';
        this.entrepriseClientForm.reset();
        setTimeout(() => this.router.navigate(['/clients']), 2000);
      },
      error: err => {
        this.errorMessageApi = err.error?.error || err.message || 'Erreur lors de l\'ajout de l\'entreprise';
        this.isSubmitting = false;
      }
    });
  }
  markAllAsTouched() {
    Object.values(this.entrepriseClientForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }
  navigateBack() {
    this.router.navigate(['/clients']);
  }
  static {
    this.ɵfac = function AddEntrepriseClientComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddEntrepriseClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_0__.EntrepriseClientService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddEntrepriseClientComponent,
      selectors: [["app-add-entreprise-client"]],
      decls: 64,
      vars: 16,
      consts: [[1, "container_global"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], ["title", "Retour sur la page client", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "nomComplet", "formControlName", "nom", "name", "nomComplet", "placeholder", "Saisis le nom d'entreprise", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["autocomplete", "off", "id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["type", "text", "id", "siege", "formControlName", "siege", "name", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], ["for", "telephone", 1, "label"], [1, "grid_colonne"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "secteur", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], ["class", "error-messageApi2", 4, "ngIf"], ["class", "success-messageApi2", 4, "ngIf"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "error"], [4, "ngIf"], [3, "value"], [1, "error-messageApi2"], [1, "success-messageApi2"]],
      template: function AddEntrepriseClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEntrepriseClientComponent_Template_p_click_4_listener() {
            return ctx.navigateBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ajouter un client entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nom d'entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddEntrepriseClientComponent_div_20_Template, 3, 2, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddEntrepriseClientComponent_div_25_Template, 2, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12)(27, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddEntrepriseClientComponent_Template_select_change_37_listener($event) {
            return ctx.onEntreprisePaysChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddEntrepriseClientComponent_option_40_Template, 2, 3, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 29)(44, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddEntrepriseClientComponent_Template_input_input_44_listener() {
            return ctx.formatEntreprisePhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddEntrepriseClientComponent_div_47_Template, 3, 2, "div", 16)(48, AddEntrepriseClientComponent_div_48_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Secteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 34)(54, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddEntrepriseClientComponent_div_55_Template, 2, 1, "div", 36)(56, AddEntrepriseClientComponent_div_56_Template, 2, 1, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 38)(58, "div", 39)(59, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEntrepriseClientComponent_Template_button_click_59_listener() {
            return ctx.goToClients();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 41)(62, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEntrepriseClientComponent_Template_button_click_62_listener() {
            return ctx.ajouterEntrepriseClient();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.entrepriseClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.entrepriseClientForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.entrepriseClientForm.get("email")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paysKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]) && ((tmp_4_0 = ctx.entrepriseClientForm.get("pays")) == null ? null : tmp_4_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessageApi);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.entrepriseClientForm.valid ? "#0672E4" : "#0671e434")("color", ctx.entrepriseClientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx.entrepriseClientForm.valid ? "pointer" : "no-drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.entrepriseClientForm.invalid)("disabled", ctx.entrepriseClientForm.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 30px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\ninput[type=tel][_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lbnRyZXByaXNlLWNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UsOEJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1FO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPRTs7RUFFRSxjQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Es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QUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBeEJGOztBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBeEJGOztBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXpCRjs7QUE0QkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBekJGOztBQTRCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQXpCRjs7QUE0QkE7RUFBUSxrQkFBQTtBQXhCUjs7QUF5QkE7RUFBUSxrQkFBQTtBQXJCUjs7QUFzQkE7RUFBUSxrQkFBQTtBQWxCUjs7QUFvQkE7RUFDRSxxQkFBQTtBQWpCRiIsImZpbGUiOiJhZGQtZW50cmVwcmlzZS1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAvKiBmb3JtdWxhaXJlICovXG4gIFxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuY2hhbXBfaW5wdXQgLnRpdGxlX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMThweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5mb3JtdWxhaXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5UaXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNzc3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbiAgLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4gICAuaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4vKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuLmNvbnRhaW5lcl9maWxlIHtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUge1xuICAgIC8vIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBzdmcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHAge1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG4gIFxuICAjZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuXG4gIC5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLy8gYnV0dG9uIGFubnVsZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYW5udWxlciBob3ZlclxuICAuYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICB9XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cblxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBcblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDCqyBzbGlkZXIgwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7IFxuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4OyBcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI1cHg7XG59XG5cbi5pY29uX2Fycm93IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vLyBCdXR0b24gXG5cbi5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICNmZjQ0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG5pbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2FkZC1lbnRyZXByaXNlLWNsaWVudC9hZGQtZW50cmVwcmlzZS1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHRSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0U7O0VBRUUsY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JB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bi5jb250YWluZXJfZ2xvYmFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIC5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG5cbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uZGl2MiB7IGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMzsgfVxuLmRpdjMgeyBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7IH1cblxuaW5wdXRbdHlwZT1cInRlbFwiXSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_add-entreprise-client_add-entreprise-client_component_ts.js.map