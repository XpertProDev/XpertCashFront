"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_fournisseurs_add-fournisseur_add-fournisseur_component_ts"],{

/***/ 21955:
/*!**************************************************************************************!*\
  !*** ./src/app/admin-page/fournisseurs/add-fournisseur/add-fournisseur.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddFournisseurComponent: () => (/* binding */ AddFournisseurComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_fournisseur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/fournisseur-service */ 35408);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);









const _c0 = ["fileInput"];
function AddFournisseurComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function AddFournisseurComponent_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddFournisseurComponent_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddFournisseurComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddFournisseurComponent_div_21_small_1_Template, 2, 0, "small", 59)(2, AddFournisseurComponent_div_21_small_2_Template, 2, 0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.fournisseurForm.get("nomComplet")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.fournisseurForm.get("nomComplet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function AddFournisseurComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ce champ est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AddFournisseurComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r1.paysIndicatifs[pays_r3].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r1.paysIndicatifs[pays_r3].indicatif.trim(), ". ");
  }
}
function AddFournisseurComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AddFournisseurComponent_div_54_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddFournisseurComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddFournisseurComponent_div_54_small_1_Template, 2, 0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.fournisseurForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function AddFournisseurComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_div_73_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_div_73_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_div_73_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r1.removeImage();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function AddFournisseurComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function AddFournisseurComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
class AddFournisseurComponent {
  constructor(fb, fournisseurService, router, cdRef) {
    this.fb = fb;
    this.fournisseurService = fournisseurService;
    this.router = router;
    this.cdRef = cdRef;
    this.isLoading = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.errorMessageApi = '';
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.image = null;
    this.isPreviewVisible = false;
    this.previewImage = null;
    this.paysIndicatifs = {
      'Mali': {
        indicatif: '+223 ',
        longueur: 8
      },
      'Sénégal': {
        indicatif: '+221 ',
        longueur: 9
      },
      'Côte d\'Ivoire': {
        indicatif: '+225 ',
        longueur: 10
      }
    };
  }
  ngOnInit() {
    this.getInitForm();
  }
  getInitForm() {
    this.fournisseurForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      adresse: [''],
      pays: [''],
      telephone: [''],
      description: [''],
      ville: [''],
      nomSociete: [''],
      photo: [null]
    });
  }
  onPaysChange(event) {
    const select = event.target;
    const pays = select.value;
    const paysInfo = this.paysIndicatifs[pays];
    if (paysInfo) {
      this.indicatif = paysInfo.indicatif;
      this.maxPhoneLength = paysInfo.longueur;
      const ctrl = this.fournisseurForm.get('telephone');
      // préfixe si nécessaire
      if (!ctrl.value?.startsWith(this.indicatif)) {
        ctrl.setValue(this.indicatif);
      }
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }
  updatePhoneValidator(longueur) {
    const ctrl = this.fournisseurForm.get('telephone');
    // on impose exactement {longueur} chiffres après l’indicatif
    const regex = new RegExp(`^\\${this.indicatif}\\d{${longueur}}$`);
    ctrl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(regex)]);
    ctrl.updateValueAndValidity();
  }
  formatPhoneNumber() {
    const ctrl = this.fournisseurForm.get('telephone');
    let raw = ctrl.value;
    const pays = this.fournisseurForm.get('pays')?.value;
    const paysInfo = this.paysIndicatifs[pays];
    // 1) Retirer l’indicatif s’il est déjà présent
    if (paysInfo && raw.startsWith(paysInfo.indicatif)) {
      raw = raw.substring(paysInfo.indicatif.length);
    }
    // 2) Conserver que les chiffres
    const cleaned = raw.replace(/\D/g, '');
    // 3) Remonter l’indicatif + espace + chiffres
    const formatted = paysInfo ? `${paysInfo.indicatif}${cleaned}`.slice(0, paysInfo.indicatif.length + paysInfo.longueur) : cleaned;
    // 4) Mettre à jour sans retrigger
    ctrl.setValue(formatted, {
      emitEvent: false
    });
  }
  // ajouterFournisseur() {
  //   if (this.fournisseurForm.invalid) {
  //     this.fournisseurForm.markAllAsTouched();
  //     return;
  //   }
  //   this.isLoading = true;
  //   this.errorMessage = '';
  //   this.successMessage = '';
  //   const fournisseurData = {
  //     ...this.fournisseurForm.value,
  //     telephone: this.fournisseurForm.value.telephone.replace(/\s/g, '')
  //   };
  //   // Passe aussi this.selectedLogoFile au service
  //   this.fournisseurService.addFournisseur(fournisseurData, this.selectedLogoFile).subscribe({
  //     next: (response) => {
  //       this.isLoading = false;
  //       this.successMessage = 'Fournisseur ajouté avec succès!';
  //       setTimeout(() => this.router.navigate(['/fournisseurs']), 2000);
  //     },
  //     error: (error) => {
  //       this.isLoading = false;
  //       this.errorMessage = error.error?.error || 'Une erreur est survenue';
  //     }
  //   });
  // }
  ajouterFournisseur() {
    if (this.fournisseurForm.invalid) {
      this.fournisseurForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    // Délai de 3 secondes avant la création
    setTimeout(() => {
      const fournisseurData = {
        ...this.fournisseurForm.value,
        telephone: this.fournisseurForm.value.telephone.replace(/\s/g, '')
      };
      this.fournisseurService.addFournisseur(fournisseurData, this.selectedLogoFile).subscribe({
        next: response => {
          this.isLoading = false;
          this.successMessage = 'Fournisseur ajouté avec succès!';
          setTimeout(() => this.router.navigate(['/fournisseurs']), 2000);
        },
        error: error => {
          this.isLoading = false;
          this.errorMessage = error.error?.error || 'Une erreur est survenue';
        }
      });
    }, 3000); // 3000 ms = 3 secondes
  }
  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
  }
  showImagePreview() {
    if (this.image) {
      this.previewImage = this.image;
      this.isPreviewVisible = true;
    }
  }
  closePreview() {
    this.isPreviewVisible = false;
  }
  removeImage() {
    this.image = null;
    this.selectedLogoFile = undefined;
    this.previewImage = null;
    this.isPreviewVisible = false;
    // Réinitialiser l'input file
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }
  onFileSelected(event) {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        try {
          const compressedFile = yield _this.testImageCompression(file);
          if (!compressedFile) {
            console.error("Compression échouée ou image invalide.");
            return;
          }
          _this.selectedLogoFile = compressedFile; // Stocke le fichier compressé à envoyer
          // Affichage preview en base64
          const reader = new FileReader();
          reader.onload = e => {
            _this.image = e.target.result; // Base64 pour afficher l'image dans l'interface
            _this.cdRef.markForCheck();
          };
          reader.readAsDataURL(compressedFile);
        } catch (error) {
          console.error("Erreur lors de la compression ou du traitement :", error);
        }
      }
    })();
  }
  testImageCompression(file) {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!file) {
        console.log('Aucun fichier sélectionné.');
        return null;
      }
      console.log('Taille originale:', file.size / 1024, 'Ko');
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true
      };
      try {
        const compressedBlob = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(file, options);
        console.log('Taille après compression:', compressedBlob.size / 1024, 'Ko');
        if (!compressedBlob.type.startsWith('image/')) {
          console.error('Le fichier compressé n\'est pas un format d\'image valide.');
          _this2.errorMessage = 'Erreur de compression : Le fichier n\'est pas une image.';
          return null;
        }
        // Extraire le nom de base sans extension
        const originalName = file.name.split('.').slice(0, -1).join('.') || 'image';
        // Déterminer la bonne extension selon le type MIME
        let extension = 'png';
        if (compressedBlob.type === 'image/jpeg') extension = 'jpg';else if (compressedBlob.type === 'image/png') extension = 'png';else if (compressedBlob.type === 'image/webp') extension = 'webp';
        const finalFileName = `${originalName}.${extension}`;
        // Recréer un fichier avec le bon nom et la bonne extension
        const compressedFile = new File([compressedBlob], finalFileName, {
          type: compressedBlob.type,
          lastModified: Date.now()
        });
        return compressedFile;
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
        return null;
      }
    })();
  }
  navigateBack() {
    this.router.navigate(['/fournisseurs']);
  }
  static {
    this.ɵfac = function AddFournisseurComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddFournisseurComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_SERVICES_fournisseur_service__WEBPACK_IMPORTED_MODULE_2__.FournisseurService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddFournisseurComponent,
      selectors: [["app-add-fournisseur"]],
      viewQuery: function AddFournisseurComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 85,
      vars: 18,
      consts: [["fileInput", ""], ["title", "Retour sur la page fournisseur", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "grid_colonne_double"], [1, "champ_input"], ["type", "text", "id", "nomComplet", "formControlName", "nomComplet", "name", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "text", "id", "nomSociete", "formControlName", "nomSociete", "name", "nomSociete", "placeholder", "Saisis l'entreprise", 1, "input_focus"], ["for", "nomSociete", 1, "label"], ["type", "text", "formControlName", "description", "id", "description", "name", "description", "placeholder", "Saisis le description", 1, "input_focus2"], ["for", "description", 1, "label"], [1, "grid_colonne"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["for", "pays", 1, "label"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "name", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "ville", "formControlName", "ville", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], ["id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["type", "file", "accept", "image/*", "id", "uniqueFileInputId", 2, "display", "none", 3, "change"], [1, "champ_grid", 2, "margin", "10px 0 15px", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "margin", "0", "font-size", "12px", "display", "flex", "align-items", "center"], ["href", "javascript:void(0)", "title", "Changer le logo", 2, "padding-left", "8px", "cursor", "pointer", "display", "inline-flex", "align-items", "center", 3, "click"], ["src", "assets/img/appareil.png", "alt", "Changer logo", 2, "width", "25px", "height", "25px"], [1, "imgClient2", 2, "position", "relative", "cursor", "pointer", 3, "click"], ["alt", "Logo fournisseur", 3, "src"], ["class", "image-preview-overlay", 3, "click", 4, "ngIf"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], ["class", "error-messageApi2", 4, "ngIf"], ["class", "success-messageApi2", 4, "ngIf"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "error"], [4, "ngIf"], [1, "image-preview-overlay", 3, "click"], [1, "image-preview-container", 3, "click"], ["alt", "Preview", 3, "src"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "error-messageApi2"], [1, "success-messageApi2"]],
      template: function AddFournisseurComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Fournisseur");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddFournisseurComponent_div_5_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "form", 8)(9, "div", 9)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Ajouter un fournisseur");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nom et pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AddFournisseurComponent_div_21_Template, 3, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "L'entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23)(31, "div", 15)(32, "select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddFournisseurComponent_Template_select_change_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onPaysChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Mali");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "S\u00E9n\u00E9gal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "C\u00F4te d'Ivoire");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, AddFournisseurComponent_div_43_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 15)(45, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddFournisseurComponent_Template_input_input_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.formatPhoneNumber());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, AddFournisseurComponent_div_48_Template, 3, 2, "div", 18)(49, AddFournisseurComponent_div_49_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AddFournisseurComponent_div_54_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 14)(56, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "input", 38, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddFournisseurComponent_Template_input_change_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 39)(67, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Changer votre logo ici \uD83D\uDC49 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_Template_a_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](fileInput_r4.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "img", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_Template_div_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.showImagePreview());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "img", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, AddFournisseurComponent_div_73_Template, 5, 1, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 46)(75, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, AddFournisseurComponent_div_76_Template, 2, 1, "div", 48)(77, AddFournisseurComponent_div_77_Template, 2, 1, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 50)(79, "div", 51)(80, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.goToFournisseur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 53)(83, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFournisseurComponent_Template_button_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.ajouterFournisseur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.fournisseurForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.fournisseurForm.get("nomComplet")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.fournisseurForm.get("nomComplet")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.fournisseurForm.get("pays")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.fournisseurForm.get("pays")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.fournisseurForm.get("telephone")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.fournisseurForm.get("telephone")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]) && ((tmp_5_0 = ctx.fournisseurForm.get("pays")) == null ? null : tmp_5_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.fournisseurForm.get("telephone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.fournisseurForm.get("telephone")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.fournisseurForm.get("email")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.fournisseurForm.get("email")) == null ? null : tmp_7_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.image || "assets/img/profil.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPreviewVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.fournisseurForm.valid && !ctx.isLoading ? "#0672E4" : "#0671e434")("color", ctx.fournisseurForm.valid && !ctx.isLoading ? "#ffffff" : "#00000073")("cursor", ctx.fournisseurForm.valid && !ctx.isLoading ? "pointer" : "no-drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fournisseurForm.invalid || ctx.isLoading);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["@charset \"UTF-8\";\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 30px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.grid_colonne_double[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\ninput[type=tel][_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n\n.input-focus[type=tel][_ngcontent-%COMP%] {\n  padding-left: 50px; \n\n  position: relative;\n}\n\n.country-code[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: #666;\n}\n\n.imgClient2[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 4px #dee2e6;\n}\n\n.image-preview-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.image-preview-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90%;\n  max-height: 90%;\n}\n.image-preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  border: 3px solid white;\n  border-radius: 8px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: -40px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mb3Vybmlzc2V1ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0U7SUFBSyx1QkFBQTtFQUVQO0VBREU7SUFBTyx5QkFBQTtFQUlUO0FBQ0Y7QUFGRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDSSxlQUFBO0FBSU47O0FBREksZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBR047O0FBQUk7RUFDRSw4QkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7QUFHTjs7QUFBSTtFQUNFLGVBQUE7QUFHTjs7QUFBSTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ047O0FBRUk7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNO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RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBN0JKIiwiZmlsZSI6ImFkZC1mb3Vybmlzc2V1ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICAuY29udGFpbmVyX2dsb2JhbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgXG4gICAgLyogZm9ybXVsYWlyZSAqL1xuICAgIFxuICAgIC5jaGFtcF9pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xOHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybXVsYWlyZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5UaXRsZSBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAjNjk1YzVjO1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IDRweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gICAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiA1N3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyMnB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gICAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgICBjb2xvcjogIzA2NzJFNDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgICAgcGFkZGluZzogMjBweDsgXG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIFxuICAgIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXQyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2dyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIH1cbiAgICBcbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4gICAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIFxuICAgIC5kb3VibGVfaW5wdXQge1xuICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gIFxuICAvKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuICAuY29udGFpbmVyX2ZpbGUge1xuICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZ2FwOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHtcbiAgICAgIC8vIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgaW1ne1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXJfZmlsZSBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlcl9maWxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXJfZmlsZSBwIHtcbiAgICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXJfZmlsZSBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIH1cbiAgICBcbiAgICAjZmlsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuICBcbiAgICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIFxuICAgIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgLy8gYnV0dG9uIGFubnVsZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAvLyBidXR0b24gYW5udWxlciBob3ZlclxuICAgIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICAgIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIFxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAgIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgfVxuICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgIC8vIFRvZ2dsZSBcbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAvKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIExlIMKrIHNsaWRlciDCuyAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4OyBcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAzcHg7IFxuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIH1cbiAgXG4gIC5pbnB1dF9jdXJzb3Ige1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmljb25fYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDI1cHg7XG4gIH1cbiAgXG4gIC5pY29uX2Fycm93IGkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbiAgLnBvcHVwLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICAucG9wdXAtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAucG9wdXAtaGVhZGVyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5wb3B1cC1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC8vIEJ1dHRvbiBcbiAgXG4gIC5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuYnRuLWNhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cbiAgXG4gIC5idG4tc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gICAgcGFkZGluZzogNnB4IDI1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICB9XG4gIFxuICAuZXJyb3ItdGV4dCB7XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG4gIFxuICAuYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlQXBpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICBcbiAgLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZUFwaTIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5ncmlkX2NvbG9ubmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC5ncmlkX2NvbG9ubmVfZG91YmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gICAgXG4gIC5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4gIC5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4gIC5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG4gIFxuICBpbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICAuaW5wdXQtZm9jdXNbdHlwZT1cInRlbFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4OyAvKiBFc3BhY2UgcG91ciBsJ2luZGljYXRpZiAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNvdW50cnktY29kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG5cbiAgLmltZ0NsaWVudDIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgICBcbiAgLmltZ0NsaWVudDIgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2RlZTJlNjtcbiAgfVxuXG4vLyAgIC5pbWdDbGllbnQyIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgd2lkdGg6IDQwcHg7XG4vLyAgICAgaGVpZ2h0OiA0MHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cbi8vICAgICBpbWcge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgICB9XG4vLyB9XG5cbi5pbWFnZS1wcmV2aWV3LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4uaW1hZ2UtcHJldmlldy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAtNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0NzU3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mb3Vybmlzc2V1cnMvYWRkLWZvdXJuaXNzZXVyL2FkZC1mb3Vybmlzc2V1ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0U7SUFBSyx1QkFBQTtFQUVQO0VBREU7SUFBTyx5QkFBQTtFQUlUO0FBQ0Y7QUFGRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDSSxlQUFBO0FBSU47O0FBREksZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBR047O0FBQUk7RUFDRSw4QkFBQTtBQUdOOztBQUFJO0VBQ0Usa0JBQUE7QUFHTjs7QUFBSTtFQUNFLGVBQUE7QUFHTjs7QUFBSTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ047O0FBRUk7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUdJOztFQUVFLGNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtBQUFOOztBQUdJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBTjs7QUFJSTtFQUNFLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFETjs7QUFJSTs7RUFFRSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUROOztBQUlJO0VBQ0UsVUFBQTtBQUROOztBQUlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBRE47O0FBSUk7RUFDRSxhQUFBO0FBRE47O0FBS0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZOOztBQUtJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUtJO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFD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Q0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBN0JKO0FBQ0EsZzN6QkFBZzN6QiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG4gIFxuICAuY29udGFpbmVyX2dsb2JhbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgXG4gICAgLyogZm9ybXVsYWlyZSAqL1xuICAgIFxuICAgIC5jaGFtcF9pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xOHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybXVsYWlyZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5UaXRsZSBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAjNjk1YzVjO1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IDRweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gICAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiA1N3B4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyMnB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gICAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgICBjb2xvcjogIzA2NzJFNDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgICAgcGFkZGluZzogMjBweDsgXG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIFxuICAgIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXQyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG4gICAgXG4gICAgLmNoYW1wX2dyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIH1cbiAgICBcbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4gICAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIFxuICAgIC5kb3VibGVfaW5wdXQge1xuICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gIFxuICAvKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuICAuY29udGFpbmVyX2ZpbGUge1xuICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZ2FwOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHtcbiAgICAgIC8vIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgaW1ne1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXJfZmlsZSBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlcl9maWxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXJfZmlsZSBwIHtcbiAgICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXJfZmlsZSBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIH1cbiAgICBcbiAgICAjZmlsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyX2ZpbGUgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuICBcbiAgICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIFxuICAgIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgLy8gYnV0dG9uIGFubnVsZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAvLyBidXR0b24gYW5udWxlciBob3ZlclxuICAgIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICAgIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIFxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAgIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgfVxuICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAgIC8vIFRvZ2dsZSBcbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAvKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIExlIMOCwqsgc2xpZGVyIMOCwrsgKi9cbiAgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgfVxuICBcbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMThweDsgXG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogM3B4OyBcbiAgICBib3R0b206IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAvKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIH1cbiAgXG4gIC5pbnB1dF9jdXJzb3Ige1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmljb25fYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDI1cHg7XG4gIH1cbiAgXG4gIC5pY29uX2Fycm93IGkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbiAgLnBvcHVwLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICAucG9wdXAtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAucG9wdXAtaGVhZGVyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5wb3B1cC1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC8vIEJ1dHRvbiBcbiAgXG4gIC5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuYnRuLWNhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cbiAgXG4gIC5idG4tc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gICAgcGFkZGluZzogNnB4IDI1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICB9XG4gIFxuICAuZXJyb3ItdGV4dCB7XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG4gIFxuICAuYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlQXBpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICBcbiAgLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZUFwaTIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5ncmlkX2NvbG9ubmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC5ncmlkX2NvbG9ubmVfZG91YmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gICAgXG4gIC5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4gIC5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4gIC5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG4gIFxuICBpbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICAuaW5wdXQtZm9jdXNbdHlwZT1cInRlbFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4OyAvKiBFc3BhY2UgcG91ciBsJ2luZGljYXRpZiAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNvdW50cnktY29kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG5cbiAgLmltZ0NsaWVudDIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgICBcbiAgLmltZ0NsaWVudDIgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2RlZTJlNjtcbiAgfVxuXG4vLyAgIC5pbWdDbGllbnQyIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgd2lkdGg6IDQwcHg7XG4vLyAgICAgaGVpZ2h0OiA0MHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cbi8vICAgICBpbWcge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgICB9XG4vLyB9XG5cbi5pbWFnZS1wcmV2aWV3LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4uaW1hZ2UtcHJldmlldy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAtNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0NzU3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_fournisseurs_add-fournisseur_add-fournisseur_component_ts.js.map