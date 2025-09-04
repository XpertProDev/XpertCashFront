"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_detail-edit-entreprise_detail-edit-entreprise_component_ts"],{

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

/***/ 19589:
/*!***********************************************************************************************!*\
  !*** ./src/app/admin-page/clients/detail-edit-entreprise/detail-edit-entreprise.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailEditEntrepriseComponent: () => (/* binding */ DetailEditEntrepriseComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/entreprise-clients-service */ 31673);
/* harmony import */ var _SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/factureproforma-service */ 72409);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/VenteService/vente-service */ 44413);















const _c0 = ["fileInput"];
const _c1 = (a0, a1, a2, a3) => ({
  "draft": a0,
  "sent": a1,
  "approved": a2,
  "valid": a3
});
function DetailEditEntrepriseComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function DetailEditEntrepriseComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function DetailEditEntrepriseComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function DetailEditEntrepriseComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00CAtes-vous s\u00FBr de vouloir supprimer cette entreprise ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 90)(7, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_div_27_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.confirmDeleteE());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "OUI");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_div_27_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showConfirmationModalE = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "NON");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function DetailEditEntrepriseComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_i_34_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_i_35_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_div_42_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_div_42_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailEditEntrepriseComponent_div_42_small_1_Template, 2, 0, "small", 70)(2, DetailEditEntrepriseComponent_div_42_small_2_Template, 2, 0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.entrepriseForm.get("nom")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.entrepriseForm.get("nom")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function DetailEditEntrepriseComponent_div_47_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailEditEntrepriseComponent_div_47_small_1_Template, 2, 0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.entrepriseForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function DetailEditEntrepriseComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Format invalide");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DetailEditEntrepriseComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 98)(3, "div", 99)(4, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_div_79_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goToClients());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 101)(7, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_div_79_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Annuler" : "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r1.entrepriseForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.entrepriseForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.entrepriseForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.entrepriseForm.invalid);
  }
}
function DetailEditEntrepriseComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 103)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Factures entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.factureCount);
  }
}
function DetailEditEntrepriseComponent_div_89_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r7.nomProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r7.ligneDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 5, ligne_r7.prixUnitaire));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r7.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 7, ligne_r7.montantTotal));
  }
}
function DetailEditEntrepriseComponent_div_89_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Remise 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DetailEditEntrepriseComponent_div_89_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "TVA 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "000");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DetailEditEntrepriseComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 109)(5, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "hr")(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 111)(14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Facture proforma: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 113)(19, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 115)(23, "div", 116)(24, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Doit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 118)(29, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Objet : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 119)(34, "table", 120)(35, "thead")(36, "tr")(37, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "PU");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, DetailEditEntrepriseComponent_div_89_tr_48_Template, 13, 9, "tr", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "tfoot", 123)(50, "tr")(51, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, DetailEditEntrepriseComponent_div_89_tr_56_Template, 5, 0, "tr", 70)(57, DetailEditEntrepriseComponent_div_89_tr_57_Template, 5, 0, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "tr")(59, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 126)(65, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : Zero .....");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 128)(68, "div", 129)(69, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 131)(72, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 132)(75, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p", 134)(78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 135)(81, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 136)(84, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.entrepriseEmitter.logo ? ctx_r1.imgUrl + ctx_r1.entrepriseEmitter.logo : "assets/img/entreprise-icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.entrepriseNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Secteur: ", ctx_r1.entrepriseSecteur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" Email: ", ctx_r1.entrepriseEmail, " T\u00E9l\u00E9phone: ", ctx_r1.entrepriseTelephone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.factureDetails.numeroFacture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.entrepriseSiege, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 24, ctx_r1.factureDetails.dateCreation, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r1.factureDetails.client == null ? null : ctx_r1.factureDetails.client.nomComplet) || (ctx_r1.factureDetails.entrepriseClient == null ? null : ctx_r1.factureDetails.entrepriseClient.nom), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.factureDetails.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.factureDetails.lignesFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 27, ctx_r1.factureDetails.totalHT));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.factureDetails.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.factureDetails.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](63, 29, ctx_r1.factureDetails.totalFacture));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.entrepriseSignataire);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.entrepriseSignataireNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.entrepriseSiteWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" NINA: ", ctx_r1.entrepriseNina, " RCCM: ", ctx_r1.entrepriseRccm, " NIF: ", ctx_r1.entrepriseNif, " Banque: ", ctx_r1.entrepriseBanque, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Adresse : ", ctx_r1.entrepriseAdresse, " /", ctx_r1.entreprisePays, "");
  }
}
function DetailEditEntrepriseComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "S\u00E9lectionnez une facture pour l'aper\u00E7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DetailEditEntrepriseComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Chargement des factures... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DetailEditEntrepriseComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorFactures, " ");
  }
}
function DetailEditEntrepriseComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Aucune facture trouv\u00E9e pour cette entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DetailEditEntrepriseComponent_table_102_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_table_102_tr_12_Template_tr_click_0_listener() {
      const facture_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSelectFacture(facture_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td")(7, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected-row", ctx_r1.selectedFactureId === facture_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](facture_r9.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 7, facture_r9.dateFacture, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](12, _c1, facture_r9.statut === "BROUILLON", facture_r9.statut === "ENVOYE", facture_r9.statut === "APPROUVE", facture_r9.statut === "VALIDE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", facture_r9.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 10, facture_r9.totalFacture));
  }
}
function DetailEditEntrepriseComponent_table_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr", 73)(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Num\u00E9ro");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Montant");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DetailEditEntrepriseComponent_table_102_tr_12_Template, 12, 17, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.facturesEntreprise);
  }
}
function DetailEditEntrepriseComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "table", 77)(2, "tfoot", 78)(3, "tr")(4, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 1, ctx_r1.getTotalFactures()), " ");
  }
}
function DetailEditEntrepriseComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 103)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Achats");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.achatCount);
  }
}
function DetailEditEntrepriseComponent_div_110_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r10.nomProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 5, ligne_r10.prixUnitaire, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r10.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 8, ligne_r10.montantLigne, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ligne_r10.remise);
  }
}
function DetailEditEntrepriseComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 109)(5, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Nom Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Secteur Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Email: emailentreprise.com T\u00E9l\u00E9phone: 000000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "hr")(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 111)(14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Facture proforma: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 113)(19, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 115)(23, "div", 116)(24, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Vendeur : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 118)(29, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Objet : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 119)(34, "table", 120)(35, "thead")(36, "tr")(37, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "PU");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Remise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, DetailEditEntrepriseComponent_div_110_tr_48_Template, 13, 11, "tr", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "tfoot", 123)(50, "tr")(51, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr")(57, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Remise 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "tr")(63, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 126)(69, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : Zero .....");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 128)(72, "div", 129)(73, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Signataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 131)(76, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Nom Signataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 132)(79, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "p", 134)(82, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "www.siteweb.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 135)(85, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " NINA: 000000 RCCM: 000000 NIF: 000000 Banque: Banque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 136)(88, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Adresse : Rue / Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedAchat.numeroFacture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 8, ctx_r1.selectedAchat.dateVente, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedAchat.nomVendeur);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedAchat.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedAchat.lignes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](55, 11, ctx_r1.selectedAchat.montantTotal, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](61, 14, ctx_r1.selectedAchat.remiseGlobale, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](67, 17, ctx_r1.selectedAchat.montantTotal - ctx_r1.selectedAchat.remiseGlobale, "1.0-0"));
  }
}
function DetailEditEntrepriseComponent_tr_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_tr_130_Template_tr_click_0_listener() {
      const vente_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSelectAchat(vente_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td")(7, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vente_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected-row", ctx_r1.selectedAchatId === vente_r12.venteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vente_r12.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 6, vente_r12.dateVente, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vente_r12.modePaiement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 9, vente_r12.montantTotal, "1.0-0"));
  }
}
class DetailEditEntrepriseComponent {
  constructor(router, route, fb, entrepriseService, factureService, entrepriseService2, venteService) {
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.entrepriseService = entrepriseService;
    this.factureService = factureService;
    this.entrepriseService2 = entrepriseService2;
    this.venteService = venteService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imgUrl;
    this.errorMessage = '';
    this.successMessage = '';
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.facturesEntreprise = [];
    this.isLoading = false;
    this.loadingFactures = false;
    this.errorFactures = '';
    this.isEditing = false;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.selectedFactureId = null;
    this.factureDetails = null;
    this.entrepriseEmitter = {};
    this.factureCount = 0;
    this.achatCount = 0;
    // Propriétés pour l'aperçu de facture
    this.entrepriseNom = 'Nom entreprise';
    this.entrepriseSecteur = 'Secteur';
    this.entrepriseEmail = 'email@entreprise.com';
    this.entrepriseTelephone = '+223 00 00 00 00';
    this.entrepriseSiege = 'Siège social';
    this.entrepriseLogo = 'assets/img/entreprise-icon.png';
    this.entrepriseSiteWeb = 'www.entreprise.com';
    this.entrepriseNina = 'NINA';
    this.entrepriseRccm = 'RCCM';
    this.entrepriseNif = 'NIF';
    this.entrepriseBanque = 'Banque';
    this.entrepriseAdresse = 'Adresse';
    this.entreprisePays = 'Pays';
    this.entrepriseSignataireNom = 'Nom signataire';
    this.entrepriseSignataire = 'Fonction signataire';
    this.newPhotoUrl = null;
    this.selectedFile = null;
    this.clientPhotoUrl = null;
    // Définition des indicatifs par pays
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
      }
    };
    this.entrepriseClient = null;
    this.showConfirmationModalE = false;
    this.isDeletingE = false;
    // ici
    //
    this.loading = false;
    this.ventes = [];
    this.selectedAchatId = null;
    this.selectedAchat = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.entrepriseId = +params['id'];
      this.loadEntrepriseData();
      this.loadFacturesEntreprise();
      this.entrepriseClientId = this.entrepriseId;
      this.clientId = undefined;
      this.getVentes();
    });
    this.loadEntrepriseEmitter();
    this.entrepriseForm.disable();
    this.control.disable();
  }
  loadEntrepriseEmitter() {
    this.entrepriseService2.getEntrepriseInfo().subscribe({
      next: entreprise => {
        this.entrepriseEmitter = entreprise;
      },
      error: err => {
        console.error('Erreur chargement infos entreprise émettrice', err);
      }
    });
  }
  loadFacturesEntreprise() {
    this.loadingFactures = true;
    this.factureService.getFacturesByClient(undefined, this.entrepriseId).subscribe({
      next: factures => {
        this.facturesEntreprise = factures;
        this.factureCount = factures.length;
        this.loadingFactures = false;
        // Sélectionner la première facture par défaut
        if (this.facturesEntreprise.length > 0) {
          this.onSelectFacture(this.facturesEntreprise[0]);
        }
      },
      error: err => {
        this.errorFactures = 'Erreur lors du chargement des factures';
        this.loadingFactures = false;
        console.error(err);
      }
    });
  }
  onSelectFacture(facture) {
    this.selectedFactureId = facture.id;
    this.loadFactureDetails(facture.id);
  }
  loadFactureDetails(factureId) {
    this.factureService.getFactureProformaById(factureId).subscribe({
      next: details => {
        this.factureDetails = details;
      },
      error: err => {
        console.error('Erreur chargement détails facture', err);
      }
    });
  }
  getTotalFactures() {
    const total = this.facturesEntreprise.reduce((sum, facture) => sum + facture.totalFacture, 0);
    return Math.round(total);
  }
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.indicatif);
      }
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }
  updatePhoneValidator(longueur) {
    const validators = [];
    if (this.indicatif) {
      const regex = new RegExp(`^\\${this.indicatif}\\s*\\d{${longueur}}$`);
      validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(regex));
    }
    this.entrepriseForm.get('telephone')?.setValidators(validators);
    this.entrepriseForm.get('telephone')?.updateValueAndValidity();
  }
  formatPhoneNumber() {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    if (!valeur.startsWith(this.indicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.indicatif);
      return;
    }
    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, this.maxPhoneLength));
  }
  initializeForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      telephone: [''],
      pays: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }
  loadEntrepriseData() {
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe({
      next: data => {
        this.entrepriseData = data;
        // Mettre à jour les propriétés d'aperçu
        this.entrepriseNom = data.nom;
        this.entrepriseSecteur = data.secteur || '';
        this.entrepriseEmail = data.email || '';
        this.entrepriseTelephone = data.telephone || '';
        this.entrepriseSiege = data.siege || '';
        this.entrepriseAdresse = data.adresse || '';
        this.entreprisePays = data.pays || '';
        let cleanPhone = data.telephone;
        if (data.telephone && data.telephone.includes(' ')) {
          cleanPhone = data.telephone.replace(/\s/g, '');
        }
        this.entrepriseForm.patchValue({
          nom: data.nom,
          email: data.email,
          telephone: cleanPhone,
          pays: data.pays,
          adresse: data.adresse,
          siege: data.siege,
          secteur: data.secteur
        });
        if (data.pays && this.paysIndicatifs[data.pays]) {
          this.indicatif = this.paysIndicatifs[data.pays].indicatif;
          this.maxPhoneLength = this.indicatif.length + this.paysIndicatifs[data.pays].longueur;
          this.updatePhoneValidator(this.paysIndicatifs[data.pays].longueur);
        }
      },
      error: err => {
        this.errorMessage = err.message || 'Erreur lors du chargement';
      }
    });
  }
  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.entrepriseForm.enable();
    } else {
      this.entrepriseForm.disable();
      this.loadEntrepriseData();
    }
  }
  goToClients() {
    if (this.isEditing) {
      this.toggleEditing();
    } else {
      this.router.navigate(['/clients']);
    }
  }
  // Méthode pour déclencher l'input file
  triggerFileInput() {
    if (!this.isEditing) return;
    this.fileInput.nativeElement.click();
  }
  onSubmit() {
    if (this.entrepriseForm.invalid) return;
    // Réinitialiser les messages
    this.errorMessage = '';
    this.successMessage = '';
    // Activer l'indicateur de chargement
    this.isLoading = true;
    // Ajouter un délai de 3 secondes avant la modification
    setTimeout(() => {
      const updatedData = {
        ...this.entrepriseData,
        ...this.entrepriseForm.value
      };
      this.entrepriseService.updateEntrepriseClient(this.entrepriseId, updatedData).subscribe({
        next: () => {
          // Afficher le message de succès immédiatement
          this.successMessage = 'Entreprise modifiée avec succès!';
          this.errorMessage = '';
          this.isLoading = false;
          // Attendre 2 secondes avant de désactiver le mode édition
          setTimeout(() => {
            // Désactiver le mode édition après 2 secondes
            this.isEditing = false;
            this.entrepriseForm.disable();
            // Recharger les données
            this.loadEntrepriseData();
          }, 2000);
        },
        error: err => {
          this.errorMessage = err.message || 'Erreur lors de la modification';
          this.successMessage = '';
          this.isLoading = false;
        }
      });
    }, 3000); // Délai initial de 3 secondes
  }
  navigateBack() {
    this.router.navigate(['/clients']);
  }
  deleteEntreprise() {
    if (!this.entrepriseClient && !this.entrepriseId) {
      console.error("Entreprise cliente ou ID non disponible.");
      return;
    }
    this.showConfirmationModalE = true;
  }
  confirmDeleteE() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showConfirmationModalE = false;
      if (!_this.entrepriseClient && !_this.entrepriseId) {
        _this.errorMessage = "Entreprise non disponible pour suppression.";
        return;
      }
      _this.isDeletingE = true;
      _this.errorMessage = '';
      _this.successMessage = '';
      try {
        const idToDelete = _this.entrepriseClient?.id || _this.entrepriseId;
        // Un seul appel delete, on récupère le message (string) ici
        const message = yield _this.entrepriseService.deleteEntreprise(idToDelete).toPromise();
        _this.successMessage = message || 'Entreprise supprimée avec succès !';
        setTimeout(() => {
          _this.router.navigate(['/clients']);
        }, 2000);
      } catch (err) {
        let message = err?.error?.error || 'Erreur lors de la suppression.';
        const prefix = "Une erreur est survenue : ";
        if (message.startsWith(prefix)) {
          message = message.substring(prefix.length);
        }
        _this.errorMessage = message;
      } finally {
        _this.isDeletingE = false;
        setTimeout(() => {
          _this.errorMessage = '';
          _this.successMessage = '';
        }, 5000);
      }
    })();
  }
  onSelectAchat(vente) {
    this.selectedAchat = vente;
    this.selectedAchatId = vente.venteId;
    console.log('Achat sélectionné:', this.selectedAchat);
  }
  getVentes() {
    this.loading = true;
    this.errorMessage = '';
    if (!this.clientId && !this.entrepriseClientId) {
      console.warn("Aucun client ou entreprise sélectionné, impossible de récupérer les ventes.");
      this.loading = false;
      return;
    }
    this.venteService.getVenteByClient(this.clientId, this.entrepriseClientId).subscribe({
      next: res => {
        console.log("données reçues :", res);
        this.ventes = res;
        this.achatCount = this.ventes.length;
        // Sélection automatique du premier achat
        if (this.ventes.length > 0) {
          this.selectedAchatId = this.ventes[0].venteId;
          this.selectedAchat = this.ventes[0];
          console.log('Premier achat sélectionné automatiquement :', this.selectedAchatId);
        }
        this.loading = false;
      },
      error: err => {
        console.error('Erreur récupération ventes :', err);
        this.errorMessage = 'Impossible de récupérer les ventes.';
        this.loading = false;
      }
    });
  }
  selectEntrepriseClient(entrepriseClient) {
    this.entrepriseClientId = entrepriseClient.id;
    this.clientId = undefined; // NE PAS envoyer clientId
    this.getVentes();
  }
  selectClient(client) {
    this.clientId = client.id;
    this.entrepriseClientId = undefined; // NE PAS envoyer entrepriseClientId
    this.getVentes();
  }
  get totalMontant() {
    return this.ventes?.reduce(function (acc, vente) {
      return acc + (vente.montantTotal || 0);
    }, 0) || 0;
  }
  static {
    this.ɵfac = function DetailEditEntrepriseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailEditEntrepriseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_3__.EntrepriseClientService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_4__.FactureProFormaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_5__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_6__.VenteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DetailEditEntrepriseComponent,
      selectors: [["app-detail-edit-entreprise"]],
      viewQuery: function DetailEditEntrepriseComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 140,
      vars: 26,
      consts: [["noFactureSelected", ""], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], ["title", "Retour sur la page entreprise client", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "container_client"], ["class", "loading-overlay", 4, "ngIf"], [1, "information_cadre", 2, "margin-bottom", "20px", "padding", "20px"], [1, "information_grid_two"], [1, "profil_section"], [1, "section_title"], [1, "title"], [1, "profile-img-wrapper", 3, "click"], ["src", "assets/img/office_building.png", "alt", "Photo de profil", 1, "profile-img"], [1, "overlay"], ["src", "assets/img/appareil.jpg", "alt", "Modifier", 1, "camera-icon"], [1, "delete-entrepriseClient-container", 2, "margin-top", "22px"], [2, "font-size", "13px"], [1, "switch2"], ["aria-label", "Supprimer la boutique", "title", "Supprimer la boutique", 1, "delete-boutique-btn", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"], ["class", "confirmation-modal-averB", 4, "ngIf"], [1, "info_section"], [1, "title", "title_display"], [1, "icon_edit"], ["class", "ri-edit-box-line", "title", "Cliquer ici pour modifier", 3, "click", 4, "ngIf"], ["style", "color: #ff0000;", "class", "ri-close-line", "title", "Fermer l'\u00E9dition", 3, "click", 4, "ngIf"], [1, "container_formulaire", 3, "formGroup"], [1, "champ_grid_true"], [1, "champ_input"], ["type", "text", "id", "nom", "formControlName", "nom", "placeholder", "Saisis le nom de l'entreprise", 1, "input_focus"], ["for", "nom", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "secteur", "formControlName", "secteur", "placeholder", "Saisis le secteur", 1, "input_focus"], ["for", "secteur", 1, "label"], [1, "champ_grid"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", ""], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], ["id", "adresse", "formControlName", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["id", "siege", "formControlName", "siege", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "siege", 1, "label"], ["class", "information_cadre_save", 4, "ngIf"], [1, "information_cadre"], [1, "section_navbar"], [1, "custom-tabs", 3, "selectedIndex"], ["mat-tab-label", ""], [1, "tab-content"], [1, "content_client"], [1, "profil_section", "profil_section_facture"], ["class", "facture_model", 4, "ngIf", "ngIfElse"], [1, "info_section", 2, "padding", "0"], [1, "contact_info__"], [1, "section_title", "section_title2", 2, "padding", "20px 20px 6px"], [1, "table-container", 2, "max-height", "41vh", "border-radius", "10px", "display", "flex", "flex-direction", "column", "position", "relative"], ["class", "loading-indicator", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], ["class", "sticky-footer", 4, "ngIf"], ["class", "facture_model", 4, "ngIf"], [2, "position", "sticky", "top", "0", "background", "white", "z-index", "10", "box-shadow", "0 2px 2px -1px rgba(0,0,0,0.1)"], [1, "text-right"], [3, "selected-row", "click", 4, "ngFor", "ngForOf"], [1, "sticky-footer"], [2, "width", "100%"], [2, "background-color", "#ffffff"], ["colspan", "3", 1, "text-bold"], [1, "text-right", "text-bold"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "confirmation-modal-averB"], [1, "modal-content-averB"], [2, "font-size", "16px", "margin-bottom", "10px"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-averB"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"], [1, "btn-cancel", 2, "font-size", "12px", 3, "click"], ["title", "Cliquer ici pour modifier", 1, "ri-edit-box-line", 3, "click"], ["title", "Fermer l'\u00E9dition", 1, "ri-close-line", 2, "color", "#ff0000", 3, "click"], [1, "error"], [1, "information_cadre_save"], [1, "container_error_message"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "tab-label"], [1, "facture-count"], [1, "facture_model"], [1, "header_apercu", 2, "display", "flex", "align-items", "center", "gap", "5px", "margin", "10px"], [1, "logo_entreprise"], [3, "src"], [1, "entete_entreprise"], [1, "para1"], [1, "titre", 2, "text-align", "center", "font-size", "8px"], [2, "color", "#0000003e"], [1, "date_right"], [2, "margin", "0 10px", "font-size", "8px", "text-align", "right"], [1, "name_client", 2, "margin-left", "10px"], [1, "doit", 2, "display", "flex", "align-items", "center", "gap", "3px"], [2, "margin", "0", "font-size", "8px"], [1, "objets", 2, "display", "flex", "align-items", "center", "gap", "3px"], [1, "container_table", 2, "display", "flex", "justify-content", "center"], [1, "table"], [1, "th"], [4, "ngFor", "ngForOf"], [1, "tfoot"], ["colspan", "4", 1, "td"], [1, "td"], [1, "arret_somme"], [2, "margin", "0 0 0 10px", "font-size", "6px"], [1, "signature", 2, "text-align", "right", "margin", "20px 10px 16px 0"], [1, "post_signateure"], [2, "font-size", "8px"], [1, "nom_signateure"], [1, "container_footer"], [1, "footer"], [2, "text-align", "center", "font-size", "8px", "margin", "0 0 3px 0"], [2, "font-size", "5px", "text-align", "center"], [2, "margin-top", "0px", "font-size", "5px", "text-align", "center"], [1, "empty-preview"], [1, "ri-file-text-line"], [1, "loading-indicator"], [1, "ri-loader-4-line", "spin"], [1, "error-message"], [1, "empty-state"], [1, "ri-file-list-2-line"], [3, "click"], [1, "status-badge", 3, "ngClass"], ["src", "assets/img/Votre.png"], [1, "status-badge"]],
      template: function DetailEditEntrepriseComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailEditEntrepriseComponent_div_1_Template, 2, 1, "div", 2)(2, DetailEditEntrepriseComponent_div_2_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_Template_p_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Entreprise clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DetailEditEntrepriseComponent_div_8_Template, 5, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.triggerFileInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 18)(21, "span", 19)(22, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Supprimer Entreprise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 20)(25, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailEditEntrepriseComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.deleteEntreprise());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, DetailEditEntrepriseComponent_div_27_Template, 11, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 24)(29, "div", 12)(30, "div", 25)(31, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Informations Entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DetailEditEntrepriseComponent_i_34_Template, 1, 0, "i", 27)(35, DetailEditEntrepriseComponent_i_35_Template, 1, 0, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "form", 29)(37, "div", 30)(38, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Nom entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, DetailEditEntrepriseComponent_div_42_Template, 3, 2, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, DetailEditEntrepriseComponent_div_47_Template, 2, 1, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Secteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 39)(53, "div", 40)(54, "select", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DetailEditEntrepriseComponent_Template_select_change_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onPaysChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Mali");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "S\u00E9n\u00E9gal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "C\u00F4te d'Ivoire");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 47)(66, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DetailEditEntrepriseComponent_Template_input_input_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.formatPhoneNumber());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, DetailEditEntrepriseComponent_div_69_Template, 3, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 39)(71, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, DetailEditEntrepriseComponent_div_79_Template, 9, 8, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 55)(81, "div", 56)(82, "mat-tab-group", 57)(83, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, DetailEditEntrepriseComponent_ng_template_84_Template, 5, 1, "ng-template", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 59)(86, "div", 60)(87, "div", 10)(88, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, DetailEditEntrepriseComponent_div_89_Template, 86, 31, "div", 62)(90, DetailEditEntrepriseComponent_ng_template_90_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 63)(93, "div", 64)(94, "div", 65)(95, "div", 13)(96, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Toutes les factures");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, DetailEditEntrepriseComponent_div_99_Template, 3, 0, "div", 67)(100, DetailEditEntrepriseComponent_div_100_Template, 2, 1, "div", 68)(101, DetailEditEntrepriseComponent_div_101_Template, 4, 0, "div", 69)(102, DetailEditEntrepriseComponent_table_102_Template, 13, 1, "table", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, DetailEditEntrepriseComponent_div_103_Template, 9, 3, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, DetailEditEntrepriseComponent_ng_template_105_Template, 5, 1, "ng-template", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 59)(107, "div", 60)(108, "div", 10)(109, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, DetailEditEntrepriseComponent_div_110_Template, 90, 20, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 63)(112, "div", 64)(113, "div", 65)(114, "div", 13)(115, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "Toutes les achats");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div", 66)(118, "table")(119, "thead")(120, "tr", 73)(121, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Num\u00E9ro Facture");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Mode Paiement");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "th", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Montant");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, DetailEditEntrepriseComponent_tr_130_Template, 12, 12, "tr", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 76)(132, "table", 77)(133, "tfoot", 78)(134, "tr")(135, "td", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "td", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](139, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          const noFactureSelected_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isDeletingE);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showConfirmationModalE);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.entrepriseForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.entrepriseForm.get("nom")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.entrepriseForm.get("nom")) == null ? null : tmp_9_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.entrepriseForm.get("email")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.entrepriseForm.get("email")) == null ? null : tmp_10_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.entrepriseForm.get("telephone")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.entrepriseForm.get("telephone")) == null ? null : tmp_11_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedIndex", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.factureDetails)("ngIfElse", noFactureSelected_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loadingFactures);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && ctx.errorFactures);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesEntreprise.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesEntreprise.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesEntreprise.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedAchat);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.ventes);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](139, 23, ctx.totalMontant, "1.0-0"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup],
      styles: ["@charset \"UTF-8\";\n.container_client[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  padding: 10px 0;\n}\n\n.content_client[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.information_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr;\n  gap: 20px;\n}\n\n.information_grid_two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 27% 2fr;\n  gap: 20px;\n}\n\n.section_title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  position: relative;\n  padding-bottom: 2px;\n}\n\n.section_title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2c3e50;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.title_display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.section_title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.section_title2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 21px;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.profil_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.profil_section_facture[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  padding: 0 !important;\n}\n\n.info_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.info_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_grid_true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 5px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 10px;\n  background: none;\n  color: #000000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #999;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 10px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  left: 10px;\n  position: relative;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 50px;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.camera-icon[_ngcontent-%COMP%] {\n  width: 30px; \n\n  height: 30px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n}\n\n.icon_edit[_ngcontent-%COMP%] {\n  margin-top: -7px;\n}\n\n.icon_edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .information_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .information_grid_two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info_item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.info_label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.info_value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2c3e50;\n}\n\n.contact_info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.contact_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 15px;\n}\n\n.contact_icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #4b6cb7;\n  font-size: 18px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 2px;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 11px;\n  width: 11px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(13px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  overflow: auto;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-weight: 600;\n  color: #000;\n  letter-spacing: 0.6px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  background-color: #f1f3f5;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212529;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 500;\n}\n.status-badge.draft[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.status-badge.sent[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background-color: #c5c5e2;\n  color: #0000ff;\n}\n.status-badge.valid[_ngcontent-%COMP%] {\n  background-color: #d5e6d5;\n  color: #008000;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: #ced4da;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #dc3545;\n  background-color: #fff8f8;\n  border-radius: 8px;\n  margin: 10px 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n\n.sticky-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n  border-top: 1px solid #eee;\n}\n\n.sticky-footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.para1[_ngcontent-%COMP%] {\n  font-size: 6px;\n  margin: 0;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\n.titre[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 93%;\n  border-collapse: collapse;\n  margin: 4px 0;\n  font-size: 5px;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 3px 5px;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n\n.table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f9f9f9;\n}\n\n@media (max-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 5px 3px;\n  }\n}\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\n.selected-row[_ngcontent-%COMP%] {\n  border: 2px solid #0672E4;\n  background-color: #f0f8ff;\n}\n\n\n\n.empty-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #6c757d;\n}\n.empty-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 10px;\n}\n.empty-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 12px;\n  min-width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_error_message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n\n\n.delete-entrepriseClient-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: rgba(122, 122, 122, 0.9058823529);\n  cursor: pointer;\n  font-size: 20px;\n  padding: 0;\n  transition: color 0.2s;\n  bottom: 10px;\n  position: relative;\n  left: 10px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%]:hover {\n  color: #fa2a2a;\n}\n\n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 0;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #1b83f2;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #333;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n}\n\n.switch2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%]   .modal-content-averB[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n  color: #000; \n\n}\n\n.modal-actions-averB[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirmB[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1lZGl0LWVudHJlcHJpc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksV0FBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxT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QUNBLFlBQUE7RUFDQSxXQUFBLEVBQUEsNENBQUE7QUFobUJGOztBQW9tQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWptQkY7O0FBb21CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWptQkYiLCJmaWxlIjoiZGV0YWlsLWVkaXQtZW50cmVwcmlzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfY2xpZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4uY29udGVudF9jbGllbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbmZvcm1hdGlvbl9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fZ3JpZF90d28ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNyUgMmZyIDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uc2VjdGlvbl90aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4udGl0bGVfZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNlY3Rpb25fdGl0bGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlMjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMjFweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YjZjYjcsICMxODI4NDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnByb2ZpbF9zZWN0aW9uIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJvZmlsX3NlY3Rpb25fZmFjdHVyZSB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xufVxuXG4uaW5mb19zZWN0aW9uIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaW5mb19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4uY2hhbXBfZ3JpZF90cnVlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG5cbi5wcm9maWxlLWltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLnByb2ZpbGUtaW1nLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FtZXJhLWljb24ge1xuICB3aWR0aDogMzBweDsgLyogYWp1c3RlIHNlbG9uIGxhIHRhaWxsZSB2b3VsdWUgKi9cbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uaWNvbl9lZGl0IHtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLmljb25fZWRpdCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5pbmZvcm1hdGlvbl9ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmluZm9ybWF0aW9uX2dyaWRfdHdvIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIFxuICAgIC5pbmZvX2dyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi5pbmZvX2l0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbmZvX3ZhbHVlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLmNvbnRhY3RfaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3RfaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuICAgICAgICBcbi5jb250YWN0X2ljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICM0YjZjYjc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YWcge1xuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiAgICAgICAgXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMKrIHNsaWRlciDCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IFxuICBsZWZ0OiAycHg7IFxuICByaWdodDogMDsgXG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gY29udGVudDogXCJcIjtcbiAgLy8gaGVpZ2h0OiAxOHB4OyBcbiAgLy8gd2lkdGg6IDE4cHg7XG4gIC8vIGxlZnQ6IDNweDsgXG4gIC8vIGJvdHRvbTogM3B4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLy8gdHJhbnNpdGlvbjogLjRzO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiAxMXB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMOpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEJ1dHRvbiBcblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2ZmNDQ0NDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG4gIFxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogU3R5bGVzIGNvbW11bnMgcG91ciBsZXMgZGV1eCBjb21wb3NhbnRzICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgfVxuICBcbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICB0Ym9keSB0ciB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICB9XG4gIH1cbiAgXG4gIHRmb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y1O1xuICAgIFxuICAgIHRkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBcbiAgJi5kcmFmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBcbiAgJi5zZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAgIGNvbG9yOiAjODU2NDA0O1xuICB9XG4gIFxuICAmLmFwcHJvdmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWUyO1xuICAgIGNvbG9yOiAjMDAwMGZmO1xuICB9XG4gIFxuICAmLnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlNmQ1O1xuICAgIGNvbG9yOiAjMDA4MDAwO1xuICB9XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICAuc3BpbiB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogI2NlZDRkYTtcbiAgfVxuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhmODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgdGFibGVhdSBhdmVjIGhlYWRlciBldCBmb290ZXIgZml4ZXMgKi9cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnN0aWNreS1mb290ZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uc3RpY2t5LWZvb3RlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBQb3VyIGwnZW4tdMOqdGUgZml4ZSAqL1xudGhlYWQgdHIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubG9nb19lbnRyZXByaXNlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIC8vIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFyYTEge1xuICBmb250LXNpemU6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ociB7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4udGl0cmUgaDYge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiA5MyU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGZvbnQtc2l6ZTogNXB4O1xufVxuXG4udGFibGUgLnRoLCAudGFibGUgLnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBmb250LXNpemU6IDVweDtcbn1cblxuLnRhYmxlIC50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJsZSAudGZvb3QgLnRkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHRhYmxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIFxuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIHRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gICAgICBwYWRkaW5nOiA1cHggM3B4O1xuICB9XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZGl2MSB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgfVxuLmRpdjIgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cbi5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG5cbi5zZWxlY3RlZC1yb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY3MkU0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xufVxuXG5cbi8qIEFqb3V0ZXIgY2VzIHN0eWxlcyBhdSBmaWNoaWVyIFNDU1MgZXhpc3RhbnQgKi9cblxuLmVtcHR5LXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cbi50YWItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICBcbiAgLmxvYWRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDsgXG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4vKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuICBcbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbiAgLy8gQWpvdXRlciBsJ2FuaW1hdGlvbiBwb3VyIHRvdXMgbGVzIHR5cGVzIGQnYWxlcnRlc1xuICAuYWxlcnQge1xuICAgIC8vIC4uLiBzdHlsZXMgZXhpc3RhbnRzXG4gICAgXG4gICAgJi13YXJuaW5nIHtcbiAgICAgIEBleHRlbmQgLmFsZXJ0O1xuICAgICAgLy8gLi4uIHN0eWxlcyBzcMOpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcOudHJlIGV0IGRpc3BhcmHDrnRyZSBsZSB0b2FzdCAqL1xuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDrnQgYXZlYyB1biBsw6lnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gICAgfVxuICB9XG5cbi8qIFLDqXV0aWxpc2VyIGxlcyBzdHlsZXMgZGUgZGV0YWlsLWVkaXQtY2xpZW50LmNvbXBvbmVudC5zY3NzICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5jb250YWluZXJfZ2xvYmFsIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgZ2FwOiAxNXB4O1xuLy8gfVxuXG4vLyAuY29udGFpbmVyX2Zvcm11bGFpcmUge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyOyAgLyogcmFuZ8OpZSAxID0gaGF1dGV1ciBhdXRvbWF0aXF1ZSAobGUgdGl0cmUpLCByYW5nw6llIDIgPSByZXN0ZSBkZSBsYSBoYXV0ZXVyICovXG4vLyAgIGhlaWdodDogMTAwJTsgICAgICAgICAgICAgICAgICAgLyogb2NjdXBlIHRvdXRlIGxhIGhhdXRldXIgZGlzcG9uaWJsZSAqL1xuLy8gfVxuXG4vLyAuY29udGVudF9mb3JtdWxhaXJlIHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIC8vIGhlaWdodDogNTB2aDtcbi8vICAgbWF4LWhlaWdodDogNTd2aDtcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcbi8vICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuLy8gICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4vLyAgIHBhZGRpbmc6IDBweDtcbi8vICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcblxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4vLyAgICAgd2lkdGg6IDJweDtcbi8vICAgICBoZWlnaHQ6IDJweDtcbi8vICAgfVxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgfVxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gLlRpdGxlIHtcbi8vICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgdG9wOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICB6LWluZGV4OiAxMDtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBwYWRkaW5nOiA2cHggMCAwIDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IHJnYmEoMzMsIDM1LCAzOCwgMC4xKSAwcHggMTBweCAxMHB4IC0xMHB4O1xuLy8gfVxuXG4vLyAuZm9ybV9sZWZ0X3JpZ2h0IHtcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcbi8vICAgLyogZmFjdWx0YXRpZiA6IHNpIHZvdXMgdm91bGV6IHVuIHBldGl0IHBhZGRpbmcgcG91ciBsZSBzY3JvbGwgKi9cbi8vICAgcGFkZGluZy1yaWdodDogOHB4O1xuLy8gfVxuXG4vLyAgIC8qIGZvcm11bGFpcmUgKi9cbiAgXG5cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czIge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG1pbi13aWR0aDogMjUwcHg7XG4vLyAgICAgaGVpZ2h0OiA1N3B4O1xuLy8gICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgICAgYm9yZGVyLXRvcDogbm9uZTtcbi8vICAgICBib3JkZXItbGVmdDogbm9uZTtcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4vLyAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgY29sb3I6ICMwMDAwMDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4vLyAgICAgcmVzaXplOiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbi8vICAgICBib3JkZXItdG9wOiBub25lO1xuLy8gICAgIGJvcmRlci1sZWZ0OiBub25lO1xuLy8gICAgIGJvcmRlci1yaWdodDogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDIycHg7XG4vLyAgICAgbGVmdDogMHB4O1xuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgIGNvbG9yOiAjOTk5O1xuLy8gICB9XG4gIFxuICBcbi8vICAgLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbi8vICAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLy8gICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbi8vICAgICBjb2xvcjogIzA2NzJFNDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbi8vICAgfVxuICBcbi8vICAgLmluZm9fdGl0cmVfaW5wdXQge1xuLy8gICAgIHBhZGRpbmc6IDAgMTJweDsgXG4vLyAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4vLyAgIH1cblxuLy8gICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0MiB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuLy8gICB9XG4gIFxuLy8gICAuY2hhbXBfZ3JpZCB7XG4vLyAgICAgZGlzcGxheTogZ3JpZDtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuLy8gICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICAgIGdyaWQtcm93LWdhcDogMHB4O1xuLy8gICAgIGdhcDogMjBweDtcbi8vICAgfVxuICBcbi8vICAgLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuLy8gICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbi8vICAgLy8gICB3aWR0aDogMTAwJTtcbi8vICAgLy8gfVxuICBcbiAgXG4vLyAgIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4OyBcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgfVxuXG4vLyAgICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4vLyAgICAuaW5mb3JtYXRpb25fY2FkcmUge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgfVxuXG4vLyAgIC5kb3VibGVfaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZ2FwOiAyMHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuLy8gICB9XG5cbi8vIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4vLyAuY29udGFpbmVyX2ZpbGUge1xuLy8gICAgIC8vIGhlaWdodDogMTUwcHg7XG4vLyAgICAgd2lkdGg6IDE1MHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGdhcDogNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi8vIC5oZWFkZXJfZmlsZSB7XG4vLyAgICAgLy8gZmxleDogMTtcbi8vICAgICBoZWlnaHQ6IDE0MHB4O1xuLy8gICAgIHdpZHRoOiAxNDBweDtcbi8vICAgICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgaW1ne1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIHN2ZyB7XG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIHAge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXJfZmlsZSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuLy8gICAgIHdpZHRoOiAxNDBweDtcbi8vICAgICBoZWlnaHQ6IDM1cHg7XG4vLyAgICAgcGFkZGluZzogNXB4IDhweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgbWFyZ2luLXRvcDogM3B4O1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyX2ZpbGUgcCB7XG4vLyAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXJfZmlsZSBpIHtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4vLyAgIH1cbiAgXG4vLyAgICNmaWxlIHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgaW1nIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cblxuLy8gICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gICB9XG4gIFxuLy8gICAuZXJyb3ItbWVzc2FnZSB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuLy8gICB9XG5cbi8vICAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIH1cblxuXG5cblxuXG5cblxuLy8gICAvLyBUb2dnbGUgXG5cbi8vIC5zd2l0Y2gge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgd2lkdGg6IDMwcHg7XG4vLyAgIGhlaWdodDogMTVweDtcbi8vIH1cblxuLy8gLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4vLyAuc3dpdGNoIGlucHV0IHtcbi8vICAgb3BhY2l0eTogMDtcbi8vICAgd2lkdGg6IDA7XG4vLyAgIGhlaWdodDogMDtcbi8vIH1cblxuLy8gLyogTGUgwqsgc2xpZGVyIMK7ICovXG4vLyAuc2xpZGVyIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRvcDogMDsgXG4vLyAgIGxlZnQ6IDJweDsgXG4vLyAgIHJpZ2h0OiAwOyBcbi8vICAgYm90dG9tOiAwO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuLy8gICB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4vLyB9XG5cbi8vIC5zbGlkZXI6YmVmb3JlIHtcbi8vICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAvLyBjb250ZW50OiBcIlwiO1xuLy8gICAvLyBoZWlnaHQ6IDE4cHg7IFxuLy8gICAvLyB3aWR0aDogMThweDtcbi8vICAgLy8gbGVmdDogM3B4OyBcbi8vICAgLy8gYm90dG9tOiAzcHg7XG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAvLyB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGhlaWdodDogMTFweDtcbi8vICAgd2lkdGg6IDExcHg7XG4vLyAgIGxlZnQ6IDJweDtcbi8vICAgYm90dG9tOiAycHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICB0cmFuc2l0aW9uOiAwLjRzO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbi8vIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xuLy8gfVxuXG4vLyBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG4vLyB9XG5cbi8vIC5pbnB1dF9jdXJzb3Ige1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pY29uX2Fycm93IHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICByaWdodDogMTBweDtcbi8vICAgdG9wOiAyNXB4O1xuLy8gfVxuXG4vLyAuaWNvbl9hcnJvdyBpIHtcbi8vICAgZm9udC1zaXplOiAxN3B4O1xuLy8gICBjb2xvcjogIzAwMDtcbi8vIH1cblxuLy8gLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi8vIC5wb3B1cC1vdmVybGF5IHtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHotaW5kZXg6IDEwMDA7XG4vLyB9XG5cbi8vIC5wb3B1cC1jb250ZW50IHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgd2lkdGg6IDUwJTtcbi8vIH1cblxuLy8gLnBvcHVwLWhlYWRlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gLnBvcHVwLWhlYWRlciBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMThweDtcbi8vIH1cblxuLy8gLmNsb3NlLWJ0biB7XG4vLyAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5wb3B1cC1mb290ZXIge1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICB0ZXh0LWFsaWduOiByaWdodDtcbi8vIH1cblxuLy8gLy8gQnV0dG9uIFxuXG4vLyAuYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmJ0bi1jYW5jZWwge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuLy8gICBwYWRkaW5nOiA2cHggMjVweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyB9XG5cbi8vIC5idG4tY2FuY2VsOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbi8vICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuLy8gfVxuXG4vLyAuYnRuLXN1Ym1pdCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4vLyAgIHBhZGRpbmc6IDZweCAyNXB4O1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjdXJzb3I6IG5vLWRyb3A7XG4vLyB9XG5cbi8vIC5idG4tc3VibWl0OmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbi8vICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuLy8gfVxuXG4vLyAuZXJyb3ItdGV4dCB7XG4vLyAgIGNvbG9yOiAjZmY0NDQ0O1xuLy8gICBmb250LXNpemU6IDAuOHJlbTtcbi8vICAgbWFyZ2luLXRvcDogNHB4O1xuLy8gfVxuXG4vLyAuYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4vLyAgIG9wYWNpdHk6IDAuNztcbi8vICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbi8vIH1cblxuLy8gLmVycm9yLW1lc3NhZ2VBcGkge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiAtMjBweDtcbi8vICAgbGVmdDogLTIwcHg7XG4vLyB9XG5cbi8vIC5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHRvcDogLTIwcHg7XG4vLyAgIGxlZnQ6IC0yMHB4O1xuLy8gfVxuXG4vLyAuZXJyb3ItbWVzc2FnZUFwaTIge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gLmVycm9yIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiAjZmYwMDAwO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gfVxuXG4vLyAuZ3JpZF9jb2xvbm5lIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgZ2FwOiAyMHB4O1xuLy8gfVxuICBcblxuXG4uZGVsZXRlLWVudHJlcHJpc2VDbGllbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIFxufVxuXG4uZGVsZXRlLWJvdXRpcXVlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjN2E3YTdhZTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbiAgXG59XG5cbi5kZWxldGUtYm91dGlxdWUtYnRuOmhvdmVye1xuICBjb2xvcjogI2ZhMmEyYTtcbn1cblxuLmJ0bi1jb25maXJtLFxuLmJ0bi1jYW5jZWwge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1jb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjgzZjI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG5cbi5zd2l0Y2gyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyQiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXJCIC5tb2RhbC1jb250ZW50LWF2ZXJCIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjMDAwOyAvKiBwb3VyIHMnYXNzdXJlciBxdWUgbGUgdGV4dGUgZXN0IHZpc2libGUgKi9cbn1cblxuXG4ubW9kYWwtYWN0aW9ucy1hdmVyQiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tY29uZmlybUIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2RldGFpbC1lZGl0LWVudHJlcHJpc2UvZGV0YWlsLWVkaXQtZW50cmVwcmlzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxXQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFB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QUE7QUFobUJGOztBQW1tQkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUEsRUFBQSw0Q0FBQTtBQWhtQkY7O0FBb21CQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBam1CRjs7QUFvbUJBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBam1CRjtBQUNBLG9taURBQW9taUQiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2NsaWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuLmNvbnRlbnRfY2xpZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2dyaWRfdHdvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjclIDJmciA7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2VjdGlvbl90aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnRpdGxlX2Rpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWN0aW9uX3RpdGxlOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRiNmNiNywgIzE4Mjg0OCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2VjdGlvbl90aXRsZTI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5wcm9maWxfc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnByb2ZpbF9zZWN0aW9uX2ZhY3R1cmUge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cblxuLmluZm9fc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9fZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMjBweDtcbn1cblxuLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuLmNoYW1wX2dyaWRfdHJ1ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuXG4ucHJvZmlsZS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBsZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhbWVyYS1pY29uIHtcbiAgd2lkdGg6IDMwcHg7IC8qIGFqdXN0ZSBzZWxvbiBsYSB0YWlsbGUgdm91bHVlICovXG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmljb25fZWRpdCB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG5cbi5pY29uX2VkaXQgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaW5mb3JtYXRpb25fZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5pbmZvcm1hdGlvbl9ncmlkX3R3byB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICBcbiAgICAuaW5mb19ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4uaW5mb19pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mb19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW5mb192YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5jb250YWN0X2luZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250YWN0X2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiAgICAgICAgXG4uY29udGFjdF9pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjNGI2Y2I3O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGFnIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4gICAgICAgIFxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDDgsKrIHNsaWRlciDDgsK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgXG4gIGxlZnQ6IDJweDsgXG4gIHJpZ2h0OiAwOyBcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBjb250ZW50OiBcIlwiO1xuICAvLyBoZWlnaHQ6IDE4cHg7IFxuICAvLyB3aWR0aDogMThweDtcbiAgLy8gbGVmdDogM3B4OyBcbiAgLy8gYm90dG9tOiAzcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyB0cmFuc2l0aW9uOiAuNHM7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDExcHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI1cHg7XG59XG5cbi5pY29uX2Fycm93IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vLyBCdXR0b24gXG5cbi5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICNmZjQ0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuICBcbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFN0eWxlcyBjb21tdW5zIHBvdXIgbGVzIGRldXggY29tcG9zYW50cyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAvLyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvLyBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIH1cbiAgXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgdGJvZHkgdHIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgfVxuICB9XG4gIFxuICB0Zm9vdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcbiAgICBcbiAgICB0ZCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgXG4gICYuZHJhZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgXG4gICYuc2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcbiAgICBjb2xvcjogIzg1NjQwNDtcbiAgfVxuICBcbiAgJi5hcHByb3ZlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVlMjtcbiAgICBjb2xvcjogIzAwMDBmZjtcbiAgfVxuICBcbiAgJi52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZTZkNTtcbiAgICBjb2xvcjogIzAwODAwMDtcbiAgfVxufVxuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6ICNjZWQ0ZGE7XG4gIH1cbiAgXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHRhYmxlYXUgYXZlYyBoZWFkZXIgZXQgZm9vdGVyIGZpeGVzICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGlja3ktZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnN0aWNreS1mb290ZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogUG91ciBsJ2VuLXTDg8KqdGUgZml4ZSAqL1xudGhlYWQgdHIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubG9nb19lbnRyZXByaXNlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIC8vIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFyYTEge1xuICBmb250LXNpemU6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ociB7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4udGl0cmUgaDYge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiA5MyU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGZvbnQtc2l6ZTogNXB4O1xufVxuXG4udGFibGUgLnRoLCAudGFibGUgLnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBmb250LXNpemU6IDVweDtcbn1cblxuLnRhYmxlIC50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJsZSAudGZvb3QgLnRkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHRhYmxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIFxuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIHRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gICAgICBwYWRkaW5nOiA1cHggM3B4O1xuICB9XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZGl2MSB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgfVxuLmRpdjIgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cbi5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG5cbi5zZWxlY3RlZC1yb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY3MkU0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xufVxuXG5cbi8qIEFqb3V0ZXIgY2VzIHN0eWxlcyBhdSBmaWNoaWVyIFNDU1MgZXhpc3RhbnQgKi9cblxuLmVtcHR5LXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cbi50YWItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICBcbiAgLmxvYWRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDsgXG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4vKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuICBcbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbiAgLy8gQWpvdXRlciBsJ2FuaW1hdGlvbiBwb3VyIHRvdXMgbGVzIHR5cGVzIGQnYWxlcnRlc1xuICAuYWxlcnQge1xuICAgIC8vIC4uLiBzdHlsZXMgZXhpc3RhbnRzXG4gICAgXG4gICAgJi13YXJuaW5nIHtcbiAgICAgIEBleHRlbmQgLmFsZXJ0O1xuICAgICAgLy8gLi4uIHN0eWxlcyBzcMODwqljaWZpcXVlc1xuICAgIH1cbiAgfVxuICBcbiAgLyogQW5pbWF0aW9uIHBvdXIgZmFpcmUgYXBwYXJhw4PCrnRyZSBldCBkaXNwYXJhw4PCrnRyZSBsZSB0b2FzdCAqL1xuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDg8KudCBhdmVjIHVuIGzDg8KpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICAgIH1cbiAgfVxuXG4vKiBSw4PCqXV0aWxpc2VyIGxlcyBzdHlsZXMgZGUgZGV0YWlsLWVkaXQtY2xpZW50LmNvbXBvbmVudC5zY3NzICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5jb250YWluZXJfZ2xvYmFsIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgZ2FwOiAxNXB4O1xuLy8gfVxuXG4vLyAuY29udGFpbmVyX2Zvcm11bGFpcmUge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyOyAgLyogcmFuZ8ODwqllIDEgPSBoYXV0ZXVyIGF1dG9tYXRpcXVlIChsZSB0aXRyZSksIHJhbmfDg8KpZSAyID0gcmVzdGUgZGUgbGEgaGF1dGV1ciAqL1xuLy8gICBoZWlnaHQ6IDEwMCU7ICAgICAgICAgICAgICAgICAgIC8qIG9jY3VwZSB0b3V0ZSBsYSBoYXV0ZXVyIGRpc3BvbmlibGUgKi9cbi8vIH1cblxuLy8gLmNvbnRlbnRfZm9ybXVsYWlyZSB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICAvLyBoZWlnaHQ6IDUwdmg7XG4vLyAgIG1heC1oZWlnaHQ6IDU3dmg7XG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbi8vICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuLy8gICBwYWRkaW5nOiAwcHg7XG4vLyAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG5cbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuLy8gICAgIHdpZHRoOiAycHg7XG4vLyAgICAgaGVpZ2h0OiAycHg7XG4vLyAgIH1cbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIH1cbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIC5UaXRsZSB7XG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgIHRvcDogMDtcbi8vICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgei1pbmRleDogMTA7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgcGFkZGluZzogNnB4IDAgMCAxMHB4O1xuLy8gICBib3gtc2hhZG93OiByZ2JhKDMzLCAzNSwgMzgsIDAuMSkgMHB4IDEwcHggMTBweCAtMTBweDtcbi8vIH1cblxuLy8gLmZvcm1fbGVmdF9yaWdodCB7XG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyAgIC8qIGZhY3VsdGF0aWYgOiBzaSB2b3VzIHZvdWxleiB1biBwZXRpdCBwYWRkaW5nIHBvdXIgbGUgc2Nyb2xsICovXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbi8vIH1cblxuLy8gICAvKiBmb3JtdWxhaXJlICovXG4gIFxuXG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtaW4td2lkdGg6IDI1MHB4O1xuLy8gICAgIGhlaWdodDogNTdweDtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgIGJvcmRlci10b3A6IG5vbmU7XG4vLyAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuLy8gICAgIG1hcmdpbjogMTBweCAwIDA7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICAgIGNvbG9yOiAjMDAwMDAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICBwYWRkaW5nLXRvcDogMTBweDtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuLy8gICAgIHJlc2l6ZTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4vLyAgICAgYm9yZGVyLXRvcDogbm9uZTtcbi8vICAgICBib3JkZXItbGVmdDogbm9uZTtcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAyMnB4O1xuLy8gICAgIGxlZnQ6IDBweDtcbi8vICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vICAgICBjb2xvcjogIzk5OTtcbi8vICAgfVxuICBcbiAgXG4vLyAgIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4vLyAgICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgfVxuICBcbi8vICAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi8vICAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4vLyAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgfVxuICBcbi8vICAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbi8vICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbmZvX3RpdHJlX2lucHV0IHtcbi8vICAgICBwYWRkaW5nOiAwIDEycHg7IFxuLy8gICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuLy8gICB9XG5cbi8vICAgLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5jaGFtcF9pbnB1dDIge1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICB3aWR0aDogNTAlO1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2dyaWQge1xuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbi8vICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbi8vICAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbi8vICAgICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgICBnYXA6IDIwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbi8vICAgLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4vLyAgIC8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIC8vIH1cbiAgXG4gIFxuLy8gICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDsgXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4vLyAgIH1cbiAgXG4vLyAgIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgIH1cblxuLy8gICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuLy8gICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDA7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIH1cblxuLy8gICAuZG91YmxlX2lucHV0IHtcbi8vICAgICBkaXNwbGF5OiBmbGV4OyBcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGdhcDogMjBweDtcbi8vICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbi8vICAgfVxuXG4vLyAvKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuLy8gLmNvbnRhaW5lcl9maWxlIHtcbi8vICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuLy8gICAgIHdpZHRoOiAxNTBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICBnYXA6IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gfVxuXG4vLyAuaGVhZGVyX2ZpbGUge1xuLy8gICAgIC8vIGZsZXg6IDE7XG4vLyAgICAgaGVpZ2h0OiAxNDBweDtcbi8vICAgICB3aWR0aDogMTQwcHg7XG4vLyAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIGltZ3tcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4vLyAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXJfZmlsZSBzdmcge1xuLy8gICAgIGhlaWdodDogMTAwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXJfZmlsZSBwIHtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyX2ZpbGUge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbi8vICAgICB3aWR0aDogMTQwcHg7XG4vLyAgICAgaGVpZ2h0OiAzNXB4O1xuLy8gICAgIHBhZGRpbmc6IDVweCA4cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgIG1hcmdpbi10b3A6IDNweDtcbi8vICAgfVxuICBcbi8vICAgLmZvb3Rlcl9maWxlIHAge1xuLy8gICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyX2ZpbGUgaSB7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIG1hcmdpbi1yaWdodDogN3B4O1xuLy8gICB9XG4gIFxuLy8gICAjZmlsZSB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIGltZyB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG5cbi8vICAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcbi8vICAgfVxuICBcbi8vICAgLmVycm9yLW1lc3NhZ2Uge1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBjb2xvcjogcmVkO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbi8vICAgfVxuXG4vLyAgIC5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICB9XG5cblxuXG5cblxuXG5cbi8vICAgLy8gVG9nZ2xlIFxuXG4vLyAuc3dpdGNoIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAzMHB4O1xuLy8gICBoZWlnaHQ6IDE1cHg7XG4vLyB9XG5cbi8vIC8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLy8gLnN3aXRjaCBpbnB1dCB7XG4vLyAgIG9wYWNpdHk6IDA7XG4vLyAgIHdpZHRoOiAwO1xuLy8gICBoZWlnaHQ6IDA7XG4vLyB9XG5cbi8vIC8qIExlIMOCwqsgc2xpZGVyIMOCwrsgKi9cbi8vIC5zbGlkZXIge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgdG9wOiAwOyBcbi8vICAgbGVmdDogMnB4OyBcbi8vICAgcmlnaHQ6IDA7IFxuLy8gICBib3R0b206IDA7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4vLyAgIHRyYW5zaXRpb246IC40cztcbi8vICAgYm9yZGVyLXJhZGl1czogMjRweDtcbi8vIH1cblxuLy8gLnNsaWRlcjpiZWZvcmUge1xuLy8gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIC8vIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIC8vIGhlaWdodDogMThweDsgXG4vLyAgIC8vIHdpZHRoOiAxOHB4O1xuLy8gICAvLyBsZWZ0OiAzcHg7IFxuLy8gICAvLyBib3R0b206IDNweDtcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIC8vIHRyYW5zaXRpb246IC40cztcbi8vICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgaGVpZ2h0OiAxMXB4O1xuLy8gICB3aWR0aDogMTFweDtcbi8vICAgbGVmdDogMnB4O1xuLy8gICBib3R0b206IDJweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHRyYW5zaXRpb246IDAuNHM7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cblxuLy8gLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDg8KpICovXG4vLyBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbi8vIH1cblxuLy8gaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xuLy8gfVxuXG4vLyAuaW5wdXRfY3Vyc29yIHtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuaWNvbl9hcnJvdyB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgcmlnaHQ6IDEwcHg7XG4vLyAgIHRvcDogMjVweDtcbi8vIH1cblxuLy8gLmljb25fYXJyb3cgaSB7XG4vLyAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgY29sb3I6ICMwMDA7XG4vLyB9XG5cbi8vIC8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4vLyAucG9wdXAtb3ZlcmxheSB7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgdG9wOiAwO1xuLy8gICBsZWZ0OiAwO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICB6LWluZGV4OiAxMDAwO1xuLy8gfVxuXG4vLyAucG9wdXAtY29udGVudCB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAyMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA4cHg7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyB9XG5cbi8vIC5wb3B1cC1oZWFkZXIge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIC5wb3B1cC1oZWFkZXIgaDQge1xuLy8gICBmb250LXNpemU6IDE4cHg7XG4vLyB9XG5cbi8vIC5jbG9zZS1idG4ge1xuLy8gICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAucG9wdXAtZm9vdGVyIHtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4vLyB9XG5cbi8vIC8vIEJ1dHRvbiBcblxuLy8gLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbi8vICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5idG4tY2FuY2VsIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbi8vICAgcGFkZGluZzogNnB4IDI1cHg7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuXG4vLyAuYnRuLWNhbmNlbDpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4vLyAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbi8vIH1cblxuLy8gLmJ0bi1zdWJtaXQge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuLy8gICBwYWRkaW5nOiA2cHggMjVweDtcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY3Vyc29yOiBuby1kcm9wO1xuLy8gfVxuXG4vLyAuYnRuLXN1Ym1pdDpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4vLyAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbi8vIH1cblxuLy8gLmVycm9yLXRleHQge1xuLy8gICBjb2xvcjogI2ZmNDQ0NDtcbi8vICAgZm9udC1zaXplOiAwLjhyZW07XG4vLyAgIG1hcmdpbi10b3A6IDRweDtcbi8vIH1cblxuLy8gLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuLy8gICBvcGFjaXR5OiAwLjc7XG4vLyAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4vLyB9XG5cbi8vIC5lcnJvci1tZXNzYWdlQXBpIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiByZWQ7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHRvcDogLTIwcHg7XG4vLyAgIGxlZnQ6IC0yMHB4O1xuLy8gfVxuXG4vLyAuc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB0b3A6IC0yMHB4O1xuLy8gICBsZWZ0OiAtMjBweDtcbi8vIH1cblxuLy8gLmVycm9yLW1lc3NhZ2VBcGkyIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiByZWQ7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyAuc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBjb2xvcjogIzA2NzJFNDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5lcnJvciB7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBjb2xvcjogI2ZmMDAwMDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cblxuLy8gLmdyaWRfY29sb25uZSB7XG4vLyAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4vLyAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuLy8gICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbi8vICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4vLyAgIGdhcDogMjBweDtcbi8vIH1cbiAgXG5cblxuLmRlbGV0ZS1lbnRyZXByaXNlQ2xpZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBcbn1cblxuLmRlbGV0ZS1ib3V0aXF1ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzdhN2E3YWU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIFxufVxuXG4uZGVsZXRlLWJvdXRpcXVlLWJ0bjpob3ZlcntcbiAgY29sb3I6ICNmYTJhMmE7XG59XG5cbi5idG4tY29uZmlybSxcbi5idG4tY2FuY2VsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4M2YyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG4uc3dpdGNoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlckIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyQiAubW9kYWwtY29udGVudC1hdmVyQiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogIzAwMDsgLyogcG91ciBzJ2Fzc3VyZXIgcXVlIGxlIHRleHRlIGVzdCB2aXNpYmxlICovXG59XG5cblxuLm1vZGFsLWFjdGlvbnMtYXZlckIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuLWNvbmZpcm1CIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_detail-edit-entreprise_detail-edit-entreprise_component_ts.js.map