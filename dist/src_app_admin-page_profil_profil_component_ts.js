"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_profil_profil_component_ts"],{

/***/ 75650:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/profil/profil.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilComponent: () => (/* binding */ ProfilComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_profil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/profil.service */ 31860);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);











const _c0 = ["video"];
const _c1 = ["canvas"];
const _c2 = a0 => ({
  "blurred": a0
});
function ProfilComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function ProfilComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function ProfilComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_24_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.visualiserPhoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Voir la photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_24_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.ouvrirCamera($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Prendre une photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_24_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changerPhoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Importer une photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_24_Template_button_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.supprimerPhoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Supprimer la photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Voulez-vous supprimer votre votre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " photo de profil ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 58)(7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_26_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.confirmerSuppression());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Oui");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_26_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.annulerSuppression());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Non");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function ProfilComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "video", 63, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_27_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.fermerCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 66)(7, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_27_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.prendrePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "canvas", 69, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfilComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.fermerModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_28_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ProfilComponent_div_28_Template_img_error_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.photo = "assets/img/profil.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_div_28_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.fermerModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.photo || "assets/img/profil.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProfilComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", boutique_r6.nomBoutique, " ");
  }
}
function ProfilComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Aucune boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ProfilComponent {
  toggleCurrentPasswordVisibility() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  togglePasswordForm() {
    this.isPasswordFormVisible = !this.isPasswordFormVisible;
  }
  // toggleNomBoutiqueForm() {
  //   this.isNomBoutiqueFormVisible = !this.isNomBoutiqueFormVisible;
  // }
  toggleUserForm() {
    this.isUserFormVisible = !this.isUserFormVisible;
  }
  constructor(fb, profilService, usersService, cd) {
    this.fb = fb;
    this.profilService = profilService;
    this.usersService = usersService;
    this.cd = cd;
    this.isLoading = false;
    this.errorMessage = null;
    this.successMessage = null;
    this.nomComplet = '';
    this.password = '';
    this.photo = null;
    this.imageFile = null;
    this.userName = '';
    this.nomEntreprise = '';
    this.email = '';
    this.phone = '';
    this.roleType = '';
    this.pays = '';
    this.nomBoutique = '';
    this.boutiqueAdresse = '';
    this.flagPays = '';
    this.personalCode = '';
    this.qrCodeUrl = '';
    this.isNomBoutiqueFormVisible = false;
    this.isUserFormVisible = false;
    this.boutiques = [];
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    this.newPhotoUrl = null;
    this.isModalOpen = false;
    this.paysFlags = {
      'Mali': '🇲🇱',
      'Sénégal': '🇸🇳',
      'Côte d\'Ivoire': '🇨\u200D',
      'Guinée': '🇬🇳',
      'Burkina Faso': '🇧🇫',
      'Togo': '🇹🇬',
      'Niger': '🇳\u200D',
      'Bénin': '🇧🇯',
      'Mauritanie': '🇲🇷',
      'Gabon': '🇬🇦',
      'Cameroun': '🇨🇲'
    };
    // Methode de eye
    this.showCurrentPassword = false;
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    // Methode pour cadre From
    this.isPasswordFormVisible = false;
    this.showCode = false;
    this.menuOuvert = false;
    this.afficherConfirmation = false;
    this.cameraActive = false;
    this.isExpanded = false;
  }
  ngOnInit() {
    this.initForm();
    this.getConnectedUserId();
    this.getUserInfo();
    const savedPhoto = localStorage.getItem('photo');
    if (savedPhoto) {
      this.photo = savedPhoto;
    }
    const savedQrCode = localStorage.getItem('qrCodeUrl');
    if (savedQrCode) {
      this.qrCodeUrl = savedQrCode;
    }
  }
  initForm() {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
    this.nomBoutiqueForm = this.fb.group({
      selectedBoutique: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      nomBoutique: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      adresse: ['']
    });
    this.nomCompletForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^\\+?[0-9]{7,15}$')]],
      // Numéro valide
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]] // Mot de passe avec min 6 caractères
    });
  }
  // Récupère l'id de l'utilisateur connecté via UsersService ou le localStorage
  getConnectedUserId() {
    this.usersService.getUserInfo().subscribe({
      next: userInfo => {
        if (userInfo && userInfo.id) {
          this.userId = userInfo.id;
        } else {
          const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
          if (storedUser && storedUser.id) {
            this.userId = storedUser.id;
          } else {
            this.errorMessage = "Utilisateur non authentifié.";
          }
        }
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur:", err);
        this.errorMessage = "Impossible de récupérer l'utilisateur connecté.";
      }
    });
  }
  get currentPassword() {
    return this.passwordForm.get('currentPassword');
  }
  get newPassword() {
    return this.passwordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
  get nomBoutiqueControl() {
    return this.nomBoutiqueForm.get('nomBoutique');
  }
  get adresseControl() {
    return this.nomBoutiqueForm.get('adresse');
  }
  get nomCompletControl() {
    return this.nomCompletForm.get('nomComplet');
  }
  get phoneControl() {
    return this.nomCompletForm.get('phone');
  }
  get passwordControl() {
    return this.nomCompletForm.get('password');
  }
  // Validator pour vérifier que les deux nouveaux mots de passe correspondent
  passwordMatchValidator(form) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : {
      mismatch: true
    };
  }
  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Réinitialise les messages
    this.errorMessage = null;
    this.successMessage = null;
    // Vérifie la validité du formulaire
    if (this.passwordForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
    const {
      currentPassword,
      newPassword,
      confirmPassword
    } = this.passwordForm.value;
    // Double vérification de la correspondance des mots de passe
    if (newPassword !== confirmPassword) {
      this.errorMessage = "Les nouveaux mots de passe ne correspondent pas";
      return;
    }
    // Active l'état de chargement
    // this.isLoading = true;
    // Prépare la requête
    const request = {
      password: currentPassword,
      newPassword: newPassword
    };
    // Appel au service
    this.profilService.updatePassword(this.userId, request).subscribe({
      next: response => {
        // Si le serveur retourne du texte, le traiter ici
        this.successMessage = response.includes('succès') ? response : "Mot de passe modifié !";
        this.isPasswordFormVisible = false;
        this.passwordForm.reset();
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: error => {
        // Gérer les erreurs de parsing ou autres
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      }
      // complete: () => {
      //   this.isLoading = false;
      // }
    });
  }
  getUserInfo() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.userName = user.nomComplet;
        this.personalCode = user.personalCode;
        this.nomEntreprise = user.nomEntreprise;
        this.email = user.email;
        this.phone = user.phone;
        this.photo = user.photo ? `${this.imgUrl}${user.photo}` : '';
        this.qrCodeUrl = user.qrCodeUrl ? `${this.imgUrl}${user.qrCodeUrl}` : '';
        this.roleType = user.roleType;
        this.pays = user.pays;
        this.nomBoutique = user.boutiques?.length ? user.boutiques[0].nomBoutique : 'Aucune boutique';
        this.flagPays = this.paysFlags[this.pays] || '';
        this.boutiques = user.boutiques || [];
        console.log("Liste des boutiques:", this.boutiques);
        console.log("Infos utilisateur récupérées :", user);
        console.log("QR Code URL construite :", this.qrCodeUrl);
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  onBoutiqueSelect() {
    const boutiqueId = this.nomBoutiqueForm.get('selectedBoutique')?.value;
    const selectedBoutique = this.boutiques.find(b => b.id === boutiqueId);
    if (selectedBoutique) {
      this.nomBoutiqueForm.patchValue({
        nomBoutique: selectedBoutique.nomBoutique,
        adresse: selectedBoutique.adresse
      });
    }
  }
  // onSubmitNomBoutique(): void {
  //   this.errorMessage = null;
  //   this.successMessage = null;
  //   if (this.nomBoutiqueForm.invalid) {
  //     this.errorMessage = "Veuillez remplir tous les champs correctement";
  //     return;
  //   }
  //   const boutiqueId = this.nomBoutiqueForm.value.selectedBoutique;
  //   const nomBoutique = this.nomBoutiqueForm.value.nomBoutique;
  //   const adresse = this.nomBoutiqueForm.value.adresse;
  //   this.usersService.updateBoutique(boutiqueId, { nomBoutique, adresse }).subscribe({
  //     next: (response) => {
  //       // Mettre à jour le tableau local
  //       const index = this.boutiques.findIndex(b => b.id === boutiqueId);
  //       if (index > -1) {
  //         this.boutiques[index] = { 
  //           ...this.boutiques[index], 
  //           nomBoutique: nomBoutique,
  //           adresse: adresse 
  //         };
  //       }
  //       this.successMessage = "Boutique mise à jour avec succès !";
  //       this.isNomBoutiqueFormVisible = false;
  //       this.nomBoutiqueForm.reset();
  //       setTimeout(() => this.successMessage = null, 10000);
  //     },
  //     error: (error) => {
  //       if (error instanceof HttpErrorResponse) {
  //         this.errorMessage = error.error.message || error.error || "Erreur inconnue";
  //       }
  //       setTimeout(() => this.errorMessage = null, 10000);
  //     },
  //   });
  // }
  // private refreshBoutiques(): void {
  //   this.usersService.getUserInfo().subscribe({
  //     next: (user) => {
  //       this.boutiques = user.boutiques || [];
  //     },
  //     error: (err) => {
  //       console.error("Erreur rafraîchissement boutiques:", err);
  //     }
  //   });
  // }
  updateBoutique(id, nomBoutique, adresse) {
    const updates = {
      nomBoutique,
      adresse
    };
    this.usersService.updateBoutique(id, updates).subscribe(response => {
      if (response.message) {
        console.log(response.message);
      } else if (response.error) {
        console.error(response.error);
      }
    }, error => {
      console.error('Erreur lors de la mise à jour de la boutique:', error);
    });
  }
  onSubmitUpdateUser() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.nomCompletForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
    const {
      nomComplet,
      phone,
      password
    } = this.nomCompletForm.value;
    // Création de l'objet DTO à envoyer
    const userData = {
      nomComplet,
      phone,
      password
    };
    // Construction du FormData
    const formData = new FormData();
    formData.append('user', JSON.stringify(userData)); // 'user' correspond à @RequestPart("user") côté Spring
    if (this.imageFile) {
      formData.append('photo', this.imageFile); // 'photo' correspond à @RequestPart("photo") côté Spring
    }
    this.usersService.updateUser(this.userId, formData).subscribe({
      next: response => {
        console.log("✅ Réponse backend :", response);
        this.successMessage = typeof response === 'string' ? response : response?.message || "Profil mis à jour avec succès !";
        this.nomCompletForm.reset();
        this.isUserFormVisible = false;
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: error => {
        console.error("❌ Erreur update :", error);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      }
    });
  }
  testImageCompression(file) {
    var _this = this;
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
        const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_2__["default"])(file, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
        if (!compressedFile.type.startsWith('image/')) {
          console.error('Le fichier compressé n\'est pas un format d\'image valide.');
          _this.errorMessage = 'Erreur de compression : Le fichier n\'est pas une image.';
          return null;
        }
        return compressedFile;
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
        return null;
      }
    })();
  }
  onFileSelected(event) {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        try {
          const compressedFile = yield _this2.testImageCompression(file);
          if (!compressedFile) {
            console.error("Compression échouée ou image invalide.");
            return;
          }
          _this2.imageFile = compressedFile;
          const reader = new FileReader();
          reader.onload = e => {
            const base64 = e.target.result;
            _this2.photo = base64;
            localStorage.setItem('photo', base64);
            window.dispatchEvent(new Event('storage-photo-update'));
          };
          reader.readAsDataURL(compressedFile);
          const formData = new FormData();
          // Récupérer l'extension du fichier d'origine
          const extension = file.name.split('.').pop();
          const nomFichierFinal = `photo_profil_${Date.now()}.${extension}`;
          // Ajouter le fichier avec un nom explicite
          formData.append('photo', _this2.imageFile, nomFichierFinal);
          _this2.usersService.updateUser(_this2.userId, formData).subscribe({
            next: response => {
              console.log("✅ Image mise à jour :", response);
              if (response.photo) {
                _this2.photo = response.photo;
              }
              _this2.successMessage = "Photo de profil mise à jour avec succès !";
              setTimeout(() => _this2.successMessage = null, 5000);
            },
            error: error => {
              console.error("❌ Erreur mise à jour :", error);
              _this2.errorMessage = "Échec de la mise à jour de la photo.";
              setTimeout(() => _this2.errorMessage = null, 5000);
            }
          });
        } catch (error) {
          console.error("Erreur lors de la compression ou de l'envoi :", error);
          _this2.errorMessage = "Erreur lors de la compression ou de l'envoi.";
          setTimeout(() => _this2.errorMessage = null, 5000);
        }
      }
    })();
  }
  changerPhoto(event) {
    event.stopPropagation();
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  }
  visualiserPhoto(event) {
    const target = event.target;
    if (target.classList.contains('camera-icon')) return;
    this.isModalOpen = true;
  }
  fermerModal() {
    this.isModalOpen = false;
  }
  toggleCodeVisibility() {
    this.showCode = !this.showCode;
  }
  onDocumentClick(event) {
    const target = event.target;
    const clickedInside = target.closest('.profile-img-wrapper, .dropdown-menu');
    if (!clickedInside) {
      this.menuOuvert = false;
    }
  }
  toggleMenu(event) {
    event.stopPropagation();
    this.menuOuvert = !this.menuOuvert;
  }
  supprimerPhoto(event) {
    event.stopPropagation();
    this.afficherConfirmation = true;
  }
  confirmerSuppression() {
    const formData = new FormData();
    formData.append('deletePhoto', 'true');
    formData.append('user', JSON.stringify({}));
    this.usersService.updateUser(this.userId, formData).subscribe({
      next: () => {
        this.photo = null;
        localStorage.removeItem('photo');
        window.dispatchEvent(new Event('storage-photo-update'));
        this.afficherConfirmation = false;
      },
      error: err => {
        console.error('Erreur suppression photo', err);
        this.afficherConfirmation = false;
      }
    });
  }
  annulerSuppression() {
    this.afficherConfirmation = false;
  }
  ouvrirCamera(event) {
    event.stopPropagation();
    this.cameraActive = true;
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream => {
      this.videoElement.nativeElement.srcObject = stream;
    }).catch(err => {
      console.error("Erreur ouverture caméra :", err);
    });
  }
  fermerCamera() {
    this.cameraActive = false;
    const stream = this.videoElement.nativeElement.srcObject;
    const tracks = stream?.getTracks();
    tracks?.forEach(track => track.stop());
    this.videoElement.nativeElement.srcObject = null;
  }
  prendrePhoto() {
    var _this3 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const video = _this3.videoElement.nativeElement;
      const canvas = _this3.canvasElement.nativeElement;
      const width = video.videoWidth;
      const height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, width, height);
      // Récupère l'image en base64
      const base64DataUrl = canvas.toDataURL('image/jpeg');
      // Convertir base64 → Blob → File
      const blob = yield (yield fetch(base64DataUrl)).blob();
      const file = new File([blob], `photo_profil_${Date.now()}.jpg`, {
        type: 'image/jpeg'
      });
      try {
        const compressedFile = yield _this3.testImageCompression(file);
        if (!compressedFile) {
          console.error("Compression échouée ou image invalide.");
          return;
        }
        _this3.imageFile = compressedFile;
        // Affichage dans le profil (base64 preview)
        const reader = new FileReader();
        reader.onload = e => {
          const base64 = e.target.result;
          _this3.photo = base64;
          localStorage.setItem('photo', base64);
          window.dispatchEvent(new Event('storage-photo-update'));
        };
        reader.readAsDataURL(compressedFile);
        const formData = new FormData();
        formData.append('photo', _this3.imageFile, _this3.imageFile.name);
        _this3.usersService.updateUser(_this3.userId, formData).subscribe({
          next: response => {
            console.log("✅ Image mise à jour depuis caméra :", response);
            _this3.successMessage = "Photo prise et mise à jour avec succès !";
            _this3.fermerCamera();
            setTimeout(() => _this3.successMessage = null, 5000);
          },
          error: error => {
            console.error("❌ Erreur de mise à jour :", error);
            _this3.errorMessage = "Erreur lors de l'envoi de la photo.";
            setTimeout(() => _this3.errorMessage = null, 5000);
          }
        });
      } catch (error) {
        console.error("Erreur lors du traitement de la photo :", error);
        _this3.errorMessage = "Erreur lors de la prise ou de l'envoi.";
        setTimeout(() => _this3.errorMessage = null, 5000);
      }
    })();
  }
  toggleExpand(event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }
  onClick() {
    if (this.isExpanded) {
      this.isExpanded = false;
    }
  }
  static {
    this.ɵfac = function ProfilComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_profil_service__WEBPACK_IMPORTED_MODULE_3__.ProfilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProfilComponent,
      selectors: [["app-profil"]],
      viewQuery: function ProfilComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function ProfilComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_click_HostBindingHandler() {
            return ctx.onClick();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
        }
      },
      decls: 83,
      vars: 26,
      consts: [["video", ""], ["canvas", ""], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], [1, "tab-content"], [1, "container_compte_profil"], [1, "champ_grid_double"], [1, "setting_profil", "cadre_photo"], [1, "content_setting_profil", "profile"], [1, "tilte_profil"], [1, "profile-img-wrapper"], ["alt", "Photo de profil", 1, "profile-img", 3, "error", "click", "src"], [1, "menu-button", 3, "click"], [1, "in"], ["aria-hidden", "true", 1, "far", "fa-image"], ["class", "dropdown-menu", 4, "ngIf"], ["type", "file", "id", "fileInput", "accept", "image/*", "hidden", "", 3, "change"], ["class", "confirmation-modal-aver", 4, "ngIf"], ["class", "camera-modal", 4, "ngIf"], ["class", "photo-modal", 3, "click", 4, "ngIf"], ["alt", "qrCodeUrl code", 1, "qrcode-img", 3, "click", "src"], [1, "profil_email"], [2, "color", "#0672E4", "letter-spacing", "0.60px"], [1, "stats"], [1, "showCode", 3, "ngClass"], ["aria-label", "Afficher/Masquer le code", 1, "btnC", 2, "background", "none", "border", "none", "cursor", "pointer", 3, "click"], [1, "fa", 3, "ngClass"], [1, "setting_profil", "cadre_password"], [1, "info_titre_input"], [1, "champ_input"], ["id", "company", "disabled", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["for", "company", 1, "label", "labelColor"], ["id", "email", "disabled", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["for", "email", 1, "label", "labelColor"], [1, "champ_grid"], ["id", "city", "disabled", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["for", "city", 1, "label", "labelColor"], ["id", "lastName", "disabled", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["for", "lastName", 1, "label", "labelColor"], [1, "form-row", 2, "margin-top", "20px"], ["for", "boutiques"], ["id", "boutiques", 1, "boutiques-list"], ["class", "boutique-tag", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "info_personnel"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "dropdown-menu"], [3, "click"], [1, "fa", "fa-eye", "icon-in-menu"], [1, "fa", "fa-camera", "icon-in-menu"], [1, "fa", "fa-folder-open", "icon-in-menu"], [1, "danger-btn", 3, "click"], [1, "fas", "fa-trash", "icon-in-menu"], [1, "confirmation-modal-aver"], [1, "modal-content-aver"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-aver"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"], [1, "btn-cancel", 2, "font-size", "12px", 3, "click"], [1, "camera-modal"], [1, "camera-content"], ["autoplay", ""], [1, "close-camera-btn", 3, "click"], [1, "fas", "fa-times"], [1, "capture-btn-wrapper"], [1, "capture-btn", "pulse", 3, "click"], [1, "fas", "fa-camera"], ["hidden", ""], [1, "photo-modal", 3, "click"], [1, "photo-modal-content", 3, "click"], [3, "error", "src"], [1, "fermer-btn", 3, "click"], [1, "boutique-tag"]],
      template: function ProfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfilComponent_div_1_Template, 2, 1, "div", 3)(2, ProfilComponent_div_2_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Page profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Changez votre photo de profil \u00E0 partir d'ici");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ProfilComponent_Template_img_error_14_listener() {
            return ctx.photo = "assets/img/profil.png";
          })("click", function ProfilComponent_Template_img_click_14_listener($event) {
            return ctx.visualiserPhoto($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_Template_div_click_15_listener($event) {
            return ctx.toggleMenu($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "changer la ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " photo de ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProfilComponent_div_24_Template, 13, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProfilComponent_Template_input_change_25_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ProfilComponent_div_26_Template, 11, 0, "div", 18)(27, ProfilComponent_div_27_Template, 11, 0, "div", 19)(28, ProfilComponent_div_28_Template, 5, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div")(30, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_Template_img_click_30_listener($event) {
            return ctx.toggleExpand($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h5", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 24)(38, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Code Personnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilComponent_Template_button_click_43_listener() {
            return ctx.toggleCodeVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 28)(46, "div", 10)(47, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Information personnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Pour changer les informations vous pouvez ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "le faire dans param\u00E8tre");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 29)(54, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Votre email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Votre email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 35)(63, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Num\u00E9ro t\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 40)(72, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Boutiques");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, ProfilComponent_span_75_Template, 2, 1, "span", 43)(76, ProfilComponent_span_76_Template, 2, 0, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 45)(78, "div", 10)(79, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "D\u00E9tails personnels");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Pour modifier vos informations personnelles, modifiez-les et enregistrez-les ici");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.photo || "assets/img/profil.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.menuOuvert);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.afficherConfirmation);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cameraActive);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isModalOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded", ctx.isExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.qrCodeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.roleType);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c2, !ctx.showCode));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.personalCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.showCode ? "fa-eye-slash" : "fa-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.nomEntreprise);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("value", "", ctx.pays, " ", ctx.flagPays, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.phone || "Aucun num\u00E9ro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.boutiques);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.boutiques.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
      styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: #f0f0f0;\n  padding: 20px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n\n.profile[_ngcontent-%COMP%]   .profil_email[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  margin: 20px auto;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.camera-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  cursor: pointer;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.47);\n  border-radius: 4px;\n  opacity: 0;\n  font-size: 50%;\n  height: 100%;\n  width: 100%;\n}\n\n.in[_ngcontent-%COMP%] {\n  font-size: 12px;\n  top: 9%;\n  position: relative;\n  font-weight: 400;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px;\n}\n\n.in[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n\n\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover   .menu-button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 21%;\n  left: 31%;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 8px 0;\n  min-width: 150px;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_dropdownFade 0.2s ease-out;\n  font-family: \"Segoe UI\", sans-serif;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: #333;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n  border-radius: 6px;\n  margin: 2px 8px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .danger-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 195, 193, 0.5647058824);\n  color: #ea3b3b;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .danger-btn[_ngcontent-%COMP%]:hover   .icon-in-menu[_ngcontent-%COMP%] {\n  color: #ea3b3b !important;\n}\n\n.icon-in-menu[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #888;\n  transition: color 0.2s ease;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .icon-in-menu[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n@keyframes _ngcontent-%COMP%_dropdownFade {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.photo-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeInBackdrop 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInBackdrop {\n  from {\n    background: rgba(0, 0, 0, 0);\n  }\n  to {\n    background: rgba(0, 0, 0, 0.7);\n  }\n}\n.photo-modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90%;\n  max-height: 90%;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  animation: modalFadeIn 0.4s ease-out;\n  transform-origin: center center;\n}\n\n.photo-modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 50vh;\n  border-radius: 10px;\n}\n\n.fermer-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #ff4444;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  font-size: 15px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.fermer-btn[_ngcontent-%COMP%]:hover {\n  background: #cc0000;\n}\n\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n.team[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 5px 10px;\n  border-radius: 15px;\n}\n\n.status.offline[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n.status.available[_ngcontent-%COMP%] {\n  background-color: #a8e063;\n}\n\n.status.busy[_ngcontent-%COMP%] {\n  background-color: #ff6347;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 20px 20px 20px 40px;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 0 4px 4px 0;\n  background-color: #f0f0f0;\n  cursor: pointer;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.form-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.container_form_profil[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-column: span 2/span 2;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-column: span 2/span 2;\n  grid-column-start: 3;\n}\n\n.div4[_ngcontent-%COMP%] {\n  grid-column: span 2/span 2;\n  grid-row-start: 2;\n}\n\n.div5[_ngcontent-%COMP%] {\n  grid-column: span 2/span 2;\n  grid-column-start: 3;\n  grid-row-start: 2;\n}\n\n.container_parametre[_ngcontent-%COMP%] {\n  margin: 40px 10px;\n}\n\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n}\n\n.cadre_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cadre[_ngcontent-%COMP%]:hover {\n  transition: all 0.1s;\n  box-shadow: rgba(0, 0, 0, 0.113) 0px 1px 2px 0px;\n}\n\n.title_cadre[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  letter-spacing: 0.6px;\n}\n\n.icon_cadre[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.icon_cadre[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  background-color: rgba(6, 113, 228, 0.2039215686);\n  color: #000000;\n  border: none;\n  font-size: 14px;\n}\n\n.icon_cadre[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(6, 113, 228, 0.3647058824);\n  transition: all 0.5;\n}\n\n.boutiques-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.boutique-tag[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 4px 12px;\n  border-radius: 16px;\n  border: 1px solid #ddd;\n  font-size: 0.9em;\n  transition: all 0.3s ease;\n}\n\n.boutique-tag-updated[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #2196f3;\n  transform: scale(1.05);\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%]   .modal-content-aver[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n  animation: _ngcontent-%COMP%_fadeInScale 0.25s ease-in-out;\n}\n\n.modal-actions-aver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n  gap: 25px;\n}\n\n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 0;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #1daa61;\n  color: #fff;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #4ff09d;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #333;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.camera-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1100;\n}\n\n.camera-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-camera-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  color: red;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 16px;\n  z-index: 1001;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  transition: background 0.3s ease;\n}\n\n.close-camera-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 0, 0, 0.3);\n}\n\n.capture-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  font-size: 22px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.capture-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.6);\n  animation: _ngcontent-%COMP%_pulseAnim 1s infinite;\n}\n\n\n\n.pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseAnim 1.5s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulseAnim {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.6), 0 0 0 0 rgba(0, 123, 255, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0.2), 0 0 0 20px rgba(0, 123, 255, 0);\n  }\n  80% {\n    box-shadow: 0 0 0 15px rgba(0, 123, 255, 0), 0 0 0 30px rgba(0, 123, 255, 0);\n  }\n  90% {\n    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0), 0 0 0 0 rgba(0, 123, 255, 0);\n  }\n}\n.qrcode-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10%;\n  max-width: 100px;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 10px;\n  top: 62%;\n  left: 32%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n}\n\n.qrcode-img[_ngcontent-%COMP%]:hover {\n  transform: translateY(-50%) scale(1.05);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;\n}\n\n.qrcode-img.expanded[_ngcontent-%COMP%] {\n  transform: translateY(-70%) scale(2);\n  z-index: 1000;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;\n}\n\n.blurred[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: red;\n  filter: blur(6px);\n}\n\n.showCode[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: red;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.section_title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n\n\n.custom-tabs[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  margin: 0;\n  \n\n  \n\n  \n\n}\n.custom-tabs[_ngcontent-%COMP%]   .mat-tab-label-active[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: 2px solid #0672E4;\n  border-radius: 4px 4px 0 0;\n}\n.custom-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.custom-tabs[_ngcontent-%COMP%]     .mat-ink-bar {\n  background-color: #0672E4;\n}\n\n.content_setting_facture[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n\n.facture_model[_ngcontent-%COMP%] {\n  height: 64%;\n  background-color: #ffffff;\n  border: 1px solid #b9b9b9;\n  position: relative;\n}\n\n.champs_setting_facture[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: #ffffff;\n  border-radius: 10px;\n  border: 1px solid rgba(185, 185, 185, 0.337254902);\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.header_apercu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.logo_entreprise_preview[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n}\n\n.entete_entreprise[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n\n.logo_entreprise[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.logo_entreprise_preview[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.logo_entreprise_preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.content_entete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 6px;\n  letter-spacing: 0.5px;\n}\n\n.para3[_ngcontent-%COMP%] {\n  font-size: 6px;\n}\n\n.content_entete[_ngcontent-%COMP%]   .para1[_ngcontent-%COMP%], \n.content_entete[_ngcontent-%COMP%]   .para2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  color: #0672E4 !important;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  opacity: 1;\n}\n\n.titre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-decoration: underline;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  text-align: center;\n  margin: 8px;\n}\n\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 5%;\n  font-size: 6px;\n  margin-bottom: 0;\n}\n\n.droit[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 0px;\n  margin-left: 5px;\n}\n\n.droit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.droit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 8px;\n}\n\n.droit_preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object_preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.droit_preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object_preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 7px 5px 0;\n  font-size: 7px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 0px 5px;\n  text-align: center;\n  font-size: 6;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-size: 8px !important;\n}\n\ntd.table_td_1[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\ntd.table_td[_ngcontent-%COMP%] {\n  border-right: none;\n  border-top: none;\n  border-left: none;\n}\n\n.table_td_descripton[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd.td_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.contenu_bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 6px;\n  margin-left: 5px;\n}\n\n.cachet_container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cachet[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 5px;\n}\n\n.cachet[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 7px;\n}\n\n.name_directeur[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8px;\n}\n\n.cachet_preview[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50px;\n  right: 10px;\n}\n\n.cachet_preview[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n}\n\n.name_directeur_preview[_ngcontent-%COMP%] {\n  position: relative;\n  top: 40px;\n}\n\na[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  color: #0056b3;\n  transform: scale(1.1);\n  transition: 0.2s ease;\n}\n\n.container_footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 2px;\n  line-height: 9px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 6px;\n}\n\n.titre_champ[_ngcontent-%COMP%] {\n  margin: 5px 10px 5px 0;\n}\n\n.titre_champ[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  outline: none;\n  border-bottom: 1px solid rgb(88, 85, 85);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 12px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 15px;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n\n\n.custum-file-upload[_ngcontent-%COMP%] {\n  height: 58px;\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border: 2px dashed #000000;\n  background-color: transparent;\n  padding: 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 48px 35px -48px #e8e8e8;\n}\n\n.custum-file-upload[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.custum-file-upload[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 80px;\n  fill: #e8e8e8;\n}\n\n.custum-file-upload[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.custum-file-upload[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0672E4;\n}\n\n.custum-file-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.title_panel[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n\n.content_edit_facture[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  position: relative;\n}\n\n.champ_input[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #0672E4;\n  color: #ffffff;\n  font-size: 15px;\n  padding: 5px 20px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.cadre_setting[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.titre_autre[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.titre_autre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px 5px;\n  margin: 0;\n}\n\n.eye_container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  top: 34px;\n  transform: translateY(-50%);\n}\n\n.eye_ferme[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.eye_ouvre[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.eye_ferme[_ngcontent-%COMP%], .eye_ouvre[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 9999999999;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.red-icon[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n.statut_boutique[_ngcontent-%COMP%] {\n  background-color: #008000;\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 10px;\n}\n\n\n\n.preview-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.preview-content[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease-out;\n  margin-top: 5%;\n}\n.preview-content[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n  z-index: 10;\n}\n.preview-content[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\n.facture_model_preview[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background-color: white;\n  width: 130mm;\n  min-height: 170mm;\n  position: relative;\n}\n.facture_model_preview[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100% !important;\n  box-shadow: none !important;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.para_preview[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n}\n\n.em_footer[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin: 10px 0px 0 5px;\n  font-size: 9px;\n  width: 98%;\n}\n\n.th[_ngcontent-%COMP%], .td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 7px;\n  text-align: center;\n  font-size: 6;\n}\n\n.th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-size: 8px !important;\n}\n\n.content_entete_preview[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.preview-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -27px;\n  color: #fff;\n  top: -3px;\n  cursor: pointer;\n}\n\n.preview-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.preview-close[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n  transition: all 0.5s;\n}\n\n.voir_apercu[_ngcontent-%COMP%] {\n  font-size: 12px;\n  cursor: pointer;\n  margin: 5px 0px;\n}\n\n.champ_grid_double[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 15px;\n}\n\n.img_profil[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n}\n\n.img_profil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.img_profil[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.setting_profil[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.btn_changer_profil[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.btn_changer_profil[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 20px;\n  padding: 8px 20px;\n  cursor: pointer;\n}\n\n.info_capacity_profil[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tilte_profil[_ngcontent-%COMP%] {\n  margin: 20px 20px 0;\n  text-align: left;\n}\n\n.tilte_profil[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 5px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.tilte_profil[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin-bottom: 0;\n}\n\n.btn_save[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 10px;\n}\n\n.btn_save[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 28px;\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 20px;\n}\n\n.btn_save[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #0263cb;\n  transition: all 0.5;\n}\n\n.info_capacity_profil[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.info_capacity_profil[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 22px 0;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #D5E6DE;\n  border: 1px solid #ACCEBC;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5jb21wb25lbnQuc2NzcyIsIl9wcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QURDSjs7QUNFRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QURDSjs7QUNHRTtFQUNFLGtCQUFBO0FEQUo7O0FDR0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QURBSjs7QUNHRTtFQUNFLGVBQUE7QURBSjs7QUNLQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QURGRjs7QUNLQTtFQUNFLHNCQUFBO0FERkY7O0FDS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURGRjs7QUNLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QURGRjs7QUNLQTtFQUNFLFVBQUE7QURGRjs7QUNLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QURGRjs7QUNLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FERko7O0FDSUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBRERGOztBQ0lBO0VBQ0UsZUFBQTtFQUNB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RUFvZ0JGO0VBbGdCQTtJQUNFLFVBQUE7SUFDQSwwQkFBQSxFQUFBLDJEQUFBO0VBb2dCRjtBQUNGIiwiZmlsZSI6InByb2ZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hY2NvdW50LXNldHRpbmdzIHtcbi8vIH1cbkBpbXBvcnQgJy4vcHJvZmlsZSc7XG5cbi5ibHVycmVke1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZWQ7XG4gIGZpbHRlcjogYmx1cig2cHgpO1xufVxuLnNob3dDb2Rle1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8vIGNhZHJlIGluZm9ybWF0aW9uXG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi8qIGNvbXBvbmVudC5zY3NzICovXG4uY3VzdG9tLXRhYnMge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8vIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMDtcblxuICAvKiBTdHlsZSBkZSBsJ29uZ2xldCBhY3RpZiAqL1xuICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgfVxuXG4gIC8qIFN0eWxlIGR1IGNvbnRlbnUgKi9cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAvLyBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC8qIENvdWxldXIgZGUgbCdpbmstYmFyIChzb3VsaWduw6kpICovXG4gIDo6bmctZGVlcCAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIH1cblxufVxuXG4uY29udGVudF9zZXR0aW5nX2ZhY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG59XG5cbi5mYWN0dXJlX21vZGVsIHtcbiAgLy8gd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA2NCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8vIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjliOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGFtcHNfc2V0dGluZ19mYWN0dXJlIHtcbiAgd2lkdGg6IDgwJTtcbiAgLy8gaGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliOWI5NTY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbn1cblxuLy8gRmFjdHVyZSBjc3MgXG4uaGVhZGVyX2FwZXJjdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nb19lbnRyZXByaXNlX3ByZXZpZXcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBlbnRldGVfZW50cmVwcmlzZVxuXG4uZW50ZXRlX2VudHJlcHJpc2Uge1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9nb19lbnRyZXByaXNlX3ByZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZV9wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb250ZW50X2VudGV0ZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbn1cblxuLnBhcmEzIHtcbiAgZm9udC1zaXplOiA2cHg7XG59XG5cbi5jb250ZW50X2VudGV0ZSAucGFyYTEsXG4uY29udGVudF9lbnRldGUgLnBhcmEyXG57XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaHIge1xuICBtYXJnaW46IDJweCAwO1xuICBjb2xvcjogIzA2NzJFNCFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICBmb250LXNpemU6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5kYXRlIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5kcm9pdF9wcmV2aWV3IGg0LFxuLm9iamVjdF9wcmV2aWV3IGg0IFxue1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kcm9pdF9wcmV2aWV3IHAsXG4ub2JqZWN0X3ByZXZpZXcgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGFibGUge1xuICAvLyB3aWR0aDogOTAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDdweCA1cHggMDtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtc2l6ZTogOHB4IWltcG9ydGFudDtcbn1cblxuXG50ZC50YWJsZV90ZF8xIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ZC50YWJsZV90ZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZV90ZF9kZXNjcmlwdG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW51X2JvdHRvbSBwIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jYWNoZXRfY29udGFpbmVyIHtcbiAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5jYWNoZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmNhY2hldCBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbi5uYW1lX2RpcmVjdGV1ciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5jYWNoZXRfcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmNhY2hldF9wcmV2aWV3IGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5uYW1lX2RpcmVjdGV1cl9wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG59XG5cbmE6aG92ZXIgaW1nIHtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uY29udGFpbmVyX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGJvdHRvbTogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMnB4O1xuICBsaW5lLWhlaWdodDogOXB4O1xufVxuXG4uZm9vdGVyIHAge1xuICAvLyBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXIgZGl2IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vdGVyIHAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDhweDtcbn1cblxuLmZvb3RlciBlbSB7XG4gICAgZm9udC1zaXplOiA2cHg7XG59XG5cbi50aXRyZV9jaGFtcCB7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDA7XG59XG5cbi50aXRyZV9jaGFtcCBoNiB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5cbi5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWluLXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDg4LCA4NSwgODUpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cblxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBjc2Vtc3plcHAgKi8gXG4uY3VzdHVtLWZpbGUtdXBsb2FkIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0OHB4IDM1cHggLTQ4cHggI2U4ZThlODtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdHVtLWZpbGUtdXBsb2FkIC5pY29uIHN2ZyB7XG4gIGhlaWdodDogODBweDtcbiAgZmlsbDogI2U4ZThlODtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdHVtLWZpbGUtdXBsb2FkIC50ZXh0IHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZV9wYW5lbCB7XG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRfZWRpdF9mYWN0dXJlIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGFtcF9pbnB1dCAuYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uY2FkcmVfc2V0dGluZyB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4udGl0cmVfYXV0cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdHJlX2F1dHJlIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi8vIC5jb250ZW50X21vZGVsX2ZhY3RldXIge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBnYXA6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi8vIC5tb2RlbDEge1xuLy8gICB3aWR0aDogMjMwcHg7XG4vLyAgIGhlaWdodDogNDB2aDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gSUNPTiBFWUUgXG4uZXllX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgdG9wOiAzNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5leWVfZmVybWUgaSwgXG4uZXllX291dnJlIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gLmV5ZV9jb250YWluZXIge1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDEwcHg7XG4vLyAgIHRvcDogNTUlO1xuLy8gfVxuXG4uZXllX2Zlcm1lLCAuZXllX291dnJlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5yZWQtaWNvbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4uc3RhdHV0X2JvdXRpcXVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwIGQnYXBlcsOndSAqL1xuLnByZXZpZXctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICAvLyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxuLnByZXZpZXctY29udGVudCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8vIHdpZHRoOiA4MCU7XG4gIC8vIG1heC13aWR0aDogOTAwcHg7XG4gIC8vIG1heC1oZWlnaHQ6IDkwdmg7XG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDAuM3MgZWFzZS1vdXQ7XG4gIC8vIHdpZHRoOiAxMjBtbTtcbiAgLy8gbWluLWhlaWdodDogMTUwbW07XG4gIG1hcmdpbi10b3A6IDUlO1xuICBcbiAgLnByZXZpZXctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgLy8gdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cblxuLmZhY3R1cmVfbW9kZWxfcHJldmlldyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLy8gcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMzBtbTtcbiAgbWluLWhlaWdodDogMTcwbW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIC8vIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICB9XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucGFyYV9wcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLmVtX2Zvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRhYmxlIHtcbiAgLy8gd2lkdGg6IDkwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwIDVweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHdpZHRoOiA5OCU7XG59XG5cbi50aCwgLnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNjtcbn1cblxuLnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgZm9udC1zaXplOiA4cHghaW1wb3J0YW50O1xufVxuXG4uY29udGVudF9lbnRldGVfcHJldmlldyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnByZXZpZXctY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogLTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJldmlldy1jbG9zZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJldmlldy1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4udm9pcl9hcGVyY3Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFNUWUxFIFBPVVIgQ09NUFRFIFxuXG4uY2hhbXBfZ3JpZF9kb3VibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDE1cHg7XG59XG5cbi8vIC5jYWRyZV9waG90byB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi5pbWdfcHJvZmlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pbWdfcHJvZmlsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWdfcHJvZmlsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLnNldHRpbmdfcHJvZmlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYnRuX2NoYW5nZXJfcHJvZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG5fY2hhbmdlcl9wcm9maWwgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbmZvX2NhcGFjaXR5X3Byb2ZpbCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGlsdGVfcHJvZmlsIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRpbHRlX3Byb2ZpbCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41MHB4O1xufVxuXG4udGlsdGVfcHJvZmlsIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5idG5fc2F2ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuX3NhdmUgLmJ0biB7XG4gIHBhZGRpbmc6IDVweCAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5mb190aXRyZV9pbnB1dCB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmJ0bl9zYXZlIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI2M2NiO1xuICB0cmFuc2l0aW9uOiBhbGwgLjU7XG59XG5cbi5pbmZvX2NhcGFjaXR5X3Byb2ZpbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbmZvX2NhcGFjaXR5X3Byb2ZpbCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDIycHggMDtcbn1cblxuLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4gLy8gdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENUU2REU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLyogQW5pbWF0aW9uIHBvdXIgZmFpcmUgYXBwYXJhw650cmUgZXQgZGlzcGFyYcOudHJlIGxlIHRvYXN0ICovXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgLyogTGUgdG9hc3QgZGlzcGFyYcOudCBhdmVjIHVuIGzDqWdlciBtb3V2ZW1lbnQgdmVycyBsZSBiYXMgKi9cbiAgfVxufVxuIiwiXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBoZWlnaHQ6IDUwdmg7XG4gIH1cbiAgXG4gIC5wcm9maWxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5wcm9maWxlIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5wcm9maWxlIC5wcm9maWxfZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG5cblxuLnByb2ZpbGUtaW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhbWVyYS1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA5JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW4gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi8qIPCfkYcgQWZmaWNoZSBsZSBib3V0b24gdW5pcXVlbWVudCBhdSBob3ZlciBkdSBwYXJlbnQgKi9cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIC5tZW51LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjElO1xuICBsZWZ0OiAzMSU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBib3gtc2hhZG93OiAwIDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogZHJvcGRvd25GYWRlIDAuMnMgZWFzZS1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xufVxuXG4uZHJvcGRvd24tbWVudSBidXR0b24ge1xuICBhbGw6IHVuc2V0O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAycHggOHB4O1xufVxuXG4uZHJvcGRvd24tbWVudSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG5cblxuLmRyb3Bkb3duLW1lbnUgLmRhbmdlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjM2MxOTA7XG4gIGNvbG9yOiAjZWEzYjNiO1xufVxuXG4uZHJvcGRvd24tbWVudSAuZGFuZ2VyLWJ0bjpob3ZlciAuaWNvbi1pbi1tZW51IHtcbiAgY29sb3I6ICNlYTNiM2IgIWltcG9ydGFudDtcbn1cblxuXG5cbi5pY29uLWluLW1lbnUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG59XG5cbi5kcm9wZG93bi1tZW51IGJ1dHRvbjpob3ZlciAuaWNvbi1pbi1tZW51IHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbkBrZXlmcmFtZXMgZHJvcGRvd25GYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cblxuLnBob3RvLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGFuaW1hdGlvbjogZmFkZUluQmFja2Ryb3AgMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5CYWNrZHJvcCB7XG4gIGZyb20geyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApOyB9XG4gIHRvICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7IH1cbn1cblxuLnBob3RvLW1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMC40cyBlYXNlLW91dDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnBob3RvLW1vZGFsLWNvbnRlbnQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZmVybWVyLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5mZXJtZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjMDAwMDtcbn1cblxuXG5cbiAgXG4gIC5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAudGVhbSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBcbiAgLm1lbWJlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5tZW1iZXIgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuc3RhdHVzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuICAuc3RhdHVzLm9mZmxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC5zdGF0dXMuYXZhaWxhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThlMDYzO1xuICB9XG4gIFxuICAuc3RhdHVzLmJ1c3kge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuICB9XG4gIFxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5zZWFyY2gtYmFyIGlucHV0IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmZvcm0tcm93IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyBpbnB1dCwgLmZvcm0tcm93IHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuXG4uY29udGFpbmVyX2Zvcm1fcHJvZmlsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDIwcHhcbn1cbiAgICBcbi5kaXYxIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyIC8gc3BhbiAyO1xufVxuXG4uZGl2MyB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbn1cblxuLmRpdjQge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBzcGFuIDI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG59XG5cbi5kaXY1IHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyIC8gc3BhbiAyO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xufVxuXG4vLyAuZGl2NyB7XG4vLyAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcbi8vICAgICBncmlkLXJvdy1zdGFydDogMztcbi8vIH1cblxuLy8gLmRpdjgge1xuLy8gICAgIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBzcGFuIDI7XG4vLyAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4vLyAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4vLyB9XG5cbi8vLy8vLy8vLyBQQVJBTUVUUkUgREUgQ09NUFRFXG4vLy8vL1xuXG4uY29udGFpbmVyX3BhcmFtZXRyZSB7XG4gICAgbWFyZ2luOiA0MHB4IDEwcHg7XG59XG5cbi50aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNhZHJlX2N1cnNvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FkcmU6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMTMpIDBweCAxcHggMnB4IDBweDtcbn1cblxuLnRpdGxlX2NhZHJlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4uaWNvbl9jYWRyZSBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uX2NhZHJlIC5idG4ge1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTQzNDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbl9jYWRyZSAuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0NWQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41O1xufVxuXG4uYm91dGlxdWVzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4uYm91dGlxdWUtdGFnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5ib3V0aXF1ZS10YWctdXBkYXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLy8gaWNpXG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIgLm1vZGFsLWNvbnRlbnQtYXZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBhbmltYXRpb246IGZhZGVJblNjYWxlIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9kYWwtYWN0aW9ucy1hdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZ2FwOiAyNXB4O1xufVxuXG4uYnRuLWNvbmZpcm0sXG4uYnRuLWNhbmNlbCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uYnRuLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhYTYxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmZjA5ZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5TY2FsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cblxuXG4uY2FtZXJhLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDExMDA7XG59XG5cbi5jYW1lcmEtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uY2xvc2UtY2FtZXJhLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xuICBjb2xvcjogcmVkO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi5jbG9zZS1jYW1lcmEtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMyk7XG59XG5cbi5jYXB0dXJlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi5jYXB0dXJlLWJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuNik7XG4gIGFuaW1hdGlvbjogcHVsc2VBbmltIDFzIGluZmluaXRlO1xufVxuXG4vKiBQdWxzZSBhbmltYXRpb24gZm9yIGNhcHR1cmUgYnV0dG9uICovXG4ucHVsc2Uge1xuICBhbmltYXRpb246IHB1bHNlQW5pbSAxLjVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlQW5pbSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTIzLCAyNTUsIDAuNiksXG4gICAgICAgICAgICAgICAgMCAwIDAgMCByZ2JhKDAsIDEyMywgMjU1LCAwLjQpO1xuICB9XG4gIDcwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDAsIDEyMywgMjU1LCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgMCAwIDIwcHggcmdiYSgwLCAxMjMsIDI1NSwgMCk7XG4gIH1cbiAgODAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxNXB4IHJnYmEoMCwgMTIzLCAyNTUsIDApLFxuICAgICAgICAgICAgICAgIDAgMCAwIDMwcHggcmdiYSgwLCAxMjMsIDI1NSwgMCk7XG4gIH1cbiAgOTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMTIzLCAyNTUsIDApLFxuICAgICAgICAgICAgICAgIDAgMCAwIDAgcmdiYSgwLCAxMjMsIDI1NSwgMCk7XG4gIH1cbn1cblxuXG4ucXJjb2RlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRvcDogNjIlO1xuICBsZWZ0OiAzMiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnFyY29kZS1pbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4wNSk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNHB4IDhweDtcbn1cblxuLnFyY29kZS1pbWcuZXhwYW5kZWQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwJSkgc2NhbGUoMik7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNHB4IDhweDtcblxufVxuXG5cblxuXG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hZG1pbi1wYWdlL3Byb2ZpbC9fcHJvZmlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FEQ0o7O0FDRUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FEQ0o7O0FDR0U7RUFDRSxrQkFBQTtBREFKOztBQ0dFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEQUo7O0FDR0U7RUFDRSxlQUFBO0FEQUo7O0FDS0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FERkY7O0FDS0E7RUFDRSxzQkFBQTtBREZGOztBQ0tBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERkY7O0FDS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FERkY7O0FDS0E7RUFDRSxVQUFBO0FERkY7O0FDS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FERkY7O0FDS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREZKOztBQ0lBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtF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LFVBQUE7SUFDQSw0QkFBQTtFQW9nQkY7RUFsZ0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBb2dCRjtFQWxnQkE7SUFDRSxVQUFBO0VBb2dCRjtFQWxnQkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUEsRUFBQSwyREFBQTtFQW9nQkY7QUFDRjtBQUVBLHdyK0NBQXdyK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYWNjb3VudC1zZXR0aW5ncyB7XG4vLyB9XG5AaW1wb3J0ICcuL3Byb2ZpbGUnO1xuXG4uYmx1cnJlZHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmVkO1xuICBmaWx0ZXI6IGJsdXIoNnB4KTtcbn1cbi5zaG93Q29kZXtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmVkO1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4vKiBjb21wb25lbnQuc2NzcyAqL1xuLmN1c3RvbS10YWJzIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvLyBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDA7XG5cbiAgLyogU3R5bGUgZGUgbCdvbmdsZXQgYWN0aWYgKi9cbiAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIH1cblxuICAvKiBTdHlsZSBkdSBjb250ZW51ICovXG4gIC50YWItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLy8gbWluLWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAvKiBDb3VsZXVyIGRlIGwnaW5rLWJhciAoc291bGlnbsODwqkpICovXG4gIDo6bmctZGVlcCAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIH1cblxufVxuXG4uY29udGVudF9zZXR0aW5nX2ZhY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG59XG5cbi5mYWN0dXJlX21vZGVsIHtcbiAgLy8gd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA2NCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8vIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjliOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGFtcHNfc2V0dGluZ19mYWN0dXJlIHtcbiAgd2lkdGg6IDgwJTtcbiAgLy8gaGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliOWI5NTY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbn1cblxuLy8gRmFjdHVyZSBjc3MgXG4uaGVhZGVyX2FwZXJjdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nb19lbnRyZXByaXNlX3ByZXZpZXcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBlbnRldGVfZW50cmVwcmlzZVxuXG4uZW50ZXRlX2VudHJlcHJpc2Uge1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9nb19lbnRyZXByaXNlX3ByZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZV9wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb250ZW50X2VudGV0ZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbn1cblxuLnBhcmEzIHtcbiAgZm9udC1zaXplOiA2cHg7XG59XG5cbi5jb250ZW50X2VudGV0ZSAucGFyYTEsXG4uY29udGVudF9lbnRldGUgLnBhcmEyXG57XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaHIge1xuICBtYXJnaW46IDJweCAwO1xuICBjb2xvcjogIzA2NzJFNCFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICBmb250LXNpemU6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5kYXRlIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5kcm9pdF9wcmV2aWV3IGg0LFxuLm9iamVjdF9wcmV2aWV3IGg0IFxue1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kcm9pdF9wcmV2aWV3IHAsXG4ub2JqZWN0X3ByZXZpZXcgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGFibGUge1xuICAvLyB3aWR0aDogOTAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDdweCA1cHggMDtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtc2l6ZTogOHB4IWltcG9ydGFudDtcbn1cblxuXG50ZC50YWJsZV90ZF8xIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50ZC50YWJsZV90ZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZV90ZF9kZXNjcmlwdG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW51X2JvdHRvbSBwIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jYWNoZXRfY29udGFpbmVyIHtcbiAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5jYWNoZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmNhY2hldCBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbi5uYW1lX2RpcmVjdGV1ciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5jYWNoZXRfcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmNhY2hldF9wcmV2aWV3IGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5uYW1lX2RpcmVjdGV1cl9wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG59XG5cbmE6aG92ZXIgaW1nIHtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uY29udGFpbmVyX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGJvdHRvbTogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMnB4O1xuICBsaW5lLWhlaWdodDogOXB4O1xufVxuXG4uZm9vdGVyIHAge1xuICAvLyBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXIgZGl2IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vdGVyIHAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDhweDtcbn1cblxuLmZvb3RlciBlbSB7XG4gICAgZm9udC1zaXplOiA2cHg7XG59XG5cbi50aXRyZV9jaGFtcCB7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDA7XG59XG5cbi50aXRyZV9jaGFtcCBoNiB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5cbi5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWluLXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDg4LCA4NSwgODUpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cblxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBjc2Vtc3plcHAgKi8gXG4uY3VzdHVtLWZpbGUtdXBsb2FkIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0OHB4IDM1cHggLTQ4cHggI2U4ZThlODtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdHVtLWZpbGUtdXBsb2FkIC5pY29uIHN2ZyB7XG4gIGhlaWdodDogODBweDtcbiAgZmlsbDogI2U4ZThlODtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdHVtLWZpbGUtdXBsb2FkIC50ZXh0IHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLmN1c3R1bS1maWxlLXVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZV9wYW5lbCB7XG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRfZWRpdF9mYWN0dXJlIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGFtcF9pbnB1dCAuYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uY2FkcmVfc2V0dGluZyB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4udGl0cmVfYXV0cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdHJlX2F1dHJlIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi8vIC5jb250ZW50X21vZGVsX2ZhY3RldXIge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBnYXA6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi8vIC5tb2RlbDEge1xuLy8gICB3aWR0aDogMjMwcHg7XG4vLyAgIGhlaWdodDogNDB2aDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gSUNPTiBFWUUgXG4uZXllX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgdG9wOiAzNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5leWVfZmVybWUgaSwgXG4uZXllX291dnJlIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gLmV5ZV9jb250YWluZXIge1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDEwcHg7XG4vLyAgIHRvcDogNTUlO1xuLy8gfVxuXG4uZXllX2Zlcm1lLCAuZXllX291dnJlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5yZWQtaWNvbiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4uc3RhdHV0X2JvdXRpcXVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwIGQnYXBlcsODwqd1ICovXG4ucHJldmlldy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIC8vIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xufVxuXG4ucHJldmlldy1jb250ZW50IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLy8gd2lkdGg6IDgwJTtcbiAgLy8gbWF4LXdpZHRoOiA5MDBweDtcbiAgLy8gbWF4LWhlaWdodDogOTB2aDtcbiAgLy8gb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBhbmltYXRpb246IHNjYWxlSW4gMC4zcyBlYXNlLW91dDtcbiAgLy8gd2lkdGg6IDEyMG1tO1xuICAvLyBtaW4taGVpZ2h0OiAxNTBtbTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIFxuICAucHJldmlldy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcbiAgICAvLyB0b3A6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cblxuXG4uZmFjdHVyZV9tb2RlbF9wcmV2aWV3IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAvLyBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEzMG1tO1xuICBtaW4taGVpZ2h0OiAxNzBtbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgLy8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIH1cbn1cblxuLyogQW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5wYXJhX3ByZXZpZXcge1xuICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xufVxuXG4uZW1fZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udGFibGUge1xuICAvLyB3aWR0aDogOTAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDEwcHggMHB4IDAgNXB4O1xuICBmb250LXNpemU6IDlweDtcbiAgd2lkdGg6IDk4JTtcbn1cblxuLnRoLCAudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2O1xufVxuXG4udGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXNpemU6IDhweCFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50X2VudGV0ZV9wcmV2aWV3IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ucHJldmlldy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiAtM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmV2aWV3LWNsb3NlIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wcmV2aWV3LWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi52b2lyX2FwZXJjdSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gU1RZTEUgUE9VUiBDT01QVEUgXG5cbi5jaGFtcF9ncmlkX2RvdWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMTVweDtcbn1cblxuLy8gLmNhZHJlX3Bob3RvIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLmltZ19wcm9maWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmltZ19wcm9maWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltZ19wcm9maWw6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uc2V0dGluZ19wcm9maWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDA0KSAwcHggMHB4IDBweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG5fY2hhbmdlcl9wcm9maWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bl9jaGFuZ2VyX3Byb2ZpbCAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluZm9fY2FwYWNpdHlfcHJvZmlsIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aWx0ZV9wcm9maWwge1xuICBtYXJnaW46IDIwcHggMjBweCAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGlsdGVfcHJvZmlsIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjUwcHg7XG59XG5cbi50aWx0ZV9wcm9maWwgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJ0bl9zYXZlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG5fc2F2ZSAuYnRuIHtcbiAgcGFkZGluZzogNXB4IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xufVxuXG4uYnRuX3NhdmUgLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjYzY2I7XG4gIHRyYW5zaXRpb246IGFsbCAuNTtcbn1cblxuLmluZm9fY2FwYWNpdHlfcHJvZmlsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmluZm9fY2FwYWNpdHlfcHJvZmlsIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMjJweCAwO1xufVxuXG4vKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbiAvLyB0b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RTZERTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4vKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDg8KudHJlIGV0IGRpc3BhcmHDg8KudHJlIGxlIHRvYXN0ICovXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgLyogTGUgdG9hc3QgZGlzcGFyYcODwq50IGF2ZWMgdW4gbMODwqlnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gIH1cbn1cbiIsIlxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gaGVpZ2h0OiA1MHZoO1xuICB9XG4gIFxuICAucHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucHJvZmlsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAucHJvZmlsZSAucHJvZmlsX2VtYWlsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuXG5cbi5wcm9maWxlLWltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYW1lcmEtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogOSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmluIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiDDsMKfwpHChyBBZmZpY2hlIGxlIGJvdXRvbiB1bmlxdWVtZW50IGF1IGhvdmVyIGR1IHBhcmVudCAqL1xuLnByb2ZpbGUtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbnUtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMSU7XG4gIGxlZnQ6IDMxJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBkcm9wZG93bkZhZGUgMC4ycyBlYXNlLW91dDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG59XG5cbi5kcm9wZG93bi1tZW51IGJ1dHRvbiB7XG4gIGFsbDogdW5zZXQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDJweCA4cHg7XG59XG5cbi5kcm9wZG93bi1tZW51IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cblxuXG4uZHJvcGRvd24tbWVudSAuZGFuZ2VyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMzYzE5MDtcbiAgY29sb3I6ICNlYTNiM2I7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kYW5nZXItYnRuOmhvdmVyIC5pY29uLWluLW1lbnUge1xuICBjb2xvcjogI2VhM2IzYiAhaW1wb3J0YW50O1xufVxuXG5cblxuLmljb24taW4tbWVudSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmRyb3Bkb3duLW1lbnUgYnV0dG9uOmhvdmVyIC5pY29uLWluLW1lbnUge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuQGtleWZyYW1lcyBkcm9wZG93bkZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuXG4ucGhvdG8tbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5CYWNrZHJvcCAwLjNzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkJhY2tkcm9wIHtcbiAgZnJvbSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7IH1cbiAgdG8gICB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTsgfVxufVxuXG4ucGhvdG8tbW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYW5pbWF0aW9uOiBtb2RhbEZhZGVJbiAwLjRzIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ucGhvdG8tbW9kYWwtY29udGVudCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mZXJtZXItYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmNDQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cblxuLmZlcm1lci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2MwMDAwO1xufVxuXG5cblxuICBcbiAgLnN0YXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC50ZWFtIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIFxuICAubWVtYmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLm1lbWJlciBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5zdGF0dXMge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4gIC5zdGF0dXMub2ZmbGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuICBcbiAgLnN0YXR1cy5hdmFpbGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOGUwNjM7XG4gIH1cbiAgXG4gIC5zdGF0dXMuYnVzeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjM0NztcbiAgfVxuICBcbiAgLm1haW4tY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG4gIH1cbiAgXG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuc2VhcmNoLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLnNlYXJjaC1iYXIgaW5wdXQge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG4gIFxuICAuc2VhcmNoLWJhciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZm9ybS1yb3cgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmZvcm0tcm93IGlucHV0LCAuZm9ybS1yb3cgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmZvcm0tcm93IHRleHRhcmVhIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG5cbi5jb250YWluZXJfZm9ybV9wcm9maWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMjBweFxufVxuICAgIFxuLmRpdjEge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBzcGFuIDI7XG59XG5cbi5kaXYzIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyIC8gc3BhbiAyO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xufVxuXG4uZGl2NCB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuLmRpdjUge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBzcGFuIDI7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG59XG5cbi8vIC5kaXY3IHtcbi8vICAgICBncmlkLWNvbHVtbjogc3BhbiAyIC8gc3BhbiAyO1xuLy8gICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuLy8gfVxuXG4vLyAuZGl2OCB7XG4vLyAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcbi8vICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbi8vICAgICBncmlkLXJvdy1zdGFydDogMztcbi8vIH1cblxuLy8vLy8vLy8vIFBBUkFNRVRSRSBERSBDT01QVEVcbi8vLy8vXG5cbi5jb250YWluZXJfcGFyYW1ldHJlIHtcbiAgICBtYXJnaW46IDQwcHggMTBweDtcbn1cblxuLnRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2FkcmVfY3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWRyZTpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjExMykgMHB4IDFweCAycHggMHB4O1xufVxuXG4udGl0bGVfY2FkcmUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi5pY29uX2NhZHJlIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmljb25fY2FkcmUgLmJ0biB7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNDM0O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pY29uX2NhZHJlIC5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTQ1ZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjU7XG59XG5cbi5ib3V0aXF1ZXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5ib3V0aXF1ZS10YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJvdXRpcXVlLXRhZy11cGRhdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4vLyBpY2lcblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlciAubW9kYWwtY29udGVudC1hdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMzAwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluU2NhbGUgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2RhbC1hY3Rpb25zLWF2ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBnYXA6IDI1cHg7XG59XG5cbi5idG4tY29uZmlybSxcbi5idG4tY2FuY2VsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGFhNjE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZmMDlkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblNjYWxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuXG5cbi5jYW1lcmEtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTEwMDtcbn1cblxuLmNhbWVyYS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5jbG9zZS1jYW1lcmEtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgei1pbmRleDogMTAwMTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLmNsb3NlLWNhbWVyYS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcbn1cblxuLmNhcHR1cmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cblxuLmNhcHR1cmUtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAxMjMsIDI1NSwgMC42KTtcbiAgYW5pbWF0aW9uOiBwdWxzZUFuaW0gMXMgaW5maW5pdGU7XG59XG5cbi8qIFB1bHNlIGFuaW1hdGlvbiBmb3IgY2FwdHVyZSBidXR0b24gKi9cbi5wdWxzZSB7XG4gIGFuaW1hdGlvbjogcHVsc2VBbmltIDEuNXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VBbmltIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxMjMsIDI1NSwgMC42KSxcbiAgICAgICAgICAgICAgICAwIDAgMCAwIHJnYmEoMCwgMTIzLCAyNTUsIDAuNCk7XG4gIH1cbiAgNzAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgICAgMCAwIDAgMjBweCByZ2JhKDAsIDEyMywgMjU1LCAwKTtcbiAgfVxuICA4MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggcmdiYSgwLCAxMjMsIDI1NSwgMCksXG4gICAgICAgICAgICAgICAgMCAwIDAgMzBweCByZ2JhKDAsIDEyMywgMjU1LCAwKTtcbiAgfVxuICA5MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAxMjMsIDI1NSwgMCksXG4gICAgICAgICAgICAgICAgMCAwIDAgMCByZ2JhKDAsIDEyMywgMjU1LCAwKTtcbiAgfVxufVxuXG5cbi5xcmNvZGUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdG9wOiA2MiU7XG4gIGxlZnQ6IDMyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucXJjb2RlLWltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA0cHggOHB4O1xufVxuXG4ucXJjb2RlLWltZy5leHBhbmRlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKSBzY2FsZSgyKTtcbiAgei1pbmRleDogMTAwMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA0cHggOHB4O1xuXG59XG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_profil_profil_component_ts.js.map