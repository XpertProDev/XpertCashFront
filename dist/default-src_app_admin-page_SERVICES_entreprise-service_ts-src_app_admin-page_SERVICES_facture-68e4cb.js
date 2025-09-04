"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["default-src_app_admin-page_SERVICES_entreprise-service_ts-src_app_admin-page_SERVICES_facture-68e4cb"],{

/***/ 76822:
/*!************************************************************!*\
  !*** ./src/app/admin-page/MODELS/FactureProForma.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatutFactureProForma: () => (/* binding */ StatutFactureProForma)
/* harmony export */ });
var StatutFactureProForma;
(function (StatutFactureProForma) {
  StatutFactureProForma["BROUILLON"] = "BROUILLON";
  StatutFactureProForma["APPROBATION"] = "APPROBATION";
  StatutFactureProForma["APPROUVE"] = "APPROUVE";
  StatutFactureProForma["ENVOYE"] = "ENVOYE";
  StatutFactureProForma["VALIDE"] = "VALIDE";
  StatutFactureProForma["ANNULE"] = "ANNULE";
})(StatutFactureProForma || (StatutFactureProForma = {}));

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

/***/ }),

/***/ 61068:
/*!****************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/facture-preview-service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacturePreviewService: () => (/* binding */ FacturePreviewService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class FacturePreviewService {
  constructor() {
    this.previewSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  setPreview(data) {
    this.previewSubject.next(data);
  }
  getPreview() {
    return this.previewSubject.asObservable();
  }
  static {
    this.ɵfac = function FacturePreviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FacturePreviewService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FacturePreviewService,
      factory: FacturePreviewService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 72409:
/*!****************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/factureproforma-service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureProFormaService: () => (/* binding */ FactureProFormaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _MODELS_FactureProForma_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/FactureProForma.model */ 76822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ 88026);







class FactureProFormaService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
  }
  creerFactureProforma(facture, remisePourcentage, appliquerTVA, appliquerAdjustments) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      if (appliquerAdjustments) {
        if (remisePourcentage !== undefined) {
          params = params.set('remisePourcentage', remisePourcentage.toString());
        }
        if (appliquerTVA !== undefined) {
          params = params.set('appliquerTVA', appliquerTVA.toString());
        }
      }
      return this.http.post(`${this.apiUrl}/ajouter`, facture, {
        headers,
        params
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => console.log('Facture créée avec succès:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Erreur détaillée:', error);
      console.log('Corps de la réponse:', error.error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  //Get facture proformat
  getAlFactproformaOfEntreprise(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/mes-factures`, {
        headers
      });
    }));
  }
  getFactureProformaById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factureProforma/${id}`, {
        headers
      });
    }));
  }
  // Dans FactureProFormaService
  updateFactureProforma(factureId, remisePourcentage, appliquerTVA, modifications, idsApprobateurs) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      if (remisePourcentage !== undefined) {
        params = params.set('remisePourcentage', remisePourcentage.toString());
      }
      if (appliquerTVA !== undefined) {
        params = params.set('appliquerTVA', appliquerTVA.toString());
      }
      if (idsApprobateurs && idsApprobateurs.length > 0) {
        idsApprobateurs.forEach(id => {
          params = params.append('idsApprobateurs', id.toString());
        });
      }
      if (modifications.statut === _MODELS_FactureProForma_model__WEBPACK_IMPORTED_MODULE_0__.StatutFactureProForma.ANNULE) {
        params = params.set('isAnnulation', 'true');
      }
      return this.http.put(`${this.apiUrl}/updatefacture/${factureId}`, modifications, {
        headers,
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => console.log('Facture mise à jour:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.error('Erreur mise à jour:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
      }));
    }));
  }
  //Envoyer Facture par mail :
  envoyerFactureEmail(factureId, emailRequest) {
    const formData = new FormData();
    formData.append('to', emailRequest.to);
    formData.append('cc', emailRequest.cc);
    formData.append('subject', emailRequest.subject);
    formData.append('body', emailRequest.body);
    if (emailRequest.attachments) {
      emailRequest.attachments.forEach((file, index) => {
        formData.append(`attachments`, file, file.name);
      });
    }
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/factures/${factureId}/envoyer-email`, formData, {
        headers,
        responseType: 'text'
      });
    }));
  }
  //Get History Facture
  getHistoriqueFacture(factureId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factpro/${factureId}/historique`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error('Erreur récupération historique facture:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => err);
    }));
  }
  // getHistoriqueActions(factureId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/factpro/${factureId}/historique`);
  // }
  //Endpoint pour recuperer les notes d'une facture proforma
  getNotesFactureProforma(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures/${id}/notes`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error('Erreur récupération historique facture:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => err);
    }));
  }
  //Note by Id
  getNoteById(factureId, noteId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/auth/${factureId}/notes/${noteId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error('Erreur lors de la récupération de la note:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => err);
    }));
  }
  //Endpoint pour modifier les notes
  updateNote(factureId, noteId, nouveauContenu) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      const url = `${this.apiUrl}/${factureId}/notes/${noteId}`;
      const body = {
        nouveauContenu
      };
      return this.http.put(url, body, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => console.log('Note modifiée avec succès:', response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Erreur lors de la modification de la note:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  deletNoteFactureProforma(factureId, noteId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      });
      return this.http.delete(`${this.apiUrl}/${factureId}/notes/${noteId}/supprimer`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Erreur lors de la suppression de la note:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  getFacturesByClient(clientId, entrepriseClientId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
      if (clientId !== undefined) {
        params = params.set('clientId', clientId.toString());
      }
      if (entrepriseClientId !== undefined) {
        params = params.set('entrepriseClientId', entrepriseClientId.toString());
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures/client`, {
        headers,
        params
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Erreur dans getFacturesByClient:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  //Trier
  getFacturesParPeriode(type, dateDebut,
  // format ISO: '2025-07-01'
  dateFin) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('type', type);
      if (type === 'personnalise') {
        if (!dateDebut || !dateFin) {
          throw new Error("Pour 'personnalise', les dates dateDebut et dateFin sont obligatoires.");
        }
        params = params.set('dateDebut', dateDebut).set('dateFin', dateFin);
      }
      return this.http.get(`${this.apiUrl}/mes-factures/par-periode`, {
        headers,
        params
      });
    }));
  }
  deletFactureProforma(factureId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      });
      return this.http.delete(`${this.apiUrl}/deletefactureproforma/${factureId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Erreur lors de la suppression de la note:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function FactureProFormaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureProFormaService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: FactureProFormaService,
      factory: FactureProFormaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 88704:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/form-state.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormStateService: () => (/* binding */ FormStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FormStateService {
  saveState(state) {
    this.formState = {
      ...state
    }; // Clonage profond si nécessaire
  }
  getState() {
    return this.formState;
  }
  clearState() {
    this.formState = null;
  }
  static {
    this.ɵfac = function FormStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormStateService,
      factory: FormStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin-page_SERVICES_entreprise-service_ts-src_app_admin-page_SERVICES_facture-68e4cb.js.map