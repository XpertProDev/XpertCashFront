"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_pages_authentication_login_inscription_inscription_component_ts"],{

/***/ 29056:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/login/inscription/inscription.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InscriptionComponent: () => (/* binding */ InscriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_admin_page_Navigation_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/Navigation/header-nav/header-nav.component */ 10611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);








const _c0 = a0 => ({
  "error": a0
});
function InscriptionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Inscription en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function InscriptionComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le nom complet est vide. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le nom entreprise est vide. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_39_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email n'est pas valide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InscriptionComponent_div_39_span_1_Template, 2, 0, "span", 50)(2, InscriptionComponent_div_39_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["email"]);
  }
}
function InscriptionComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le pays est vide. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le num\u00E9ro de t\u00E9l\u00E9phone est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_56_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Au moins 8 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InscriptionComponent_div_56_span_1_Template, 2, 0, "span", 50)(2, InscriptionComponent_div_56_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["phone"].errors == null ? null : ctx_r0.f["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["phone"].errors == null ? null : ctx_r0.f["phone"].errors["minlength"]);
  }
}
function InscriptionComponent_div_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mot de passe est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_62_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Au moins 8 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InscriptionComponent_div_62_span_1_Template, 2, 0, "span", 50)(2, InscriptionComponent_div_62_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["minlength"]);
  }
}
function InscriptionComponent_div_67_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirmation est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_67_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Les mots de passe ne correspondent pas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InscriptionComponent_div_67_span_1_Template, 2, 0, "span", 50)(2, InscriptionComponent_div_67_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["mismatch"]);
  }
}
function InscriptionComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function InscriptionComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InscriptionComponent_div_72_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r0.popupType === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.popupImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.popupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.popupMessage);
  }
}
class InscriptionComponent {
  constructor(fb, usersService, router) {
    this.fb = fb;
    this.usersService = usersService;
    this.router = router;
    this.entrepriseName = '';
    this.errorMessage = '';
    // Propriétés pour la popup
    this.showPopup = false;
    this.popupTitle = '';
    this.popupMessage = '';
    this.popupImage = '';
    this.popupType = 'success';
    this.isLoading = false;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      nomComplet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nomEntreprise: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      pays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nomBoutique: ['']
    }, {
      validator: this.passwordMatchValidator
    });
  }
  // Validation personnalisée pour vérifier que "password" et "confirmPassword" correspondent
  passwordMatchValidator(form) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({
        mismatch: true
      });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }
  // Mise à jour dynamique du nom d'entreprise
  updateEntrepriseName(event) {
    this.entrepriseName = event.target.value.toLowerCase();
    this.registerForm.get('nomEntreprise')?.setValue(this.entrepriseName);
  }
  // Ouvre la popup avec titre, message et type (success ou error)
  openPopup(title, message, type) {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    // Choix de l'image en fonction du type
    if (type === 'success') {
      this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
    } else {
      this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
    }
    this.showPopup = true;
  }
  // Ferme la popup et redirige si l'inscription a réussi
  closePopup() {
    this.showPopup = false;
    if (this.popupType === 'success') {
      this.router.navigate(['/connexion']);
    }
  }
  submitForm() {
    if (this.registerForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
    this.isLoading = true;
    // Exclure 'confirmPassword' des données envoyées
    const {
      confirmPassword,
      ...userData
    } = this.registerForm.value;
    // On suppose que l'interface Users correspond aux champs attendus par le back-end
    const user = userData;
    setTimeout(() => {
      this.usersService.registerUser(user).subscribe({
        next: response => {
          console.log("Réponse API :", response);
          this.isLoading = false;
          if (response && response.message) {
            // Mettre à jour le service partagé avec le nom de la boutique reçu (response.nomBoutique)
            // if(response.nomBoutique) {
            //   console.log("Boutique dans la réponse :", response.nomBoutique);
            //   this.sharedDataService.setBoutiqueName(response.nomBoutique);
            // } else {
            //   console.error("La réponse ne contient pas 'nomBoutique'.");
            // }
            this.openPopup("Inscription réussie !", response.message, 'success');
          } else {
            this.errorMessage = response.error || "Erreur d'inscription, veuillez vérifier les champs.";
            this.openPopup("Erreur d'inscription", this.errorMessage, 'error');
          }
        },
        error: error => {
          this.isLoading = false;
          console.error("Erreur complète :", error);
          let message = "Une erreur est survenue lors de l'inscription.";
          if (error.status === 400 || error.status === 500) {
            if (typeof error.error === "string") {
              const match = error.error.match(/interpolatedMessage='([^']+)'/);
              message = match ? match[1] : error.error;
            } else if (error.error?.error) {
              message = error.error.error;
            }
          }
          this.openPopup("❌ Oups, une erreur !", message, "error");
        }
      });
    }, 1000);
  }
  get f() {
    return this.registerForm.controls;
  }
  static {
    this.ɵfac = function InscriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: InscriptionComponent,
      selectors: [["app-inscription"]],
      decls: 94,
      vars: 13,
      consts: [[1, "container_global"], [1, "container_global_content"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_page"], [1, "welcome"], [1, "formulaire_img"], [1, "info_form_left"], [3, "ngSubmit", "formGroup"], [1, "title_form"], [1, "formulaire"], [1, "champ_input"], ["type", "text", "formControlName", "nomComplet", "placeholder", "Saisis votre nom", 1, "input_focus"], [1, "label"], ["class", "error-message", 4, "ngIf"], [1, "double_input"], [1, "afficheEntreprise"], ["type", "text", "formControlName", "nomEntreprise", "placeholder", "Votre nom entreprise", 1, "input_focus", 2, "text-transform", "capitalize", 3, "input"], [1, "entreprseDomaine"], [1, "entreprseDomaineSite"], [1, "champ_input", "champ_input_margin"], ["type", "email", "formControlName", "email", "placeholder", "Saisis votre email", 1, "input_focus"], [1, "double_input", 2, "margin-top", "30px"], ["formControlName", "pays", "required", "", 1, "input_focus"], ["value", "", "disabled", "", "selected", ""], ["value", "Mali"], ["value", "Senegal"], ["value", "C\u00F4te d'Ivoire"], ["type", "text", "formControlName", "phone", "placeholder", "00 00 00 00", 1, "input_focus"], ["type", "password", "formControlName", "password", "placeholder", "****************", 1, "input_focus"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "****************", 1, "input_focus"], [1, "btn_contact"], ["type", "submit", 3, "click", "disabled"], ["class", "modal-overlay", 4, "ngIf"], [1, "info_form_right"], [1, "image_header"], ["src", "assets/img/logout_img.png", "alt", ""], [1, "container_temoignage"], [1, "content_temoignage"], [1, "temoignage_left"], [1, "image_temoignage"], ["src", "assets/img/temoignage1.png", "alt", "Image de temoignage"], [1, "temoignage_right"], [1, "title"], [1, "contenue"], [1, "mes_footer"], [1, "copyRight"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "error-message"], [4, "ngIf"], [1, "modal-overlay"], [1, "modal-content", 3, "ngClass"], [1, "popup-header"], [1, "popup-img"], ["alt", "Icone", 1, "popup-icon", 3, "src"], [3, "click"]],
      template: function InscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InscriptionComponent_div_3_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "section", 4)(6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bienvenue chez ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tchakeda");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Saisis vos information pour \u00EAtre de la famille");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 5)(13, "div", 6)(14, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InscriptionComponent_Template_form_ngSubmit_14_listener() {
            return ctx.submitForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9)(19, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Nom complet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, InscriptionComponent_div_23_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 10)(27, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function InscriptionComponent_Template_input_input_27_listener($event) {
            return ctx.updateEntrepriseName($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Nom entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, InscriptionComponent_div_30_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, ".tchakeda.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Votre email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, InscriptionComponent_div_39_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21)(41, "div", 10)(42, "select", 22)(43, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Mali");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "S\u00E9n\u00E9gal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "C\u00F4te d'Ivoire");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, InscriptionComponent_div_51_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Numero t\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, InscriptionComponent_div_56_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 14)(58, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, InscriptionComponent_div_62_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Confirmation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, InscriptionComponent_div_67_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, InscriptionComponent_div_68_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 30)(70, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InscriptionComponent_Template_button_click_70_listener() {
            return ctx.submitForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Continuer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, InscriptionComponent_div_72_Template, 11, 6, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 33)(74, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 41)(82, "h2", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Une Exp\u00E9rience Exceptionnelle !");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " J\u2019ai \u00E9t\u00E9 impressionn\u00E9 par la qualit\u00E9 du service et l\u2019attention port\u00E9e aux d\u00E9tails. D\u00E8s le premier contact, j\u2019ai ressenti un r\u00E9el professionnalisme et une \u00E9coute attentive. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "ul")(87, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Le processus a \u00E9t\u00E9 fluide, rapide et parfaitement adapt\u00E9 \u00E0 mes besoins. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Je recommande vivement \u00E0 toute personne cherchant une exp\u00E9rience fiable et de grande qualit\u00E9. Merci encore pour cette belle prestation ! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "footer", 44)(92, "p", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " \u00A9 Copyright Groupe XpertPro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["nomComplet"].touched && ctx.f["nomComplet"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["nomEntreprise"].touched && ctx.f["nomEntreprise"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.entrepriseName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["email"].touched && ctx.f["email"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["pays"].touched && ctx.f["pays"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["phone"].touched && ctx.f["phone"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["password"].touched && ctx.f["password"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f["confirmPassword"].touched && ctx.f["confirmPassword"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPopup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, src_app_admin_page_Navigation_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_0__.HeaderNavComponent],
      styles: [".container_global[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.container_global_content[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  background-color: #0672E4;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 9999999999;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n#nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n}\n\n.menu-bars[_ngcontent-%COMP%], \n.menu-close[_ngcontent-%COMP%] {\n  color: rgba(20, 20, 20, 0.8784313725);\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  margin-left: 30px;\n}\n\n.logos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #E9D421;\n  cursor: pointer;\n  font-size: 30px;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  top: 10px;\n  margin-right: 20px;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 10px 20px;\n}\n\n.nav__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n}\n\n.nav__link[_ngcontent-%COMP%]:hover {\n  color: #E9D421;\n  transition: all ease-in-out 0.5s;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  margin-top: 90px;\n}\n\n.welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #0672E4;\n}\n\n.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n}\n\n.content_page[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inpuemail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 300px;\n  height: 49px;\n  outline: none;\n  border: none;\n  margin: 5px 0px;\n  transition: all 0.3s;\n  font-size: 16px;\n  padding-left: 10px;\n  background-color: #ffffff;\n  color: #000;\n  box-shadow: rgba(90, 94, 97, 0.053) 0px 8px 24px;\n  border-radius: 5px;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.afficheEntreprise[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.entreprseDomaine[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 5px;\n  font-size: 12px;\n}\n\n.entreprseDomaineSite[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 10px;\n  pointer-events: none;\n  color: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -6px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 13px;\n  padding: 0;\n  background-color: #fff;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 2px;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.icon_reseau_contact[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.icon_reseau_contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1725490196);\n}\n\n.btn_contact[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 25px;\n  background: none;\n  margin-bottom: 20px;\n}\n\n.btn_contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 40px 10px 25px;\n  font-size: 15px;\n  cursor: pointer;\n  border-radius: 10px;\n  border: none;\n  background-color: rgba(6, 113, 228, 0.7725490196);\n  color: #fff;\n  transition: all 0.3s;\n  position: relative;\n  width: 100%;\n}\n\n.btn_contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n}\n\n.champ_input_margin[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.title_form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.champ_input_login[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.resetPassword[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #0672E4;\n}\n\n.resetPassword[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-decoration: underline;\n  color: #0672E4;\n  cursor: pointer;\n}\n\n.formulaire_img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_form_right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.container_temoignage[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  height: 60vh;\n}\n\n.content_temoignage[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n}\n\n.temoignage_left[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n\n.temoignage_right[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 50px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .contenue[_ngcontent-%COMP%] {\n  color: #f0eeee;\n  letter-spacing: 1px;\n  line-height: 20px;\n}\n\n.temoignage_right[_ngcontent-%COMP%]   .contenue[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 90%;\n}\n\n.mes_footer[_ngcontent-%COMP%] {\n  height: 10vh;\n  background-color: #202020;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.copyRight[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBOztFQUdJLHFDQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUlBLGVBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUko7O0FBWUE7RUFDSSxpQkFBQTtBQVRKOztBQWFBLGVBQUE7QUFFRTtFQUNFLGtCQUFBO0FBWEo7O0FBY0U7RUFDRSxnQkFBQTtBQVhKOztBQWNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFLQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQWZKOztBQW1CRTtFQUNFLGdDQUFBO0VBQ0EsZ0JB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Q0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsaUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBNUJGOztBQStCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBNUJGOztBQStCQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQTVCRjs7QUFtREE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoREY7O0FBbURBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7QUFqREY7O0FBc0RBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBbkRGOztBQXVEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXBERjs7QUF1REE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBcERGOztBQXVEQTtFQUNFO0lBQUssdUJBQUE7RUFuREw7RUFvREE7SUFBTyx5QkFBQTtFQWpEUDtBQUNGIiwiZmlsZSI6Imluc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9nbG9iYWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRhaW5lcl9nbG9iYWxfY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFlYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbn1cblxuI25hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1iYXJzLFxuLm1lbnUtY2xvc2VcbntcbiAgICBjb2xvcjogIzE0MTQxNGUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIGgye1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxvZ29zIHNwYW57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvZ28gc3BhbntcbiAgICBjb2xvcjogI0U5RDQyMTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvL3BhZGRpbmc6IDVweCA3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG59XG5cbi5uYXYtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2LWl0ZW1ze1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5uYXZfX2xpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2X19saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjRTlENDIxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuNXM7XG59XG5cblxuLy8gU2VjdGlvbiBwb3VyIGxhIGJpZW52ZW51XG5cbi53ZWxjb21lIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuXG4ud2VsY29tZSBoMntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi53ZWxjb21lIHB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cblxuLmNvbnRlbnRfcGFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cblxuLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbnB1ZW1haWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNiY2JjO1xuICAgIC8vIGJvcmRlci10b3A6IG5vbmU7XG4gICAgLy8gYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgLy8gYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoOTAsIDk0LCA5NywgMC4wNTMpIDBweCA4cHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuYWZmaWNoZUVudHJlcHJpc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmVudHJlcHJzZURvbWFpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIC5lbnRyZXByc2VEb21haW5lU2l0ZSB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogMDAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAtNnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICAuaWNvbl9yZXNlYXVfY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBcbiAgXG4gIC5pY29uX3Jlc2VhdV9jb250YWN0IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyYztcbiAgfVxuICBcbiAgLmJ0bl9jb250YWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5idG5fY29udGFjdCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0YzU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuYnRuX2NvbnRhY3QgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIFxuICAudGl0bGVfZm9ybSBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9sb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAucmVzZXRQYXNzd29yZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gIH1cbiAgXG4gIC5yZXNldFBhc3N3b3JkIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4uZm9ybXVsYWlyZV9pbWcge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4vLyBpbWFnZSBcblxuXG4uaW5mb19mb3JtX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gUG9wIHVwXG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3B1cC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG5cbi8qIEFuaW1hdGlvbiBkJ2FwcGFyaXRpb24gKi9cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gU3R5bGUgcG91ciBsZXMgdGVtb2lnbmFnZVxuXG4uY29udGFpbmVyX3RlbW9pZ25hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbi5jb250ZW50X3RlbW9pZ25hZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRlbW9pZ25hZ2VfbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4udGVtb2lnbmFnZV9yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi50ZW1vaWduYWdlX3JpZ2h0IC50aXRsZXtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udGVtb2lnbmFnZV9yaWdodCAuY29udGVudWUge1xuICBjb2xvcjogI2YwZWVlZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi50ZW1vaWduYWdlX3JpZ2h0IC5jb250ZW51ZSB1bCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFN0eWxlIHBvdXIgZm9vdGVyIFxuXG4ubWVzX2Zvb3RlciB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29weVJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTs7RUFHSSxxQ0FBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFJQSxlQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0FBTEo7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFhQSxlQUFBO0FBRUU7RUFDRSxrQkFBQTtBQVhKOztBQWNFO0VBQ0UsZ0JBQUE7QUFYSjs7QUFjRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBS0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFB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SUFDQSx3QkFBQTtFQXpCRjtBQUNGO0FBOEJBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBNUJGOztBQStCQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBNUJGOztBQStCQTtFQUNFLGlCQUFBO0FBNUJGOztBQStCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUE1QkY7O0FBbURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaERGOztBQW1EQTtFQUNFLFdBQUE7RUFFQSxlQUFBO0FBakRGOztBQXNEQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQW5ERjs7QUF1REE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFwREY7O0FBdURBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQXBERjs7QUF1REE7RUFDRTtJQUFLLHVCQUFBO0VBbkRMO0VBb0RBO0lBQU8seUJBQUE7RUFqRFA7QUFDRjtBQUNBLGdwZEFBZ3BkIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9nbG9iYWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRhaW5lcl9nbG9iYWxfY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFlYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbn1cblxuI25hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1iYXJzLFxuLm1lbnUtY2xvc2VcbntcbiAgICBjb2xvcjogIzE0MTQxNGUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIGgye1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxvZ29zIHNwYW57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvZ28gc3BhbntcbiAgICBjb2xvcjogI0U5RDQyMTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvL3BhZGRpbmc6IDVweCA3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG59XG5cbi5uYXYtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2LWl0ZW1ze1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5uYXZfX2xpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2X19saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjRTlENDIxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuNXM7XG59XG5cblxuLy8gU2VjdGlvbiBwb3VyIGxhIGJpZW52ZW51XG5cbi53ZWxjb21lIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuXG4ud2VsY29tZSBoMntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi53ZWxjb21lIHB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cblxuLmNvbnRlbnRfcGFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cblxuLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbnB1ZW1haWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNiY2JjO1xuICAgIC8vIGJvcmRlci10b3A6IG5vbmU7XG4gICAgLy8gYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgLy8gYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoOTAsIDk0LCA5NywgMC4wNTMpIDBweCA4cHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuYWZmaWNoZUVudHJlcHJpc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmVudHJlcHJzZURvbWFpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIC5lbnRyZXByc2VEb21haW5lU2l0ZSB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogMDAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAtNnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICAuaWNvbl9yZXNlYXVfY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBcbiAgXG4gIC5pY29uX3Jlc2VhdV9jb250YWN0IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyYztcbiAgfVxuICBcbiAgLmJ0bl9jb250YWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5idG5fY29udGFjdCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0YzU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuYnRuX2NvbnRhY3QgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIFxuICAudGl0bGVfZm9ybSBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9sb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAucmVzZXRQYXNzd29yZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gIH1cbiAgXG4gIC5yZXNldFBhc3N3b3JkIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4uZm9ybXVsYWlyZV9pbWcge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4vLyBpbWFnZSBcblxuXG4uaW5mb19mb3JtX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gUG9wIHVwXG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3B1cC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG5cbi8qIEFuaW1hdGlvbiBkJ2FwcGFyaXRpb24gKi9cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gU3R5bGUgcG91ciBsZXMgdGVtb2lnbmFnZVxuXG4uY29udGFpbmVyX3RlbW9pZ25hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbi5jb250ZW50X3RlbW9pZ25hZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRlbW9pZ25hZ2VfbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4udGVtb2lnbmFnZV9yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi50ZW1vaWduYWdlX3JpZ2h0IC50aXRsZXtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udGVtb2lnbmFnZV9yaWdodCAuY29udGVudWUge1xuICBjb2xvcjogI2YwZWVlZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi50ZW1vaWduYWdlX3JpZ2h0IC5jb250ZW51ZSB1bCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFN0eWxlIHBvdXIgZm9vdGVyIFxuXG4ubWVzX2Zvb3RlciB7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29weVJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_login_inscription_inscription_component_ts.js.map