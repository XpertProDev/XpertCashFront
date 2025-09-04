"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["common"],{

/***/ 40724:
/*!**************************************************************!*\
  !*** ./src/app/admin-page/MODELS/click-outside.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickOutsideDirective: () => (/* binding */ ClickOutsideDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class ClickOutsideDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
  static {
    this.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
  }
}

/***/ }),

/***/ 65698:
/*!**********************************************************!*\
  !*** ./src/app/admin-page/MODELS/truncate-email.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncateEmailPipe: () => (/* binding */ TruncateEmailPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class TruncateEmailPipe {
  transform(email) {
    if (!email) {
      return 'Non renseigné';
    }
    const parts = email.split('@');
    if (parts.length !== 2) {
      // si ce n'est pas un email valide, on renvoie brut
      return email;
    }
    const [local, domain] = parts;
    if (local.length <= 6) {
      // si la partie locale est courte, on ne tronque pas
      return email;
    }
    const first = local.substring(0, 4);
    const last = local.substring(local.length - 2);
    return `${first}...${last}@${domain}`;
  }
  static {
    this.ɵfac = function TruncateEmailPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TruncateEmailPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncateEmail",
      type: TruncateEmailPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 44413:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/VenteService/vente-service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VenteService: () => (/* binding */ VenteService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);







class VenteService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  enregistrerVente(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/vente/enregistrer`, request, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      // rethrow the original HttpErrorResponse so subscriber can inspect err.error etc.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
    }));
  }
  getVenteById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/${id}`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  getMontantTotalEntreprise() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/montant-total-jour`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  getMontantTotalEntrepriseMois() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/montant-total-mois`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  // get benefice de mois de lentreprise
  getBeneficheEntrepriseMois() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/benefice/mois`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  // get benefice de jour de lentreprise
  getBeneficheEntrepriseJour() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/benefice/jour`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  //Benefice annuel
  getBeneficheEntrepriseAnnuel() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vente/benefice/annee`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  // Mouvement par jour
  getMouvementsParJour() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/mouvement/par-jour`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err)));
  }
  // Get achat by client
  getVenteByClient(clientId, entrepriseClientId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      const body = {};
      if (clientId !== undefined) body.clientId = clientId;
      if (entrepriseClientId !== undefined) body.entrepriseClientId = entrepriseClientId;
      console.log("Body envoyé :", body);
      return this.http.post(`${this.apiUrl}/par-client`, body, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur dans getVenteByClient:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function VenteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VenteService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: VenteService,
      factory: VenteService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 47746:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/client-service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientService: () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class ClientService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  addClient(client) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/clients`, client, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de l\'ajout du client:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // LL recuperation des clients
  getListClients() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/clients`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(response => console.log('Réponse API clients:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des clients:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  //All client end Entreprise:
  getListEntreprises() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/entreprises`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(response => console.log('Réponse API entreprises:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getClientsByEntreprise(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/clients/entreprise/${entrepriseId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur récupération clients par entreprise:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getClientById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/clients/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(response => console.log('Client récupéré:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération du client', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // Ajoutez cette méthode dans votre ClientService
  updateClient(id, client, imageFile) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const formData = new FormData();
      formData.append('client', new Blob([JSON.stringify(client)], {
        type: 'application/json'
      }));
      if (imageFile) {
        formData.append('imageClientFile', imageFile);
      }
      return this.http.put(`${this.apiUrl}/clientupdate/${id}`, formData, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la mise à jour du client:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // getFullImageUrl(relativePath: string): string {
  //   return relativePath 
  //     ? `${environment.imgUrl}${relativePath}`
  //     : 'assets/img/profil.png';
  // }
  getFullImageUrl(relativePath) {
    // Si déjà une URL complète, retournez directement
    if (relativePath.startsWith('http')) return relativePath;
    return relativePath ? `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl}${relativePath}` : 'assets/img/profil.png';
  }
  deleteClient(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.delete(`${this.apiUrl}/clients/${id}`, {
        headers,
        responseType: 'text'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Client non trouvé';
      } else if (error.status === 403) {
        // Le message de refus de suppression (ex : "Ce client ne peut pas être supprimé...")
        errorMsg = error.error || 'Accès refusé';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  static {
    this.ɵfac = function ClientService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ClientService,
      factory: ClientService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 31673:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/entreprise-clients-service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntrepriseClientService: () => (/* binding */ EntrepriseClientService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class EntrepriseClientService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  addEntrepriseClient(entrepriseClient) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/entreprise-clients`, entrepriseClient, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  updateEntrepriseClient(id, entrepriseClient) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.put(`${this.apiUrl}/cliententrepriseupdate/${id}`, entrepriseClient, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(updated => console.log('Entreprise mise à jour:', updated)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur lors de la modification';
      if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  getEntrepriseById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/entreprises/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur lors de la récupération';
      if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  //Delete entreprise
  deleteEntreprise(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.delete(`${this.apiUrl}/entrepriseClients/${id}`, {
        headers,
        responseType: 'text'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  static {
    this.ɵfac = function EntrepriseClientService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntrepriseClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: EntrepriseClientService,
      factory: EntrepriseClientService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 97033:
/*!************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/facturereel-service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureReelService: () => (/* binding */ FactureReelService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class FactureReelService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  getFactureReelleById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures-reelles/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur lors de la récupération de la facture réelle :', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  getAlFactproreelOfEntreprise(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/mes-factures-reelles`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur lors de la récupération des factures réelles :', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Ajouter ces méthodes dans FactureReelService
  enregistrerPaiement(factureId, montant, modePaiement) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const body = {
        montant,
        modePaiement
      };
      return this.http.post(`${this.apiUrl}/factures/${factureId}/paiement`, body, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur lors de l\'enregistrement du paiement :', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  getHistoriquePaiements(factureId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures/${factureId}/paiements`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.error('Erreur lors de la récupération de l\'historique des paiements :', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
    }));
  }
  getMontantRestant(factureId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures/${factureId}/montant-restant`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.error('Erreur lors de la récupération du montant restant :', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
    }));
  }
  // Ajouter cette méthode dans FactureReelService
  annulerFactureReelle(factureId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/cancelFacture/${factureId}`, {},
      // Body vide
      {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.error('Erreur lors de l\'annulation de la facture :', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
    }));
  }
  //Trier
  getFacturesParPeriode(type, dateDebut, dateFin) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('typePeriode', type);
      if (type === 'personnalise') {
        if (!dateDebut || !dateFin) {
          throw new Error("Pour 'personnalise', les dates dateDebut et dateFin sont obligatoires.");
        }
        params = params.set('dateDebut', dateDebut).set('dateFin', dateFin);
      }
      return this.http.get(`${this.apiUrl}/filtrer-facturesReelles`, {
        headers,
        params
      });
    }));
  }
  static {
    this.ɵfac = function FactureReelService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureReelService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: FactureReelService,
      factory: FactureReelService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 35408:
/*!************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/fournisseur-service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FournisseurService: () => (/* binding */ FournisseurService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class FournisseurService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  addFournisseur(fournisseur, imageFournisseurFile) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const formData = new FormData();
      formData.append('fournisseur', JSON.stringify(fournisseur));
      if (imageFournisseurFile) {
        formData.append('imageFournisseurFile', imageFournisseurFile);
      }
      return this.http.post(`${this.apiUrl}/save-fournisseurs`, formData, {
        headers
      });
    }));
  }
  //Get fournisseur by id
  getFournisseurById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/getFournisseur/${id}`, {
        headers
      });
    }));
  }
  //Get all fournisseurs
  getAllFournisseurs() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/get-fournisseurs`, {
        headers
      });
    }));
  }
  // fournisseur.service.ts
  updateFournisseur(id, updatedFournisseur, imageFournisseurFile) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const formData = new FormData();
      formData.append('updatedFournisseur', new Blob([JSON.stringify(updatedFournisseur)], {
        type: 'application/json'
      }));
      if (imageFournisseurFile) {
        formData.append('imageFournisseurFile', imageFournisseurFile);
      }
      return this.http.put(`${this.apiUrl}/updateFournisseur/${id}`, formData, {
        headers
      });
    }));
  }
  // Delete fournisseur
  deleteFournisseur(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      // 👇 Attente d'une réponse JSON (pas text)
      return this.http.delete(`${this.apiUrl}/fournisseur/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Fournisseur non trouvé';
      } else if (error.status === 403) {
        errorMsg = error.error?.message || 'Accès refusé';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(errorMsg));
    }));
  }
  static {
    this.ɵfac = function FournisseurService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FournisseurService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: FournisseurService,
      factory: FournisseurService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 31860:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/profil.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilService: () => (/* binding */ ProfilService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class ProfilService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  updatePassword(userId, request) {
    const formData = new FormData();
    formData.append('user', JSON.stringify(request));
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateUsers/${userId}`, formData, {
        headers,
        responseType: 'text'
      });
    }));
  }
  static {
    this.ɵfac = function ProfilService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfilService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ProfilService,
      factory: ProfilService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 11856:
/*!**********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/transfert-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransfertService: () => (/* binding */ TransfertService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class TransfertService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  // Dans transfert.service.ts
  effectuerTransfert(transfert) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/transferer-produits`, transfert, {
        headers,
        responseType: 'text'
      });
    }));
  }
  static {
    this.ɵfac = function TransfertService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TransfertService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: TransfertService,
      factory: TransfertService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9599:
/*!******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/unite.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniteMesureService: () => (/* binding */ UniteMesureService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class UniteMesureService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.uniteMesuresSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.uniteMesures$ = this.uniteMesuresSubject.asObservable();
  }
  getUniteMesure() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("🔹 En-têtes envoyés :", headers);
      return this.http.get(`${this.apiUrl}/allUnite`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
        this.uniteMesuresSubject.next(data);
      }));
    }));
  }
  // Ajouter une catégorie
  ajouterUnite(unity) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/createUnite`, unity, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(newUnity => {
        const currentCategories = this.uniteMesuresSubject.value;
        this.uniteMesuresSubject.next([...currentCategories, newUnity]);
      }));
    }));
  }
  static {
    this.ɵfac = function UniteMesureService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UniteMesureService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: UniteMesureService,
      factory: UniteMesureService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 85837:
/*!****************************************************************************!*\
  !*** ./src/app/admin-page/produits/suspended-boutique-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuspendedBoutiqueDialogComponent: () => (/* binding */ SuspendedBoutiqueDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 42700);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);






class SuspendedBoutiqueDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  static {
    this.ɵfac = function SuspendedBoutiqueDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SuspendedBoutiqueDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.m));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SuspendedBoutiqueDialogComponent,
      selectors: [["app-suspended-boutique-dialog"]],
      decls: 14,
      vars: 0,
      consts: [[1, "confirmation-modal-aver"], [1, "modal-content-aver"], [1, "modal-header-aver"], [1, "modal-title-wrapper-aver"], [1, "warning-icon"], [2, "font-size", "16px", "margin-bottom", "10px", "color", "#d20909"], [1, "modal-body-aver"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-aver"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"]],
      template: function SuspendedBoutiqueDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Boutique suspendue");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cette boutique est actuellement suspendue. Vous ne pouvez pas acc\u00E9der \u00E0 ses produits.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuspendedBoutiqueDialogComponent_Template_button_click_12_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.n, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: [".confirmation-modal-aver[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%]   .modal-content-aver[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n}\n\n.modal-header-aver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n\n.modal-title-wrapper-aver[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  margin-bottom: 8px;\n}\n\n.modal-body-aver[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.modal-actions-aver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1c3BlbmRlZC1ib3V0aXF1ZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUdJO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBTjs7QUFHSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFLSTtFQUNFLG1CQUFBO0FBRk47O0FBS0k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUZOOztBQUtJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRk4iLCJmaWxlIjoic3VzcGVuZGVkLWJvdXRpcXVlLWRpYWxvZy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDEwNTA7XG4gICAgfVxuXG4gICAgLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIC5tb2RhbC1jb250ZW50LWF2ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXItYXZlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5tb2RhbC10aXRsZS13cmFwcGVyLWF2ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAud2FybmluZy1pY29uIHtcbiAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG5cblxuICAgIC5tb2RhbC1ib2R5LWF2ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAubW9kYWwtYWN0aW9ucy1hdmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuYnRuLWNvbmZpcm0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9kdWl0cy9zdXNwZW5kZWQtYm91dGlxdWUtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBTjs7QUFHSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQU47O0FBS0k7RUFDRSxtQkFBQTtBQUZOOztBQUtJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBQ0EsNGlGQUE0aUYiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDEwNTA7XG4gICAgfVxuXG4gICAgLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIC5tb2RhbC1jb250ZW50LWF2ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXItYXZlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5tb2RhbC10aXRsZS13cmFwcGVyLWF2ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAud2FybmluZy1pY29uIHtcbiAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG5cblxuICAgIC5tb2RhbC1ib2R5LWF2ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAubW9kYWwtYWN0aW9ucy1hdmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuYnRuLWNvbmZpcm0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 93335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 89285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 33117:
/*!***************************************************************!*\
  !*** ./node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent),
/* harmony export */   NgApexchartsModule: () => (/* binding */ NgApexchartsModule)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 67180);





const _c0 = ["chart"];
class ChartComponent {
  constructor() {
    this.chart = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.annotations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.colors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.dataLabels = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.series = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.stroke = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.labels = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.legend = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.markers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.noData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.fill = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.tooltip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.plotOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.responsive = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.xaxis = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.yaxis = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.forecastDataPoints = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.grid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.states = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.subtitle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.theme = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.autoUpdateSeries = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(true);
    this.chartReady = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    // If consumers need to capture the `chartInstance` for use, consumers
    // can access the component instance through `viewChild` and use `computed`
    // or `effect` on `component.chartInstance()` to monitor its changes and
    // recompute effects or computations whenever `chartInstance` is updated.
    this.chartInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.chartElement = _angular_core__WEBPACK_IMPORTED_MODULE_1__.viewChild.required("chart");
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  }
  ngOnChanges(changes) {
    if (!this.isBrowser) return;
    this.ngZone.runOutsideAngular(() => {
      rxjs__WEBPACK_IMPORTED_MODULE_3__.asapScheduler.schedule(() => this.hydrate(changes));
    });
  }
  ngOnDestroy() {
    this.destroy();
  }
  hydrate(changes) {
    const shouldUpdateSeries = this.autoUpdateSeries() && Object.keys(changes).filter(c => c !== "series").length === 0;
    if (shouldUpdateSeries) {
      this.updateSeries(this.series(), true);
      return;
    }
    this.createElement();
  }
  createElement() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        default: ApexCharts
      } = yield __webpack_require__.e(/*! import() */ "node_modules_apexcharts_dist_apexcharts_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! apexcharts */ 95337));
      window.ApexCharts ||= ApexCharts;
      const options = {};
      const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
      properties.forEach(property => {
        const value = _this[property]();
        if (value) {
          options[property] = value;
        }
      });
      _this.destroy();
      const chartInstance = _this.ngZone.runOutsideAngular(() => new ApexCharts(_this.chartElement().nativeElement, options));
      _this.chartInstance.set(chartInstance);
      _this.render();
      _this.chartReady.emit({
        chartObj: chartInstance
      });
    })();
  }
  render() {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
  }
  updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
  }
  updateSeries(newSeries, animate) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
  }
  appendSeries(newSeries, animate) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
  }
  appendData(newData) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
  }
  highlightSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
  }
  toggleSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
  }
  showSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
  }
  hideSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
  }
  resetSeries() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
  }
  zoomX(min, max) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
  }
  toggleDataPointSelection(seriesIndex, dataPointIndex) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
  }
  destroy() {
    this.chartInstance()?.destroy();
    this.chartInstance.set(null);
  }
  setLocale(localeName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
  }
  paper() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
  }
  addXaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
  }
  addYaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
  }
  addPointAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
  }
  removeAnnotation(id, options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
  }
  clearAnnotations(options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
  }
  dataURI(options) {
    return this.chartInstance()?.dataURI(options);
  }
  /** @nocollapse */
  static {
    this.ɵfac = function ChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChartComponent)();
    };
  }
  /** @nocollapse */
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["apx-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuerySignal"](ctx.chartElement, _c0, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryAdvance"]();
        }
      },
      inputs: {
        chart: [1, "chart"],
        annotations: [1, "annotations"],
        colors: [1, "colors"],
        dataLabels: [1, "dataLabels"],
        series: [1, "series"],
        stroke: [1, "stroke"],
        labels: [1, "labels"],
        legend: [1, "legend"],
        markers: [1, "markers"],
        noData: [1, "noData"],
        fill: [1, "fill"],
        tooltip: [1, "tooltip"],
        plotOptions: [1, "plotOptions"],
        responsive: [1, "responsive"],
        xaxis: [1, "xaxis"],
        yaxis: [1, "yaxis"],
        forecastDataPoints: [1, "forecastDataPoints"],
        grid: [1, "grid"],
        states: [1, "states"],
        title: [1, "title"],
        subtitle: [1, "subtitle"],
        theme: [1, "theme"],
        autoUpdateSeries: [1, "autoUpdateSeries"]
      },
      outputs: {
        chartReady: "chartReady"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: "apx-chart",
      template: `<div #chart></div>`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
const declarations = [ChartComponent];
class NgApexchartsModule {
  /** @nocollapse */static {
    this.ɵfac = function NgApexchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgApexchartsModule)();
    };
  }
  /** @nocollapse */
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgApexchartsModule
    });
  }
  /** @nocollapse */
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgApexchartsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [declarations],
      exports: [declarations]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map