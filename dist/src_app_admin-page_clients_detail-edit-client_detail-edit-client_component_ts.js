"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_detail-edit-client_detail-edit-client_component_ts"],{

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

/***/ 74229:
/*!***************************************************************************************!*\
  !*** ./src/app/admin-page/clients/detail-edit-client/detail-edit-client.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailEditClientComponent: () => (/* binding */ DetailEditClientComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 56755);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/client-service */ 47746);
/* harmony import */ var _SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/factureproforma-service */ 72409);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../SERVICES/VenteService/vente-service */ 44413);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);


























const _c0 = ["fileInput"];
const _c1 = () => ({
  standalone: true
});
const _c2 = (a0, a1, a2, a3) => ({
  "draft": a0,
  "sent": a1,
  "approved": a2,
  "valid": a3
});
function DetailEditClientComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function DetailEditClientComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function DetailEditClientComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessageApi, " ");
  }
}
function DetailEditClientComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93)(1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function DetailEditClientComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_i_42_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_i_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_i_43_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_50_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_50_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailEditClientComponent_div_50_small_1_Template, 2, 0, "small", 77)(2, DetailEditClientComponent_div_50_small_2_Template, 2, 0, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.modifierClientForm.get("nomComplet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r1.modifierClientForm.get("nomComplet")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function DetailEditClientComponent_div_55_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailEditClientComponent_div_55_small_1_Template, 2, 0, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r1.modifierClientForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function DetailEditClientComponent_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", nomPays_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", nomPays_r5, " ");
  }
}
function DetailEditClientComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 100)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 101)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "J'appartient \u00E0 une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "label", 102)(7, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function DetailEditClientComponent_div_85_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.isEntrepriseSelected, $event) || (ctx_r1.isEntrepriseSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isEntrepriseSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c1));
  }
}
function DetailEditClientComponent_div_86_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 99)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ent_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ent_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ent_r8.nom, " ");
  }
}
function DetailEditClientComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Mon entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-autocomplete", 108, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("optionSelected", function DetailEditClientComponent_div_86_Template_mat_autocomplete_optionSelected_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onEntrepriseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_86_Template_mat_option_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailEditClientComponent_div_86_mat_option_12_Template, 3, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const auto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r1.control)("matAutocomplete", auto_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r1.displayFnEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 4, ctx_r1.filteredOptions));
  }
}
function DetailEditClientComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 117)(3, "div", 118)(4, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_87_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToClients());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 120)(7, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_87_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.modifierClient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Annuler" : "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.modifierClientForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.modifierClientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.modifierClientForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.modifierClientForm.invalid);
  }
}
function DetailEditClientComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "h4", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00CAtes-vous s\u00FBr de vouloir supprimer ce Client ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 126)(7, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_88_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.confirmDeleteC());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "OUI");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_88_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.showConfirmationModalC = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "NON");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function DetailEditClientComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 129)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Factures client");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.factureCount);
  }
}
function DetailEditClientComponent_div_98_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r12.nomProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r12.ligneDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 5, ligne_r12.prixUnitaire));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r12.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 7, ligne_r12.montantTotal));
  }
}
function DetailEditClientComponent_div_98_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Remise 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DetailEditClientComponent_div_98_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "TVA 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DetailEditClientComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 131)(1, "div", 132)(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 135)(5, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "hr")(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 137)(14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Facture proforma: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 139)(19, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 141)(23, "div", 142)(24, "h6", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Doit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 144)(29, "h6", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Objet : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 145)(34, "table", 146)(35, "thead")(36, "tr")(37, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "PU");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, DetailEditClientComponent_div_98_tr_48_Template, 13, 9, "tr", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "tfoot", 149)(50, "tr")(51, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, DetailEditClientComponent_div_98_tr_56_Template, 5, 0, "tr", 77)(57, DetailEditClientComponent_div_98_tr_57_Template, 5, 0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "tr")(59, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](63, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 152)(65, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : Zero .....");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 154)(68, "div", 155)(69, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 157)(72, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 158)(75, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "p", 160)(78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 161)(81, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 162)(84, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.entrepriseLogo || ctx_r1.entrepriseLogo || "assets/img/Votre.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entrepriseNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Secteur: ", ctx_r1.entrepriseSecteur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Email: ", ctx_r1.entrepriseEmail, " T\u00E9l\u00E9phone: ", ctx_r1.entrepriseTelephone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.factureDetails.numeroFacture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r1.entrepriseSiege, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](21, 24, ctx_r1.factureDetails.dateCreation, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx_r1.factureDetails.client == null ? null : ctx_r1.factureDetails.client.nomComplet) || (ctx_r1.factureDetails.entrepriseClient == null ? null : ctx_r1.factureDetails.entrepriseClient.nom), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.factureDetails.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.factureDetails.lignesFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 27, ctx_r1.factureDetails.totalHT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.factureDetails.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.factureDetails.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](63, 29, ctx_r1.factureDetails.totalFacture));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entrepriseSignataire);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entrepriseSignataireNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.entrepriseSiteWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" NINA: ", ctx_r1.entrepriseNina, " RCCM: ", ctx_r1.entrepriseRccm, " NIF: ", ctx_r1.entrepriseNif, " Banque: ", ctx_r1.entrepriseBanque, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("Adresse : ", ctx_r1.entrepriseAdresse, " /", ctx_r1.entreprisePays, "");
  }
}
function DetailEditClientComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Cette facture n\u2019est pas li\u00E9e \u00E0 cet utilisateur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DetailEditClientComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Chargement des factures... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.errorFactures, " ");
  }
}
function DetailEditClientComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Aucune facture trouv\u00E9e pour ce client");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DetailEditClientComponent_table_112_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_table_112_tr_12_Template_tr_click_0_listener() {
      const facture_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onSelectFacture(facture_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td")(7, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("selected-row", ctx_r1.selectedFactureId === facture_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](facture_r14.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 7, facture_r14.dateFacture, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](12, _c2, facture_r14.statut === "BROUILLON", facture_r14.statut === "ENVOYE", facture_r14.statut === "APPROUVE", facture_r14.statut === "VALIDE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", facture_r14.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 10, facture_r14.totalFacture));
  }
}
function DetailEditClientComponent_table_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr", 80)(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Num\u00E9ro");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Montant");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailEditClientComponent_table_112_tr_12_Template, 12, 17, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.facturesClient);
  }
}
function DetailEditClientComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 83)(1, "table", 84)(2, "tfoot", 85)(3, "tr")(4, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 1, ctx_r1.getTotalFactures()), " ");
  }
}
function DetailEditClientComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 129)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Achat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.achatCount);
  }
}
function DetailEditClientComponent_div_120_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r15.nomProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 5, ligne_r15.prixUnitaire, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r15.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](10, 8, ligne_r15.montantLigne, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ligne_r15.remise);
  }
}
function DetailEditClientComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 131)(1, "div", 132)(2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 135)(5, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Nom Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Secteur Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Email: emailentreprise.com T\u00E9l\u00E9phone: 000000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "hr")(12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 137)(14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Facture proforma: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 139)(19, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 141)(23, "div", 142)(24, "h6", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Vendeur : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 144)(29, "h6", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Objet : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 145)(34, "table", 146)(35, "thead")(36, "tr")(37, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "PU");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "th", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Remise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, DetailEditClientComponent_div_120_tr_48_Template, 13, 11, "tr", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "tfoot", 149)(50, "tr")(51, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "tr")(57, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Remise 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](61, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "tr")(63, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](67, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 152)(69, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : Zero .....");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 154)(72, "div", 155)(73, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Signataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 157)(76, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Nom Signataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 158)(79, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "p", 160)(82, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "www.siteweb.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 161)(85, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " NINA: 000000 RCCM: 000000 NIF: 000000 Banque: Banque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 162)(88, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Adresse : Rue / Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedAchat.numeroFacture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](21, 8, ctx_r1.selectedAchat.dateVente, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.selectedAchat.nomVendeur);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.selectedAchat.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.selectedAchat.lignes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](55, 11, ctx_r1.selectedAchat.montantTotal, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](61, 14, ctx_r1.selectedAchat.remiseGlobale, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](67, 17, ctx_r1.selectedAchat.montantTotal - ctx_r1.selectedAchat.remiseGlobale, "1.0-0"));
  }
}
function DetailEditClientComponent_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_tr_140_Template_tr_click_0_listener() {
      const vente_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onSelectAchat(vente_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td")(7, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vente_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("selected-row", ctx_r1.selectedAchatId === vente_r17.venteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](vente_r17.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 6, vente_r17.dateVente, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](vente_r17.modePaiement);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 9, vente_r17.montantTotal, "1.0-0"));
  }
}
function DetailEditClientComponent_div_155_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ce champ est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailEditClientComponent_div_155_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", nomPays_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", nomPays_r19, " (", ctx_r1.paysIndicatifs[nomPays_r19].indicatif, ") ");
  }
}
function DetailEditClientComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 174)(1, "div", 175)(2, "div", 176)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Ajouter une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_155_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 178)(8, "div", 179)(9, "div", 54)(10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Nom entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DetailEditClientComponent_div_155_div_16_Template, 2, 0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 54)(22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 187)(31, "div", 44)(32, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function DetailEditClientComponent_div_155_Template_select_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onEntreprisePaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, DetailEditClientComponent_div_155_option_35_Template, 2, 3, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 49)(39, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("focus", function DetailEditClientComponent_div_155_Template_input_focus_39_listener() {
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onEntreprisePaysChange({
        target: {
          value: (tmp_4_0 = ctx_r1.entrepriseForm.get("pays")) == null ? null : tmp_4_0.value
        }
      }));
    })("input", function DetailEditClientComponent_div_155_Template_input_input_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.formatEntreprisePhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Secteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 191)(48, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_155_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_div_155_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.ajouterEntreprise());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r1.entrepriseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.entrepriseForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.entrepriseForm.get("nom")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.paysKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.entrepriseForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.entrepriseForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.entrepriseForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.entrepriseForm.invalid);
  }
}
class DetailEditClientComponent {
  ngOnInit() {
    this.getListEntreprise();
    this.initEntreprise();
    this.getClientForm();
    this.getEntrepriseForm();
    this.loadEntreprises();
    this.getRouteClient();
    this.modifierClientForm.disable();
    this.control.disable();
    this.loadEntrepriseInfo();
    this.getVentes();
  }
  constructor(router, fb, entrepriseService, clientService, route, factureService, usersService, venteService) {
    this.router = router;
    this.fb = fb;
    this.entrepriseService = entrepriseService;
    this.clientService = clientService;
    this.route = route;
    this.factureService = factureService;
    this.usersService = usersService;
    this.venteService = venteService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgUrl;
    this.ventes = [];
    this.errorMessage = '';
    this.errorMessageApi = '';
    this.successMessage = '';
    this.isEntrepriseSelected = false;
    this.showPopup = false;
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.selectedFile = null;
    this.imageFile = null;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
    this.loading = false;
    this.optionsEntreprise$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this.entrepriseRequiredError = false;
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
    this.isLoading = false;
    this.facturesClient = [];
    this.loadingFactures = false;
    this.errorFactures = '';
    this.selectedFactureId = null;
    this.selectedAchatId = null;
    this.selectedAchat = null;
    this.factureDetails = null;
    this.clientPhotoUrl = null;
    this.selectedImageFile = null;
    // Ajoutez ces propriétés dans la classe
    this.entrepriseNom = '';
    this.entrepriseSecteur = '';
    this.entrepriseEmail = '';
    this.entrepriseTelephone = '';
    this.entrepriseSiege = '';
    this.entrepriseLogo = '';
    this.entrepriseSiteWeb = '';
    this.entrepriseNina = '';
    this.entrepriseRccm = '';
    this.entrepriseNif = '';
    this.entrepriseBanque = '';
    this.entrepriseAdresse = '';
    this.entreprisePays = '';
    this.entrepriseSignataireNom = '';
    this.entrepriseSignataire = '';
    this.factureCount = 0;
    this.achatCount = 0;
    // Ajoutez cette propriété dans la classe
    this.isEditing = false;
    this.displayedColumns1 = ['numero', 'date', 'statut', 'montant'];
    // Définir les indicatifs par pays
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
    this.client = null;
    this.showConfirmationModalC = false;
    this.isDeletingC = false;
  }
  testImageCompression(file) {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!file) {
        console.log('Aucun fichier sélectionné.');
        return;
      }
      console.log('Taille originale:', file.size / 1024, 'Ko');
      // Options de compression
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true
      };
      try {
        const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(file, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
        // Vérifier si le fichier est bien en PNG/JPEG après compression
        if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
          console.error('Le fichier compressé n\'est pas un format supporté (PNG ou JPEG).');
          _this.errorMessage = 'Erreur de compression : Le format de l\'image n\'est pas valide.';
          return;
        }
        // Lire l'image compressée et afficher l'aperçu
        const reader = new FileReader();
        reader.onload = e => {
          _this.newPhotoUrl = e.target?.result;
          console.log('Image compressée prête à être affichée !');
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
      }
    })();
  }
  onFileSelected(event) {
    this.errorMessage = '';
    const input = event.target;
    if (input.files?.length) {
      const file = input.files[0];
      this.selectedImageFile = file;
      // Vérification du format
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Seuls les formats JPG, PNG sont acceptés';
        return;
      }
      this.testImageCompression(file);
      // Aperçu de l'image
      const reader = new FileReader();
      reader.onload = e => {
        this.newPhotoUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // Ajouter cette méthode pour charger les détails d'une facture
  loadFactureDetails(factureId) {
    this.factureService.getFactureProformaById(factureId).subscribe({
      next: details => {
        // Calculer le montant après remise
        const remiseValue = details.remise || 0;
        const totalApresRemise = details.totalHT - details.totalHT * remiseValue / 100;
        // Calculer la TVA si nécessaire
        let montantTVA = 0;
        let tauxTva = 0;
        if (details.tva) {
          // Calcul: TTC = (HT - Remise) + TVA
          // => TVA = TTC - (HT - Remise)
          montantTVA = details.totalFacture - totalApresRemise;
          // Calculer le taux de TVA réel
          if (totalApresRemise > 0) {
            tauxTva = montantTVA / totalApresRemise;
          }
        }
        // Valider et corriger la remise
        let remiseCorrigee = remiseValue;
        if (remiseCorrigee > 100) {
          console.warn(`Remise invalide corrigée: ${remiseCorrigee}% -> 100%`);
          remiseCorrigee = 100;
        }
        this.factureDetails = {
          ...details,
          montantTVA,
          tauxTva,
          remise: remiseCorrigee
        };
      },
      error: err => {
        console.error('Erreur chargement détails facture', err);
      }
    });
  }
  onSelectFacture(facture) {
    this.selectedFactureId = facture.id;
    this.loadFactureDetails(facture.id);
  }
  onSelectAchat(vente) {
    this.selectedAchat = vente; // garde l’objet complet
    this.selectedAchatId = vente.venteId; // garde juste l’ID (optionnel)
    console.log('Achat sélectionné:', this.selectedAchat);
  }
  // Méthode pour charger les infos entreprise
  loadEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: entreprise => {
        this.entrepriseNom = entreprise.nom;
        this.entrepriseSecteur = entreprise.secteur;
        this.entrepriseEmail = entreprise.email;
        this.entrepriseTelephone = entreprise.telephone;
        this.entrepriseSiege = entreprise.siege;
        this.entrepriseLogo = entreprise.logo ? `${this.imgUrl}${entreprise.logo}` : '';
        this.entrepriseSiteWeb = entreprise.siteWeb;
        this.entrepriseNina = entreprise.nina;
        this.entrepriseRccm = entreprise.rccm;
        this.entrepriseNif = entreprise.nif;
        this.entrepriseBanque = entreprise.banque;
        this.entrepriseAdresse = entreprise.adresse;
        this.entreprisePays = entreprise.pays;
        this.entrepriseSignataireNom = entreprise.signataireNom;
        this.entrepriseSignataire = entreprise.signataire;
      },
      error: err => {
        console.error('Erreur chargement infos entreprise', err);
      }
    });
  }
  // Calcul du total des factures
  // getTotalFactures(): number {
  //   return this.facturesClient.reduce((sum: number, facture: any) => 
  //     sum + facture.totalFacture, 0
  //   );
  // }
  getTotalFactures() {
    const total = this.facturesClient.reduce((sum, facture) => sum + facture.totalFacture, 0);
    // Arrondir à l'entier le plus proche
    return Math.round(total);
  }
  // Méthode pour déclencher l'input file
  triggerFileInput() {
    if (!this.isEditing) return;
    this.fileInput.nativeElement.click();
  }
  startEditing() {
    this.isEditing = true;
    this.modifierClientForm.enable(); // Active tous les champs du formulaire
  }
  // Ajoutez ces méthodes
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.indicatif = paysInfo.indicatif; // ← pas d’espace ici
      this.maxPhoneLength = paysInfo.longueur;
      this.modifierClientForm.get('telephone')?.enable();
      const ctrl = this.modifierClientForm.get('telephone');
      let valeur = ctrl?.value ?? '';
      const prefix = this.indicatif.replace(/\D/g, '');
      const chiffres = valeur.replace(/\D/g, '');
      // Si le numéro ne commence pas par l’indicatif, on réinitialise
      if (!chiffres.startsWith(prefix)) {
        ctrl?.setValue(this.indicatif);
      } else {
        const reste = chiffres.slice(prefix.length);
        ctrl?.setValue(this.indicatif + reste);
      }
      this.updatePhoneValidator(this.maxPhoneLength);
    } else {
      this.modifierClientForm.get('telephone')?.disable();
    }
  }
  // Modifiez la méthode updatePhoneValidator
  updatePhoneValidator(longueur) {
    const regex = new RegExp(`^\\${this.indicatif}\\s?\\d{${longueur}}$`);
    this.modifierClientForm.controls['telephone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(regex)]);
    this.modifierClientForm.controls['telephone'].updateValueAndValidity();
  }
  // Modifiez la méthode formatPhoneNumber
  formatPhoneNumber() {
    const ctrl = this.modifierClientForm.get('telephone');
    let valeur = ctrl?.value ?? '';
    // Nettoie tout sauf les chiffres
    let numerique = valeur.replace(/\D/g, '');
    const prefix = this.indicatif.replace(/\D/g, '');
    // Supprime l’indicatif s’il est déjà dans la valeur
    if (numerique.startsWith(prefix)) {
      numerique = numerique.slice(prefix.length);
    }
    // Formate et limite la longueur
    const numeroFormate = this.indicatif + numerique.slice(0, this.maxPhoneLength);
    ctrl?.setValue(numeroFormate);
  }
  goToStock() {
    this.router.navigate(['/clients']);
  }
  getRouteClient() {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      this.loadClientData();
    });
  }
  cancelEditing() {
    this.isEditing = false;
    this.modifierClientForm.disable();
    this.loadClientData(); // Recharge les données originales
  }
  getFullImageUrl(relativePath) {
    // Si le chemin est déjà une URL complète, retournez directement
    if (relativePath.startsWith('http')) return relativePath;
    // Si c'est un chemin d'assets, retournez tel quel
    if (relativePath.startsWith('assets')) return relativePath;
    // Sinon, construisez l'URL complète
    return relativePath ? `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgUrl}${relativePath}` : 'assets/img/profil.png';
  }
  loadClientData() {
    this.clientService.getClientById(this.clientId).subscribe({
      next: client => {
        // Transformez l'URL de la photo
        this.clientPhotoUrl = client.photo ? this.clientService.getFullImageUrl(client.photo) : 'assets/img/profil.png';
        this.populateForm(client);
        this.modifierClientForm.disable();
        this.handleEntreprise(client.entrepriseClient);
        this.loadFacturesClient();
        if (client.photo) {
          this.clientPhotoUrl = this.clientService.getFullImageUrl(client.photo);
        }
      },
      error: error => {
        this.errorMessage = 'Erreur lors du chargement du client';
        console.error('Erreur:', error);
      }
    });
  }
  // Dans loadFacturesClient, sélectionner la première facture par défaut
  loadFacturesClient() {
    this.loadingFactures = true;
    this.factureService.getFacturesByClient(this.clientId).subscribe({
      next: factures => {
        this.facturesClient = factures;
        this.factureCount = factures.length;
        this.loadingFactures = false;
        // Sélectionner la première facture par défaut
        if (this.facturesClient.length > 0) {
          this.onSelectFacture(this.facturesClient[0]);
        }
      },
      error: err => {
        this.errorFactures = 'Erreur lors du chargement des factures';
        this.loadingFactures = false;
        console.error(err);
      }
    });
  }
  //Load vente by client
  // Modifiez la méthode populateForm pour initialiser l'indicatif
  populateForm(client) {
    this.modifierClientForm.patchValue({
      nomComplet: client.nomComplet,
      email: client.email,
      telephone: client.telephone,
      adresse: client.adresse,
      poste: client.poste,
      pays: client.pays,
      ville: client.ville
    });
    // Initialiser l'indicatif si le pays est déjà défini
    if (client.telephone) {
      const phoneValue = client.telephone.replace(/(\+\d{3})(\d+)/, '$1 $2');
      this.modifierClientForm.patchValue({
        telephone: phoneValue
      });
    }
    if (client.pays) {
      const paysInfo = this.paysIndicatifs[client.pays];
      if (paysInfo) {
        this.indicatif = `${paysInfo.indicatif} `; // Ajout de l'espace
        this.maxPhoneLength = paysInfo.longueur;
        this.updatePhoneValidator(paysInfo.longueur);
      }
    }
  }
  handleEntreprise(entreprise) {
    this.isEntrepriseSelected = !!entreprise;
    this.control.setValue(entreprise);
    this.entrepriseRequiredError = false;
  }
  getClientForm() {
    this.modifierClientForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
      telephone: [''],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }
  getEntrepriseForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: [''],
      pays: ['']
    });
  }
  loadEntreprises() {
    const token = localStorage.getItem('accessToken') || '';
    if (!token) return;
    this.entrepriseService.getListEntreprise().subscribe(list => {
      this.optionsEntreprise$.next(list); // Mettre à jour le BehaviorSubject
      this.setupAutocomplete();
    }, err => {
      console.error('Erreur lors de la récupération des entreprises :', err);
      this.errorMessage = err.error?.error || 'Erreur chargement entreprises';
    });
  }
  // Ajouter une nouvelle méthode pour configurer l'autocomplete :
  setupAutocomplete() {
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom)), this.optionsEntreprise$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(([name, entreprises]) => name ? this._filter(name, entreprises) : entreprises));
  }
  getListEntreprise() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(token => {
      if (!token) {
        console.error('🔐 Aucun token trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprise();
    })).subscribe({
      next: entreprises => {
        console.log('🏢 Entreprises reçues depuis l\'API :', entreprises);
        // Mettre à jour le BehaviorSubject
        this.optionsEntreprise$.next(entreprises);
        this.filteredOptions = this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filter(name, this.optionsEntreprise$.value) : this.optionsEntreprise$.value.slice()));
      },
      error: error => {
        console.error('❌ Erreur lors de la récupération des entreprises :', error);
      }
    });
  }
  _filter(name, entreprises) {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e => e.nom.toLowerCase().includes(filterValue));
  }
  displayFnEntreprise(e) {
    return e ? e.nom : '';
  }
  // Methode pour la selection d'un entreprise
  onEntrepriseSelected(event) {
    // console.log("Entreprise selectionner :", event.entreprise.value);
    // if (event.entreprise && event.entreprise.value) {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(event.option.value.id);
    // } else {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(null);
    // }
  }
  // Ouvre/ferme le popup d’entreprise
  openPopup() {
    if (!this.isEditing) {
      this.errorMessage = "Activez le mode édition pour créer une entreprise";
      return;
    }
    if (!this.isEditing) return;
    this.getEntrepriseForm();
    this.entrepriseForm.reset();
    // Initialiser avec le Mali par défaut
    this.entrepriseForm.patchValue({
      pays: 'Mali'
    });
    // Forcer l'initialisation de l'indicatif
    this.onEntreprisePaysChange({
      target: {
        value: this.entrepriseForm.get('pays')?.value
      }
    });
    this.showPopup = true;
    this.entrepriseRequiredError = false;
  }
  closePopup() {
    this.showPopup = false;
  }
  initEntreprise() {
    this.entrepriseForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      pays: [''],
      email: [''],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }
  ajouterEntreprise() {
    if (this.entrepriseForm.invalid) return;
    // Activer l'indicateur de chargement
    this.isLoading = true;
    // Créer un délai de 3 secondes
    setTimeout(() => {
      const newEntreprise = {
        nom: this.entrepriseForm.value.nom,
        pays: this.entrepriseForm.value.pays,
        email: this.entrepriseForm.value.email,
        telephone: this.entrepriseForm.value.telephone,
        adresse: this.entrepriseForm.value.adresse,
        siege: this.entrepriseForm.value.siege,
        secteur: this.entrepriseForm.value.secteur,
        logo: this.entrepriseForm.value.logo,
        nif: this.entrepriseForm.value.nif,
        nina: this.entrepriseForm.value.nina,
        banque: this.entrepriseForm.value.banque,
        rccm: this.entrepriseForm.value.rccm,
        siteWeb: this.entrepriseForm.value.siteWeb,
        signataire: this.entrepriseForm.value.signataire,
        signataireNom: this.entrepriseForm.value.signataireNom,
        prefixe: this.entrepriseForm.value.prefixe,
        suffixe: this.entrepriseForm.value.suffixe,
        tauxTva: this.entrepriseForm.value.tauxTva,
        signaturNum: this.entrepriseForm.value.signaturNum,
        cachetNum: this.entrepriseForm.value.cachetNum
      };
      this.entrepriseService.addEntreprise(newEntreprise).subscribe({
        next: createdEntreprise => {
          const current = this.optionsEntreprise$.value;
          this.optionsEntreprise$.next([createdEntreprise, ...current]);
          this.control.setValue(createdEntreprise);
          this.closePopup();
          this.entrepriseForm.reset();
          this.isLoading = false;
        },
        error: error => {
          this.errorMessageApi = error.message || 'Erreur lors de la création';
          this.isLoading = false;
        }
      });
    }, 3000); // Délai de 3 secondes
  }
  modifierClient() {
    this.errorMessage = '';
    this.errorMessageApi = '';
    this.successMessage = '';
    // Marquer tous les champs comme touchés pour afficher les erreurs
    this.markFormGroupTouched(this.modifierClientForm);
    if (this.modifierClientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire.';
      return;
    }
    // Vérification de l'entreprise si le toggle est activé
    // let entrepriseClient: Entreprise | null = null;
    // if (this.isEntrepriseSelected) {
    //   entrepriseClient = this.control.value;
    //   if (!entrepriseClient) {
    //     this.entrepriseRequiredError = true;
    //     this.errorMessage = 'Veuillez sélectionner ou créer une entreprise.';
    //     return;
    //   }
    // }
    if (this.isEntrepriseSelected && !this.control.value) {
      this.errorMessage = 'Veuillez sélectionner ou créer une entreprise.';
      return;
    }
    // Activer l'indicateur de chargement
    this.isLoading = true;
    // Créer un délai de 3 secondes avant la modification
    setTimeout(() => {
      // Construction de l'objet client - NE PAS inclure l'URL complète
      const clientData = {
        ...this.modifierClientForm.value,
        id: this.clientId
        // Supprimer la propriété photo ici
      };
      // Gestion spécifique de la photo :
      let imageFile = undefined;
      if (this.selectedImageFile) {
        // Cas 1 : Nouvelle image sélectionnée
        imageFile = this.selectedImageFile;
      } else if (this.clientPhotoUrl?.includes('assets')) {
        // Cas 2 : Photo actuelle est l'image par défaut
        clientData.photo = null; // Demander la suppression
      }
      // Gestion de l'entreprise
      if (this.isEntrepriseSelected && this.control.value?.id) {
        clientData.entrepriseClient = {
          id: this.control.value.id
        };
      } else {
        clientData.entrepriseClient = null;
      }
      // Appel au service avec gestion du fichier image
      this.clientService.updateClient(this.clientId, clientData, imageFile).subscribe({
        next: updatedClient => {
          // Mettre à jour l'URL de la photo dans l'interface
          if (updatedClient.photo) {
            // Utiliser getFullImageUrl pour reconstruire le chemin complet
            this.clientPhotoUrl = this.clientService.getFullImageUrl(updatedClient.photo);
          } else {
            this.clientPhotoUrl = 'assets/img/profil.png';
          }
          this.successMessage = 'Client modifié avec succès !';
          this.errorMessage = '';
          // Réinitialiser les états d'image
          this.newPhotoUrl = null;
          this.selectedImageFile = null;
          // Désactiver le mode édition après succès
          this.isEditing = false;
          this.modifierClientForm.disable();
          this.isLoading = false;
        },
        error: error => {
          console.error('Erreur:', error);
          this.errorMessage = error.error?.message || 'Erreur lors de la modification du client';
          this.successMessage = '';
          this.isLoading = false;
        }
      });
    }, 3000);
  }
  // Méthode utilitaire pour marquer tous les champs comme touchés
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.control.enable();
      this.modifierClientForm.enable();
    } else {
      // Réinitialiser les erreurs en sortant du mode édition
      this.errorMessage = '';
      this.entrepriseRequiredError = false;
      this.control.disable();
      this.modifierClientForm.disable();
      this.loadClientData();
    }
  }
  // Annuler et revenir à la liste
  goToClients() {
    if (this.isEditing) {
      this.cancelEditing();
    } else {
      this.router.navigate(['/clients']);
    }
  }
  formatEntreprisePhoneNumber() {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    // Garantir que l'indicatif est présent
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      return;
    }
    // Nettoyer et formater les chiffres
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    // Limiter la longueur
    const maxLength = this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, maxLength));
  }
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      // Mettre à jour l'indicatif et la longueur max
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = paysInfo.longueur;
      // Mettre à jour la valeur du téléphone
      const currentPhone = this.entrepriseForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }
      // Mettre à jour les validateurs
      this.updateEntreprisePhoneValidator(paysInfo.longueur);
    }
  }
  updateEntreprisePhoneValidator(longueur) {
    this.entrepriseForm.controls['telephone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)]);
    this.entrepriseForm.controls['telephone'].updateValueAndValidity();
  }
  navigateBack() {
    this.router.navigate(['/clients']);
  }
  deleteClient() {
    if (!this.client && !this.clientId) {
      console.error("Client ou ID non disponible.");
      return;
    }
    this.showConfirmationModalC = true;
  }
  confirmDeleteC() {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.showConfirmationModalC = false;
      if (!_this2.client && !_this2.clientId) {
        _this2.errorMessage = "Client non disponible pour suppression.";
        return;
      }
      _this2.isDeletingC = true;
      _this2.errorMessage = '';
      _this2.successMessage = '';
      try {
        const idToDelete = _this2.client?.id || _this2.clientId;
        const message = yield _this2.clientService.deleteClient(idToDelete).toPromise();
        _this2.successMessage = message || 'Client supprimé avec succès !';
        setTimeout(() => {
          _this2.router.navigate(['/clients']);
        }, 2000);
      } catch (err) {
        let message = err?.message || err?.error || 'Erreur lors de la suppression.';
        const prefix = "Une erreur est survenue : ";
        if (message.startsWith(prefix)) {
          message = message.substring(prefix.length);
        }
        _this2.errorMessage = message;
      } finally {
        _this2.isDeletingC = false;
        setTimeout(() => {
          _this2.errorMessage = '';
          _this2.successMessage = '';
        }, 5000);
      }
    })();
  }
  //
  getVentes() {
    this.loading = true;
    this.errorMessage = '';
    this.venteService.getVenteByClient(this.clientId, this.entrepriseClientId).subscribe({
      next: res => {
        console.log("données reçues :", res);
        this.ventes = res;
        this.achatCount = this.ventes.length;
        // ✅ Sélectionner automatiquement le premier
        if (this.ventes.length > 0) {
          this.selectedAchatId = this.ventes[0].venteId;
          this.selectedAchat = this.ventes[0];
          console.log('Premier achat sélectionné automatiquement :', this.selectedAchatId);
        }
        this.ventes = res;
        this.loading = false;
      },
      error: err => {
        console.error('Erreur récupération ventes :', err);
        this.errorMessage = 'Impossible de récupérer les ventes.';
        this.loading = false;
      }
    });
  }
  // Méthode appelée lors du clic sur un client
  selectClient(client) {
    this.clientId = client.id;
    this.entrepriseClientId = undefined; // Réinitialise l'entreprise
    this.getVentes();
  }
  // Méthode appelée lors du clic sur une entreprise cliente
  selectEntrepriseClient(entrepriseClient) {
    this.entrepriseClientId = entrepriseClient.id;
    this.clientId = 0;
    this.getVentes();
  }
  get totalMontant() {
    return this.ventes?.reduce(function (acc, vente) {
      return acc + (vente.montantTotal || 0);
    }, 0) || 0;
  }
  static {
    this.ɵfac = function DetailEditClientComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailEditClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_4__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_5__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_6__.FactureProFormaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_8__.VenteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DetailEditClientComponent,
      selectors: [["app-detail-edit-client"]],
      viewQuery: function DetailEditClientComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 156,
      vars: 31,
      consts: [["fileInput", ""], ["noFactureSelected", ""], ["auto", "matAutocomplete"], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], [1, "container_client"], ["title", "Retour sur la page client", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], ["class", "loading-overlay", 4, "ngIf"], [1, "information_cadre", 2, "margin-bottom", "20px", "padding", "20px"], [1, "info_personnel"], [1, "information_grid_two"], [1, "profil_section"], [1, "section_title"], [1, "title"], [1, "profile-img-wrapper", 3, "click"], ["alt", "Photo de profil", 1, "profile-img", 3, "src"], [1, "overlay"], ["src", "assets/img/appareil.jpg", "alt", "Modifier", 1, "camera-icon"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "taille_photo"], [2, "margin", "0", "font-size", "8px", "text-align", "center"], [1, "delete-boutique-container", 2, "margin-top", "22px"], [2, "font-size", "13px"], [1, "switch2"], ["aria-label", "Supprimer le client", "title", "Supprimer le client", 1, "delete-boutique-btn", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"], [1, "info_section"], [1, "title", "title_display"], [1, "icon_edit"], ["class", "ri-edit-box-line", "title", "Cliquer ici pour modifier", 3, "click", 4, "ngIf"], ["style", "color: #ff0000;", "class", "ri-close-line", "title", "Fermer l'\u00E9dition", 3, "click", 4, "ngIf"], [1, "container_formulaire", 3, "formGroup"], [1, "champ_grid_true"], [1, "champ_input"], ["type", "text", "id", "nomComplet", "formControlName", "nomComplet", "name", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisissez votre adresse ", 1, "input_focus"], ["for", "adresse", 1, "label"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "name", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "ville", "name", "ville", "placeholder", "Saisis la viille", 1, "input_focus"], [1, "champ_grid"], ["id", "poste", "formControlName", "poste", "name", "poste", "placeholder", "Saisissez votre poste ", 1, "input_focus"], ["for", "poste", 1, "label"], ["class", "info_titre_input", "style", "margin-top: 20px;", 4, "ngIf"], ["class", "cadre_entreprise", 4, "ngIf"], ["class", " information_cadre_save", 4, "ngIf"], ["class", "confirmation-modal-averB", 4, "ngIf"], [1, "information_cadre"], [1, "section_navbar"], [1, "custom-tabs", 3, "selectedIndex"], ["mat-tab-label", ""], [1, "tab-content"], [1, "content_client"], [1, "profil_section", "profil_section_facture"], ["class", "facture_model", 4, "ngIf", "ngIfElse"], [1, "non_facture"], [1, "info_section", 2, "padding", "0"], [1, "contact_info__"], [1, "section_title", "section_title2", 2, "padding", "20px 20px 6px"], [1, "table-container", 2, "max-height", "41vh", "border-radius", "10px", "display", "flex", "flex-direction", "column", "position", "relative"], ["class", "loading-indicator", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], ["class", "sticky-footer", 4, "ngIf"], ["class", "facture_model", 4, "ngIf"], [2, "position", "sticky", "top", "0", "background", "white", "z-index", "10", "box-shadow", "0 2px 2px -1px rgba(0,0,0,0.1)"], [1, "text-right"], [3, "selected-row", "click", 4, "ngFor", "ngForOf"], [1, "sticky-footer"], [2, "width", "100%"], [2, "background-color", "#ffffff"], ["colspan", "3", 1, "text-bold"], [1, "text-right", "text-bold"], ["label", "Notes"], ["label", "????"], ["class", "popup-overlay", 4, "ngIf"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], ["title", "Cliquer ici pour modifier", 1, "ri-edit-box-line", 3, "click"], ["title", "Fermer l'\u00E9dition", 1, "ri-close-line", 2, "color", "#ff0000", 3, "click"], [1, "error"], [3, "value"], [1, "info_titre_input", 2, "margin-top", "20px"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "disabled", "ngModel", "ngModelOptions"], [1, "slider", "round"], [1, "cadre_entreprise"], ["type", "text", "placeholder", "Selectionner un entreprise", "matInput", "", 1, "input_focus", "input_cursor", 3, "formControl", "matAutocomplete"], ["for", "categorieId", 1, "label"], [3, "optionSelected", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-community-line"], [2, "margin-left", "8px"], [1, "icon_arrow"], [1, "ri-arrow-down-s-line"], [1, "option-content"], [1, "information_cadre_save"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "confirmation-modal-averB"], [1, "modal-content-averB"], [2, "font-size", "16px", "margin-bottom", "10px"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-averB"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"], [1, "btn-cancel", 2, "font-size", "12px", 3, "click"], [1, "tab-label"], [1, "facture-count"], [1, "facture_model"], [1, "header_apercu", 2, "display", "flex", "align-items", "center", "gap", "5px", "margin", "10px"], [1, "logo_entreprise"], [3, "src"], [1, "entete_entreprise"], [1, "para1"], [1, "titre", 2, "text-align", "center", "font-size", "8px"], [2, "color", "#0000003e"], [1, "date_right"], [2, "margin", "0 10px", "font-size", "8px", "text-align", "right"], [1, "name_client", 2, "margin-left", "10px"], [1, "doit", 2, "display", "flex", "align-items", "center", "gap", "3px"], [2, "margin", "0", "font-size", "8px"], [1, "objets", 2, "display", "flex", "align-items", "center", "gap", "3px"], [1, "container_table", 2, "display", "flex", "justify-content", "center"], [1, "table"], [1, "th"], [4, "ngFor", "ngForOf"], [1, "tfoot"], ["colspan", "4", 1, "td"], [1, "td"], [1, "arret_somme"], [2, "margin", "0 0 0 10px", "font-size", "6px"], [1, "signature", 2, "text-align", "right", "margin", "20px 10px 16px 0"], [1, "post_signateure"], [2, "font-size", "8px"], [1, "nom_signateure"], [1, "container_footer"], [1, "footer"], [2, "text-align", "center", "font-size", "8px", "margin", "0 0 3px 0"], [2, "font-size", "5px", "text-align", "center"], [2, "margin-top", "0px", "font-size", "5px", "text-align", "center"], [1, "empty-preview"], [1, "ri-file-text-line"], [1, "loading-indicator"], [1, "ri-loader-4-line", "spin"], [1, "error-message"], [1, "empty-state"], [1, "ri-file-list-2-line"], [3, "click"], [1, "status-badge", 3, "ngClass"], ["src", "assets/img/Votre.png"], [1, "status-badge"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-header"], [1, "close-btn", 3, "click"], [3, "formGroup"], [1, "popup-body"], ["type", "text", "formControlName", "nom", "placeholder", "Saisis le nom de l'entreprise", 1, "input_focus"], [1, "label"], [2, "color", "#ff0000", "margin-left", "5px"], ["class", "error-text", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["type", "text", "formControlName", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["type", "text", "formControlName", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], [1, "grid_colonne"], ["type", "tel", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "focus", "input"], ["formControlName", "secteur", "placeholder", "Saisis le secteur", 1, "input_focus"], [1, "container_error_message"], [1, "popup-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "click", "disabled"], [1, "error-text"]],
      template: function DetailEditClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailEditClientComponent_div_1_Template, 2, 1, "div", 4)(2, DetailEditClientComponent_div_2_Template, 2, 1, "div", 5)(3, DetailEditClientComponent_div_3_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6)(5, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_Template_p_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, DetailEditClientComponent_div_9_Template, 5, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 11)(11, "div", 12)(12, "div", 13)(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Photo de profil du client");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_Template_div_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.triggerFileInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "input", 21, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function DetailEditClientComponent_Template_input_change_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 22)(25, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Formats JPG, GIF ou PNG autoris\u00E9s. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " Taille maximale : 800 Ko.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 24)(30, "span", 25)(31, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " Supprimer le client ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "label", 26)(34, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailEditClientComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.deleteClient());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 29)(37, "div", 15)(38, "div", 30)(39, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Informations Personnelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, DetailEditClientComponent_i_42_Template, 1, 0, "i", 32)(43, DetailEditClientComponent_i_43_Template, 1, 0, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "form", 34)(45, "div", 35)(46, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Nom et pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, DetailEditClientComponent_div_50_Template, 3, 2, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, DetailEditClientComponent_div_55_Template, 2, 1, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 35)(61, "div", 44)(62, "select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function DetailEditClientComponent_Template_select_change_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onPaysChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, DetailEditClientComponent_option_65_Template, 2, 2, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 49)(69, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function DetailEditClientComponent_Template_input_input_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.formatPhoneNumber());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](73, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 54)(77, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](78, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Poste");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](82, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, DetailEditClientComponent_div_85_Template, 9, 4, "div", 57)(86, DetailEditClientComponent_div_86_Template, 16, 6, "div", 58)(87, DetailEditClientComponent_div_87_Template, 9, 8, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, DetailEditClientComponent_div_88_Template, 11, 0, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 61)(90, "div", 62)(91, "mat-tab-group", 63)(92, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, DetailEditClientComponent_ng_template_93_Template, 5, 1, "ng-template", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 65)(95, "div", 66)(96, "div", 13)(97, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, DetailEditClientComponent_div_98_Template, 86, 31, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, DetailEditClientComponent_ng_template_100_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 70)(103, "div", 71)(104, "div", 72)(105, "div", 16)(106, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "Toutes les factures");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, DetailEditClientComponent_div_109_Template, 3, 0, "div", 74)(110, DetailEditClientComponent_div_110_Template, 2, 1, "div", 75)(111, DetailEditClientComponent_div_111_Template, 4, 0, "div", 76)(112, DetailEditClientComponent_table_112_Template, 13, 1, "table", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, DetailEditClientComponent_div_113_Template, 9, 3, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "mat-tab");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, DetailEditClientComponent_ng_template_115_Template, 5, 1, "ng-template", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "div", 65)(117, "div", 66)(118, "div", 13)(119, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, DetailEditClientComponent_div_120_Template, 90, 20, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 70)(122, "div", 71)(123, "div", 72)(124, "div", 16)(125, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "Toutes les achats");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 73)(128, "table")(129, "thead")(130, "tr", 80)(131, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Num\u00E9ro Facture");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "Mode Paiement");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "th", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "Montant");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](140, DetailEditClientComponent_tr_140_Template, 12, 12, "tr", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "div", 83)(142, "table", 84)(143, "tfoot", 85)(144, "tr")(145, "td", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "td", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](149, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "mat-tab", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](151, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "mat-tab", 89)(153, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, " Contenu de la s\u00E9curit\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](155, DetailEditClientComponent_div_155_Template, 52, 10, "div", 90);
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          const noFactureSelected_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMessageApi);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.newPhotoUrl || ctx.clientPhotoUrl || "assets/img/profil.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isDeletingC);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.modifierClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.modifierClientForm.get("nomComplet")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.modifierClientForm.get("nomComplet")) == null ? null : tmp_11_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.modifierClientForm.get("email")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.modifierClientForm.get("email")) == null ? null : tmp_12_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.paysKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEditing || ctx.isEntrepriseSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEntrepriseSelected && (ctx.isEditing || ctx.isEntrepriseSelected));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showConfirmationModalC);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedIndex", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.factureDetails)("ngIfElse", noFactureSelected_r20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loadingFactures);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && ctx.errorFactures);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesClient.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesClient.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingFactures && !ctx.errorFactures && ctx.facturesClient.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedAchat);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ventes);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](149, 28, ctx.totalMontant, "1.0-0"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showPopup);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__.CustomNumberPipe, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabGroup, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.M, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule],
      styles: ["@charset \"UTF-8\";\n.container_client[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f1f1f1;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  padding: 10px 0;\n}\n\n.content_client[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.information_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr;\n  gap: 20px;\n}\n\n.information_grid_two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 27% 2fr;\n  gap: 20px;\n}\n\n.section_title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  position: relative;\n  padding-bottom: 2px;\n}\n\n.section_title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2c3e50;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.title_display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.section_title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.section_title2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 21px;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.profil_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.profil_section_facture[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  padding: 0 !important;\n}\n\n.info_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.info_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_grid_true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 5px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 10px;\n  background: none;\n  color: #000000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #999;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 10px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.camera-icon[_ngcontent-%COMP%] {\n  width: 30px; \n\n  height: 30px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n}\n\n.icon_edit[_ngcontent-%COMP%] {\n  margin-top: -7px;\n}\n\n.icon_edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .information_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .information_grid_two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info_item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.info_label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.info_value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2c3e50;\n}\n\n.contact_info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.contact_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 15px;\n}\n\n.contact_icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #4b6cb7;\n  font-size: 18px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 2px;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 11px;\n  width: 11px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(13px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  overflow: auto;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-weight: 600;\n  color: #000;\n  letter-spacing: 0.6px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  background-color: #f1f3f5;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212529;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 500;\n}\n.status-badge.draft[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.status-badge.sent[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background-color: #c5c5e2;\n  color: #0000ff;\n}\n.status-badge.valid[_ngcontent-%COMP%] {\n  background-color: #d5e6d5;\n  color: #008000;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: #ced4da;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #dc3545;\n  background-color: #fff8f8;\n  border-radius: 8px;\n  margin: 10px 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n\n.sticky-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n  border-top: 1px solid #eee;\n}\n\n.sticky-footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.para1[_ngcontent-%COMP%] {\n  font-size: 6px;\n  margin: 0;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\n.titre[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 93%;\n  border-collapse: collapse;\n  margin: 4px 0;\n  font-size: 5px;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 3px 5px;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n\n.table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f9f9f9;\n}\n\n@media (max-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 5px 3px;\n  }\n}\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\n.selected-row[_ngcontent-%COMP%] {\n  border: 2px solid #0672E4;\n  background-color: #f0f8ff;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 12px;\n  min-width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_error_message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.empty-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #6c757d;\n}\n.empty-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 10px;\n}\n.empty-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n}\n\n.delete-boutique-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center; \n\n  gap: 8px;\n  margin-top: 22px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: rgba(122, 122, 122, 0.9058823529);\n  cursor: pointer;\n  font-size: 20px;\n  padding: 0;\n  transition: color 0.2s;\n  bottom: 10px;\n  position: relative;\n  left: 10px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%]:hover {\n  color: #fa2a2a;\n}\n\n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 0;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #1b83f2;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #333;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n}\n\n.switch2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%]   .modal-content-averB[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n  color: #000; \n\n}\n\n.modal-actions-averB[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirmB[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1lZGl0LWNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxXQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7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QUFBLEVBQUEsNENBQUE7QUExbEJGOztBQThsQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQTNsQkY7O0FBOGxCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTNsQkYiLCJmaWxlIjoiZGV0YWlsLWVkaXQtY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyX2NsaWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXgtd2lkdGg6IDEwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uY29udGVudF9jbGllbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbmZvcm1hdGlvbl9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fZ3JpZF90d28ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNyUgMmZyIDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uc2VjdGlvbl90aXRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4udGl0bGVfZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNlY3Rpb25fdGl0bGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlMjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMjFweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YjZjYjcsICMxODI4NDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnByb2ZpbF9zZWN0aW9uIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJvZmlsX3NlY3Rpb25fZmFjdHVyZSB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xufVxuXG4uaW5mb19zZWN0aW9uIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaW5mb19ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4uY2hhbXBfZ3JpZF90cnVlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG5cbi5wcm9maWxlLWltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9maWxlLWltZy13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhbWVyYS1pY29uIHtcbiAgd2lkdGg6IDMwcHg7IC8qIGFqdXN0ZSBzZWxvbiBsYSB0YWlsbGUgdm91bHVlICovXG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmljb25fZWRpdCB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG5cbi5pY29uX2VkaXQgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaW5mb3JtYXRpb25fZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5pbmZvcm1hdGlvbl9ncmlkX3R3byB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICBcbiAgICAuaW5mb19ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4uaW5mb19pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mb19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW5mb192YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5jb250YWN0X2luZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250YWN0X2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiAgICAgICAgXG4uY29udGFjdF9pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjNGI2Y2I3O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGFnIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4gICAgICAgIFxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDCqyBzbGlkZXIgwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBcbiAgbGVmdDogMnB4OyBcbiAgcmlnaHQ6IDA7IFxuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGNvbnRlbnQ6IFwiXCI7XG4gIC8vIGhlaWdodDogMThweDsgXG4gIC8vIHdpZHRoOiAxOHB4O1xuICAvLyBsZWZ0OiAzcHg7IFxuICAvLyBib3R0b206IDNweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vIHRyYW5zaXRpb246IC40cztcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogMTFweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI1cHg7XG59XG5cbi5pY29uX2Fycm93IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vLyBCdXR0b24gXG5cbi5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICNmZjQ0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuICBcbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFN0eWxlcyBjb21tdW5zIHBvdXIgbGVzIGRldXggY29tcG9zYW50cyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAvLyBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAvLyBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIH1cbiAgXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgdGJvZHkgdHIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgfVxuICB9XG4gIFxuICB0Zm9vdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcbiAgICBcbiAgICB0ZCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgXG4gICYuZHJhZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgXG4gICYuc2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcbiAgICBjb2xvcjogIzg1NjQwNDtcbiAgfVxuICBcbiAgJi5hcHByb3ZlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVlMjtcbiAgICBjb2xvcjogIzAwMDBmZjtcbiAgfVxuICBcbiAgJi52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZTZkNTtcbiAgICBjb2xvcjogIzAwODAwMDtcbiAgfVxufVxuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6ICNjZWQ0ZGE7XG4gIH1cbiAgXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHRhYmxlYXUgYXZlYyBoZWFkZXIgZXQgZm9vdGVyIGZpeGVzICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGlja3ktZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnN0aWNreS1mb290ZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogUG91ciBsJ2VuLXTDqnRlIGZpeGUgKi9cbnRoZWFkIHRyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmxvZ29fZW50cmVwcmlzZSB7XG4gIHdpZHRoOiA1MHB4O1xuICAvLyBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dvX2VudHJlcHJpc2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhcmExIHtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBtYXJnaW46IDNweDtcbn1cblxuLnRpdHJlIGg2IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogOTMlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDRweCAwO1xuICBmb250LXNpemU6IDVweDtcbn1cblxuLnRhYmxlIC50aCwgLnRhYmxlIC50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG59XG5cbi50YWJsZSAudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUgLnRmb290IC50ZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBcbiAgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICB0YWJsZSB0aCwgdGFibGUgdGQge1xuICAgICAgcGFkZGluZzogNXB4IDNweDtcbiAgfVxufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA2NzJFNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcbn1cblxuLnRhYi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uZmFjdHVyZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWluLXdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5cbiAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZWI4NztcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cbiAgXG4vL3RvYXN0IHN1Y2Nlc3Ncbi50b2FzdC1tZXNzYWdlLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDqWNpZmlxdWVzXG4gICAgfVxuICB9XG4gIFxuICAvKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBldCBkaXNwYXJhw650cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw650IGF2ZWMgdW4gbMOpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICAgIH1cbiAgfSAgXG5cblxuLmVtcHR5LXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5jb250YWluZXJfZ2xvYmFsIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgZ2FwOiAxNXB4O1xuLy8gfVxuXG4vLyAuY29udGFpbmVyX2Zvcm11bGFpcmUge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyOyAgLyogcmFuZ8OpZSAxID0gaGF1dGV1ciBhdXRvbWF0aXF1ZSAobGUgdGl0cmUpLCByYW5nw6llIDIgPSByZXN0ZSBkZSBsYSBoYXV0ZXVyICovXG4vLyAgIGhlaWdodDogMTAwJTsgICAgICAgICAgICAgICAgICAgLyogb2NjdXBlIHRvdXRlIGxhIGhhdXRldXIgZGlzcG9uaWJsZSAqL1xuLy8gfVxuXG4vLyAuY29udGVudF9mb3JtdWxhaXJlIHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIC8vIGhlaWdodDogNTB2aDtcbi8vICAgbWF4LWhlaWdodDogNTd2aDtcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcbi8vICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuLy8gICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4vLyAgIHBhZGRpbmc6IDBweDtcbi8vICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcblxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4vLyAgICAgd2lkdGg6IDJweDtcbi8vICAgICBoZWlnaHQ6IDJweDtcbi8vICAgfVxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgfVxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gLlRpdGxlIHtcbi8vICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgdG9wOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICB6LWluZGV4OiAxMDtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBwYWRkaW5nOiA2cHggMCAwIDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IHJnYmEoMzMsIDM1LCAzOCwgMC4xKSAwcHggMTBweCAxMHB4IC0xMHB4O1xuLy8gfVxuXG4vLyAuZm9ybV9sZWZ0X3JpZ2h0IHtcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcbi8vICAgLyogZmFjdWx0YXRpZiA6IHNpIHZvdXMgdm91bGV6IHVuIHBldGl0IHBhZGRpbmcgcG91ciBsZSBzY3JvbGwgKi9cbi8vICAgcGFkZGluZy1yaWdodDogOHB4O1xuLy8gfVxuXG4vLyAgIC8qIGZvcm11bGFpcmUgKi9cbiAgXG5cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czIge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG1pbi13aWR0aDogMjUwcHg7XG4vLyAgICAgaGVpZ2h0OiA1N3B4O1xuLy8gICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgICAgYm9yZGVyLXRvcDogbm9uZTtcbi8vICAgICBib3JkZXItbGVmdDogbm9uZTtcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4vLyAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgY29sb3I6ICMwMDAwMDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4vLyAgICAgcmVzaXplOiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbi8vICAgICBib3JkZXItdG9wOiBub25lO1xuLy8gICAgIGJvcmRlci1sZWZ0OiBub25lO1xuLy8gICAgIGJvcmRlci1yaWdodDogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDIycHg7XG4vLyAgICAgbGVmdDogMHB4O1xuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgIGNvbG9yOiAjOTk5O1xuLy8gICB9XG4gIFxuICBcbi8vICAgLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbi8vICAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLy8gICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbi8vICAgICBjb2xvcjogIzA2NzJFNDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbi8vICAgfVxuICBcbi8vICAgLmluZm9fdGl0cmVfaW5wdXQge1xuLy8gICAgIHBhZGRpbmc6IDAgMTJweDsgXG4vLyAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4vLyAgIH1cblxuLy8gICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0MiB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuLy8gICB9XG4gIFxuLy8gICAuY2hhbXBfZ3JpZCB7XG4vLyAgICAgZGlzcGxheTogZ3JpZDtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuLy8gICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICAgIGdyaWQtcm93LWdhcDogMHB4O1xuLy8gICAgIGdhcDogMjBweDtcbi8vICAgfVxuICBcbi8vICAgLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuLy8gICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbi8vICAgLy8gICB3aWR0aDogMTAwJTtcbi8vICAgLy8gfVxuICBcbiAgXG4vLyAgIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4OyBcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbi8vICAgfVxuICBcbi8vICAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgfVxuXG4vLyAgICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4vLyAgICAuaW5mb3JtYXRpb25fY2FkcmUge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgfVxuXG4vLyAgIC5kb3VibGVfaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZ2FwOiAyMHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuLy8gICB9XG5cbi8vIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4vLyAuY29udGFpbmVyX2ZpbGUge1xuLy8gICAgIC8vIGhlaWdodDogMTUwcHg7XG4vLyAgICAgd2lkdGg6IDE1MHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGdhcDogNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG5cbi8vIC5oZWFkZXJfZmlsZSB7XG4vLyAgICAgLy8gZmxleDogMTtcbi8vICAgICBoZWlnaHQ6IDE0MHB4O1xuLy8gICAgIHdpZHRoOiAxNDBweDtcbi8vICAgICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgaW1ne1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIHN2ZyB7XG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlcl9maWxlIHAge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXJfZmlsZSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuLy8gICAgIHdpZHRoOiAxNDBweDtcbi8vICAgICBoZWlnaHQ6IDM1cHg7XG4vLyAgICAgcGFkZGluZzogNXB4IDhweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgbWFyZ2luLXRvcDogM3B4O1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyX2ZpbGUgcCB7XG4vLyAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXJfZmlsZSBpIHtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4vLyAgIH1cbiAgXG4vLyAgICNmaWxlIHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgaW1nIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cblxuLy8gICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gICB9XG4gIFxuLy8gICAuZXJyb3ItbWVzc2FnZSB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuLy8gICB9XG5cbi8vICAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIH1cblxuXG5cblxuXG5cblxuLy8gICAvLyBUb2dnbGUgXG5cbi8vIC5zd2l0Y2gge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgd2lkdGg6IDMwcHg7XG4vLyAgIGhlaWdodDogMTVweDtcbi8vIH1cblxuLy8gLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4vLyAuc3dpdGNoIGlucHV0IHtcbi8vICAgb3BhY2l0eTogMDtcbi8vICAgd2lkdGg6IDA7XG4vLyAgIGhlaWdodDogMDtcbi8vIH1cblxuLy8gLyogTGUgwqsgc2xpZGVyIMK7ICovXG4vLyAuc2xpZGVyIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRvcDogMDsgXG4vLyAgIGxlZnQ6IDJweDsgXG4vLyAgIHJpZ2h0OiAwOyBcbi8vICAgYm90dG9tOiAwO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuLy8gICB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4vLyB9XG5cbi8vIC5zbGlkZXI6YmVmb3JlIHtcbi8vICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAvLyBjb250ZW50OiBcIlwiO1xuLy8gICAvLyBoZWlnaHQ6IDE4cHg7IFxuLy8gICAvLyB3aWR0aDogMThweDtcbi8vICAgLy8gbGVmdDogM3B4OyBcbi8vICAgLy8gYm90dG9tOiAzcHg7XG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAvLyB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGhlaWdodDogMTFweDtcbi8vICAgd2lkdGg6IDExcHg7XG4vLyAgIGxlZnQ6IDJweDtcbi8vICAgYm90dG9tOiAycHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICB0cmFuc2l0aW9uOiAwLjRzO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbi8vIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xuLy8gfVxuXG4vLyBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG4vLyB9XG5cbi8vIC5pbnB1dF9jdXJzb3Ige1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pY29uX2Fycm93IHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICByaWdodDogMTBweDtcbi8vICAgdG9wOiAyNXB4O1xuLy8gfVxuXG4vLyAuaWNvbl9hcnJvdyBpIHtcbi8vICAgZm9udC1zaXplOiAxN3B4O1xuLy8gICBjb2xvcjogIzAwMDtcbi8vIH1cblxuLy8gLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi8vIC5wb3B1cC1vdmVybGF5IHtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHotaW5kZXg6IDEwMDA7XG4vLyB9XG5cbi8vIC5wb3B1cC1jb250ZW50IHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgd2lkdGg6IDUwJTtcbi8vIH1cblxuLy8gLnBvcHVwLWhlYWRlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gLnBvcHVwLWhlYWRlciBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMThweDtcbi8vIH1cblxuLy8gLmNsb3NlLWJ0biB7XG4vLyAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5wb3B1cC1mb290ZXIge1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICB0ZXh0LWFsaWduOiByaWdodDtcbi8vIH1cblxuLy8gLy8gQnV0dG9uIFxuXG4vLyAuYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmJ0bi1jYW5jZWwge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuLy8gICBwYWRkaW5nOiA2cHggMjVweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyB9XG5cbi8vIC5idG4tY2FuY2VsOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbi8vICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuLy8gfVxuXG4vLyAuYnRuLXN1Ym1pdCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4vLyAgIHBhZGRpbmc6IDZweCAyNXB4O1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjdXJzb3I6IG5vLWRyb3A7XG4vLyB9XG5cbi8vIC5idG4tc3VibWl0OmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbi8vICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuLy8gfVxuXG4vLyAuZXJyb3ItdGV4dCB7XG4vLyAgIGNvbG9yOiAjZmY0NDQ0O1xuLy8gICBmb250LXNpemU6IDAuOHJlbTtcbi8vICAgbWFyZ2luLXRvcDogNHB4O1xuLy8gfVxuXG4vLyAuYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4vLyAgIG9wYWNpdHk6IDAuNztcbi8vICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbi8vIH1cblxuLy8gLmVycm9yLW1lc3NhZ2VBcGkge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiAtMjBweDtcbi8vICAgbGVmdDogLTIwcHg7XG4vLyB9XG5cbi8vIC5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHRvcDogLTIwcHg7XG4vLyAgIGxlZnQ6IC0yMHB4O1xuLy8gfVxuXG4vLyAuZXJyb3ItbWVzc2FnZUFwaTIge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gLmVycm9yIHtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGNvbG9yOiAjZmYwMDAwO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gfVxuXG4vLyAuZ3JpZF9jb2xvbm5lIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuLy8gICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgZ2FwOiAyMHB4O1xuLy8gfVxuICBcblxuXG4uZGVsZXRlLWJvdXRpcXVlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmUgaG9yaXpvbnRhbGVtZW50ICovXG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uZGVsZXRlLWJvdXRpcXVlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjN2E3YTdhZTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbiAgXG59XG5cbi5kZWxldGUtYm91dGlxdWUtYnRuOmhvdmVye1xuICBjb2xvcjogI2ZhMmEyYTtcbn1cblxuLmJ0bi1jb25maXJtLFxuLmJ0bi1jYW5jZWwge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1jb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjgzZjI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG5cbi5zd2l0Y2gyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyQiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXJCIC5tb2RhbC1jb250ZW50LWF2ZXJCIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjMDAwOyAvKiBwb3VyIHMnYXNzdXJlciBxdWUgbGUgdGV4dGUgZXN0IHZpc2libGUgKi9cbn1cblxuXG4ubW9kYWwtYWN0aW9ucy1hdmVyQiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tY29uZmlybUIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2RldGFpbC1lZGl0LWNsaWVudC9kZXRhaWwtZWRpdC1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxn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QUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQSxFQUFBLDRDQUFBO0FBMWxCRjs7QUE4bEJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUEzbEJGOztBQThsQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEzbEJGO0FBQ0EsbzRoREFBbzRoRCIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcl9jbGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNvbnRlbnRfY2xpZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2dyaWRfdHdvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjclIDJmciA7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2VjdGlvbl90aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnRpdGxlX2Rpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWN0aW9uX3RpdGxlOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRiNmNiNywgIzE4Mjg0OCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2VjdGlvbl90aXRsZTI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5wcm9maWxfc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnByb2ZpbF9zZWN0aW9uX2ZhY3R1cmUge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cblxuLmluZm9fc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9fZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMjBweDtcbn1cblxuLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuLmNoYW1wX2dyaWRfdHJ1ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuXG4ucHJvZmlsZS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYW1lcmEtaWNvbiB7XG4gIHdpZHRoOiAzMHB4OyAvKiBhanVzdGUgc2Vsb24gbGEgdGFpbGxlIHZvdWx1ZSAqL1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5pY29uX2VkaXQge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4uaWNvbl9lZGl0IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmluZm9ybWF0aW9uX2dyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuaW5mb3JtYXRpb25fZ3JpZF90d28ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgXG4gICAgLmluZm9fZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLmluZm9faXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm9fdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uY29udGFjdF9pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGFjdF9pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4gICAgICAgIFxuLmNvbnRhY3RfaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzRiNmNiNztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRhZyB7XG4gICAgYmFja2dyb3VuZDogI2UzZjJmZDtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuICAgICAgICBcbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IFxuICBsZWZ0OiAycHg7IFxuICByaWdodDogMDsgXG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gY29udGVudDogXCJcIjtcbiAgLy8gaGVpZ2h0OiAxOHB4OyBcbiAgLy8gd2lkdGg6IDE4cHg7XG4gIC8vIGxlZnQ6IDNweDsgXG4gIC8vIGJvdHRvbTogM3B4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLy8gdHJhbnNpdGlvbjogLjRzO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDExcHg7XG4gIHdpZHRoOiAxMXB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cbiAgXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTdHlsZXMgY29tbXVucyBwb3VyIGxlcyBkZXV4IGNvbXBvc2FudHMgKi9cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgLy8gYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLy8gYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICB0aCwgdGQge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICB9XG4gIFxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIHRib2R5IHRyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIH1cbiAgfVxuICBcbiAgdGZvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XG4gICAgXG4gICAgdGQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIH1cbiAgfVxufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIFxuICAmLmRyYWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICB9XG4gIFxuICAmLnNlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgY29sb3I6ICM4NTY0MDQ7XG4gIH1cbiAgXG4gICYuYXBwcm92ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWM1ZTI7XG4gICAgY29sb3I6ICMwMDAwZmY7XG4gIH1cbiAgXG4gICYudmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZDU7XG4gICAgY29sb3I6ICMwMDgwMDA7XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIC5zcGluIHtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiAjY2VkNGRhO1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGY4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSB0YWJsZWF1IGF2ZWMgaGVhZGVyIGV0IGZvb3RlciBmaXhlcyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3RpY2t5LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5zdGlja3ktZm9vdGVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFBvdXIgbCdlbi10w4PCqnRlIGZpeGUgKi9cbnRoZWFkIHRyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmxvZ29fZW50cmVwcmlzZSB7XG4gIHdpZHRoOiA1MHB4O1xuICAvLyBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dvX2VudHJlcHJpc2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhcmExIHtcbiAgZm9udC1zaXplOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBtYXJnaW46IDNweDtcbn1cblxuLnRpdHJlIGg2IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogOTMlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDRweCAwO1xuICBmb250LXNpemU6IDVweDtcbn1cblxuLnRhYmxlIC50aCwgLnRhYmxlIC50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG59XG5cbi50YWJsZSAudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUgLnRmb290IC50ZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBcbiAgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICB0YWJsZSB0aCwgdGFibGUgdGQge1xuICAgICAgcGFkZGluZzogNXB4IDNweDtcbiAgfVxufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG4uc2VsZWN0ZWQtcm93IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA2NzJFNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcbn1cblxuLnRhYi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uZmFjdHVyZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWluLXdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5cbiAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZWI4NztcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cbiAgXG4vL3RvYXN0IHN1Y2Nlc3Ncbi50b2FzdC1tZXNzYWdlLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDg8KpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcODwq50cmUgZXQgZGlzcGFyYcODwq50cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw4PCrnQgYXZlYyB1biBsw4PCqWdlciBtb3V2ZW1lbnQgdmVycyBsZSBiYXMgKi9cbiAgICB9XG4gIH0gIFxuXG5cbi5lbXB0eS1wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAuY29udGFpbmVyX2dsb2JhbCB7XG4vLyAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4vLyAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuLy8gICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbi8vICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4vLyAgIGdhcDogMTVweDtcbi8vIH1cblxuLy8gLmNvbnRhaW5lcl9mb3JtdWxhaXJlIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjsgIC8qIHJhbmfDg8KpZSAxID0gaGF1dGV1ciBhdXRvbWF0aXF1ZSAobGUgdGl0cmUpLCByYW5nw4PCqWUgMiA9IHJlc3RlIGRlIGxhIGhhdXRldXIgKi9cbi8vICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgICAgICAgICAgICAvKiBvY2N1cGUgdG91dGUgbGEgaGF1dGV1ciBkaXNwb25pYmxlICovXG4vLyB9XG5cbi8vIC5jb250ZW50X2Zvcm11bGFpcmUge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgLy8gaGVpZ2h0OiA1MHZoO1xuLy8gICBtYXgtaGVpZ2h0OiA1N3ZoO1xuLy8gICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4vLyAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbi8vICAgcGFkZGluZzogMHB4O1xuLy8gICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbi8vICAgICB3aWR0aDogMnB4O1xuLy8gICAgIGhlaWdodDogMnB4O1xuLy8gICB9XG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuLy8gICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICB9XG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgfVxuLy8gfVxuXG4vLyAuVGl0bGUge1xuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICB0b3A6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyAgIHotaW5kZXg6IDEwO1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyAgIHBhZGRpbmc6IDZweCAwIDAgMTBweDtcbi8vICAgYm94LXNoYWRvdzogcmdiYSgzMywgMzUsIDM4LCAwLjEpIDBweCAxMHB4IDEwcHggLTEwcHg7XG4vLyB9XG5cbi8vIC5mb3JtX2xlZnRfcmlnaHQge1xuLy8gICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gICAvKiBmYWN1bHRhdGlmIDogc2kgdm91cyB2b3VsZXogdW4gcGV0aXQgcGFkZGluZyBwb3VyIGxlIHNjcm9sbCAqL1xuLy8gICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4vLyB9XG5cbi8vICAgLyogZm9ybXVsYWlyZSAqL1xuICBcblxuICBcbi8vICAgLmlucHV0X2ZvY3VzMiB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWluLXdpZHRoOiAyNTBweDtcbi8vICAgICBoZWlnaHQ6IDU3cHg7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICBib3JkZXItdG9wOiBub25lO1xuLy8gICAgIGJvcmRlci1sZWZ0OiBub25lO1xuLy8gICAgIGJvcmRlci1yaWdodDogbm9uZTtcbi8vICAgICBtYXJnaW46IDEwcHggMCAwO1xuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcbi8vICAgICBjb2xvcjogIzAwMDAwMDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbi8vICAgICByZXNpemU6IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuLy8gICAgIGJvcmRlci10b3A6IG5vbmU7XG4vLyAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMjJweDtcbi8vICAgICBsZWZ0OiAwcHg7XG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyAgICAgY29sb3I6ICM5OTk7XG4vLyAgIH1cbiAgXG4gIFxuLy8gICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuLy8gICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4vLyAgIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuLy8gICAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgfVxuICBcbi8vICAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4vLyAgICAgZm9udC1zaXplOiAxNXB4O1xuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuLy8gICB9XG4gIFxuLy8gICAuaW5mb190aXRyZV9pbnB1dCB7XG4vLyAgICAgcGFkZGluZzogMCAxMnB4OyBcbi8vICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbi8vICAgfVxuXG4vLyAgIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuLy8gICB9XG4gIFxuLy8gICAuY2hhbXBfaW5wdXQyIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgd2lkdGg6IDUwJTtcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4vLyAgIH1cbiAgXG4vLyAgIC5jaGFtcF9ncmlkIHtcbi8vICAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4vLyAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4vLyAgICAgZ2FwOiAyMHB4O1xuLy8gICB9XG4gIFxuLy8gICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4vLyAgIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuLy8gICAvLyAgIHdpZHRoOiAxMDAlO1xuLy8gICAvLyB9XG4gIFxuICBcbi8vICAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuLy8gICB9XG4gIFxuLy8gICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICB9XG5cbi8vICAgIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbi8vICAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICBtYXJnaW4tdG9wOiAwO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB9XG5cbi8vICAgLmRvdWJsZV9pbnB1dCB7XG4vLyAgICAgZGlzcGxheTogZmxleDsgXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBnYXA6IDIwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4vLyAgIH1cblxuLy8gLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi8vIC5jb250YWluZXJfZmlsZSB7XG4vLyAgICAgLy8gaGVpZ2h0OiAxNTBweDtcbi8vICAgICB3aWR0aDogMTUwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgZ2FwOiA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vIH1cblxuLy8gLmhlYWRlcl9maWxlIHtcbi8vICAgICAvLyBmbGV4OiAxO1xuLy8gICAgIGhlaWdodDogMTQwcHg7XG4vLyAgICAgd2lkdGg6IDE0MHB4O1xuLy8gICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXJfZmlsZSBpbWd7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbi8vICAgICBoZWlnaHQ6IDEwMHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyX2ZpbGUgcCB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgfVxuICBcbi8vICAgLmZvb3Rlcl9maWxlIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4vLyAgICAgd2lkdGg6IDE0MHB4O1xuLy8gICAgIGhlaWdodDogMzVweDtcbi8vICAgICBwYWRkaW5nOiA1cHggOHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICBtYXJnaW4tdG9wOiAzcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXJfZmlsZSBwIHtcbi8vICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgfVxuICBcbi8vICAgLmZvb3Rlcl9maWxlIGkge1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbi8vICAgfVxuICBcbi8vICAgI2ZpbGUge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXJfZmlsZSBpbWcge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuXG4vLyAgIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5lcnJvci1tZXNzYWdlIHtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgY29sb3I6IHJlZDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4vLyAgIH1cblxuLy8gICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgfVxuXG5cblxuXG5cblxuXG4vLyAgIC8vIFRvZ2dsZSBcblxuLy8gLnN3aXRjaCB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB3aWR0aDogMzBweDtcbi8vICAgaGVpZ2h0OiAxNXB4O1xuLy8gfVxuXG4vLyAvKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi8vIC5zd2l0Y2ggaW5wdXQge1xuLy8gICBvcGFjaXR5OiAwO1xuLy8gICB3aWR0aDogMDtcbi8vICAgaGVpZ2h0OiAwO1xuLy8gfVxuXG4vLyAvKiBMZSDDgsKrIHNsaWRlciDDgsK7ICovXG4vLyAuc2xpZGVyIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRvcDogMDsgXG4vLyAgIGxlZnQ6IDJweDsgXG4vLyAgIHJpZ2h0OiAwOyBcbi8vICAgYm90dG9tOiAwO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuLy8gICB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4vLyB9XG5cbi8vIC5zbGlkZXI6YmVmb3JlIHtcbi8vICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAvLyBjb250ZW50OiBcIlwiO1xuLy8gICAvLyBoZWlnaHQ6IDE4cHg7IFxuLy8gICAvLyB3aWR0aDogMThweDtcbi8vICAgLy8gbGVmdDogM3B4OyBcbi8vICAgLy8gYm90dG9tOiAzcHg7XG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAvLyB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGhlaWdodDogMTFweDtcbi8vICAgd2lkdGg6IDExcHg7XG4vLyAgIGxlZnQ6IDJweDtcbi8vICAgYm90dG9tOiAycHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICB0cmFuc2l0aW9uOiAwLjRzO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuLy8gaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG4vLyB9XG5cbi8vIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbi8vIH1cblxuLy8gLmlucHV0X2N1cnNvciB7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmljb25fYXJyb3cge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHJpZ2h0OiAxMHB4O1xuLy8gICB0b3A6IDI1cHg7XG4vLyB9XG5cbi8vIC5pY29uX2Fycm93IGkge1xuLy8gICBmb250LXNpemU6IDE3cHg7XG4vLyAgIGNvbG9yOiAjMDAwO1xuLy8gfVxuXG4vLyAvKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLy8gLnBvcHVwLW92ZXJsYXkge1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgei1pbmRleDogMTAwMDtcbi8vIH1cblxuLy8gLnBvcHVwLWNvbnRlbnQge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMjBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xuLy8gICB3aWR0aDogNTAlO1xuLy8gfVxuXG4vLyAucG9wdXAtaGVhZGVyIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuLy8gfVxuXG4vLyAucG9wdXAtaGVhZGVyIGg0IHtcbi8vICAgZm9udC1zaXplOiAxOHB4O1xuLy8gfVxuXG4vLyAuY2xvc2UtYnRuIHtcbi8vICAgYmFja2dyb3VuZDogbm9uZTtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLnBvcHVwLWZvb3RlciB7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gfVxuXG4vLyAvLyBCdXR0b24gXG5cbi8vIC5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuYnRuLWNhbmNlbCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4vLyAgIHBhZGRpbmc6IDZweCAyNXB4O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gLmJ0bi1jYW5jZWw6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4vLyB9XG5cbi8vIC5idG4tc3VibWl0IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbi8vICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbi8vICAgcGFkZGluZzogNnB4IDI1cHg7XG4vLyAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGN1cnNvcjogbm8tZHJvcDtcbi8vIH1cblxuLy8gLmJ0bi1zdWJtaXQ6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4vLyB9XG5cbi8vIC5lcnJvci10ZXh0IHtcbi8vICAgY29sb3I6ICNmZjQ0NDQ7XG4vLyAgIGZvbnQtc2l6ZTogMC44cmVtO1xuLy8gICBtYXJnaW4tdG9wOiA0cHg7XG4vLyB9XG5cbi8vIC5idG4tc3VibWl0OmRpc2FibGVkIHtcbi8vICAgb3BhY2l0eTogMC43O1xuLy8gICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuLy8gfVxuXG4vLyAuZXJyb3ItbWVzc2FnZUFwaSB7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB0b3A6IC0yMHB4O1xuLy8gICBsZWZ0OiAtMjBweDtcbi8vIH1cblxuLy8gLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBjb2xvcjogIzA2NzJFNDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiAtMjBweDtcbi8vICAgbGVmdDogLTIwcHg7XG4vLyB9XG5cbi8vIC5lcnJvci1tZXNzYWdlQXBpMiB7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyAuZXJyb3Ige1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgY29sb3I6ICNmZjAwMDA7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB9XG5cbi8vIC5ncmlkX2NvbG9ubmUge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuLy8gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbi8vICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4vLyAgIGdyaWQtcm93LWdhcDogMHB4O1xuLy8gICBnYXA6IDIwcHg7XG4vLyB9XG4gIFxuXG5cbi5kZWxldGUtYm91dGlxdWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRyZSBob3Jpem9udGFsZW1lbnQgKi9cbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5kZWxldGUtYm91dGlxdWUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM3YTdhN2FlNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMHB4O1xuICBcbn1cblxuLmRlbGV0ZS1ib3V0aXF1ZS1idG46aG92ZXJ7XG4gIGNvbG9yOiAjZmEyYTJhO1xufVxuXG4uYnRuLWNvbmZpcm0sXG4uYnRuLWNhbmNlbCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uYnRuLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiODNmMjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcbn1cblxuLnN3aXRjaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXJCIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlckIgLm1vZGFsLWNvbnRlbnQtYXZlckIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6ICMwMDA7IC8qIHBvdXIgcydhc3N1cmVyIHF1ZSBsZSB0ZXh0ZSBlc3QgdmlzaWJsZSAqL1xufVxuXG5cbi5tb2RhbC1hY3Rpb25zLWF2ZXJCIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi1jb25maXJtQiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53777:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CARD_CONFIG: () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   MatCard: () => (/* binding */ MatCard),
/* harmony export */   MatCardActions: () => (/* binding */ MatCardActions),
/* harmony export */   MatCardAvatar: () => (/* binding */ MatCardAvatar),
/* harmony export */   MatCardContent: () => (/* binding */ MatCardContent),
/* harmony export */   MatCardFooter: () => (/* binding */ MatCardFooter),
/* harmony export */   MatCardHeader: () => (/* binding */ MatCardHeader),
/* harmony export */   MatCardImage: () => (/* binding */ MatCardImage),
/* harmony export */   MatCardLgImage: () => (/* binding */ MatCardLgImage),
/* harmony export */   MatCardMdImage: () => (/* binding */ MatCardMdImage),
/* harmony export */   MatCardModule: () => (/* binding */ MatCardModule),
/* harmony export */   MatCardSmImage: () => (/* binding */ MatCardSmImage),
/* harmony export */   MatCardSubtitle: () => (/* binding */ MatCardSubtitle),
/* harmony export */   MatCardTitle: () => (/* binding */ MatCardTitle),
/* harmony export */   MatCardTitleGroup: () => (/* binding */ MatCardTitleGroup),
/* harmony export */   MatCardXlImage: () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 57708);






/** Injection token that can be used to provide the default options the card module. */
const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_CARD_CONFIG');
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCard {
  appearance;
  constructor() {
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || 'raised';
  }
  static ɵfac = function MatCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCard)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 4,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: [".mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:\"\";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [".mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:\"\";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n"]
    }]
  }], () => [], {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardTitle {
  static ɵfac = function MatCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardTitle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
class MatCardTitleGroup {
  static ɵfac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardTitleGroup)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardContent {
  static ɵfac = function MatCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardContent)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardSubtitle {
  static ɵfac = function MatCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardSubtitle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardActions {
  // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
  // as to not conflict with the native `align` attribute.
  /** Position of the actions inside the card. */
  align = 'start';
  static ɵfac = function MatCardActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardActions)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardHeader {
  static ɵfac = function MatCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardHeader)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardFooter {
  static ɵfac = function MatCardFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardFooter)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      }
    }]
  }], null, null);
})();
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardImage {
  static ɵfac = function MatCardImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but small. */
class MatCardSmImage {
  static ɵfac = function MatCardSmImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardSmImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but medium. */
class MatCardMdImage {
  static ɵfac = function MatCardMdImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardMdImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but large. */
class MatCardLgImage {
  static ɵfac = function MatCardLgImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardLgImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but extra-large. */
class MatCardXlImage {
  static ɵfac = function MatCardXlImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardXlImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardAvatar {
  static ɵfac = function MatCardAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardAvatar)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      }
    }]
  }], null, null);
})();
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {
  static ɵfac = function MatCardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatCardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    }]
  }], null, null);
})();


/***/ }),

/***/ 14102:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatDivider: () => (/* binding */ MatDivider),
/* harmony export */   MatDividerModule: () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 64527);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 57708);






class MatDivider {
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.c)(value);
  }
  _vertical = false;
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.c)(value);
  }
  _inset = false;
  static ɵfac = function MatDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatDivider)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatDivider,
    selectors: [["mat-divider"]],
    hostAttrs: ["role", "separator", 1, "mat-divider"],
    hostVars: 7,
    hostBindings: function MatDivider_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
      }
    },
    inputs: {
      vertical: "vertical",
      inset: "inset"
    },
    decls: 0,
    vars: 0,
    template: function MatDivider_Template(rf, ctx) {},
    styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-divider',
      host: {
        'role': 'separator',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-divider-vertical]': 'vertical',
        '[class.mat-divider-horizontal]': '!vertical',
        '[class.mat-divider-inset]': 'inset',
        'class': 'mat-divider'
      },
      template: '',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
    }]
  }], null, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class MatDividerModule {
  static ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatDividerModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatDividerModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M, MatDivider],
      exports: [MatDivider, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M]
    }]
  }], null, null);
})();


/***/ }),

/***/ 56755:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/module-BXZhw7pQ.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ 39539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-field-DqPi4knt.mjs */ 69902);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 57708);





class MatFormFieldModule {
  static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatFormFieldModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatFormFieldModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.j, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.M, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.b, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.c, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.e, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.g],
      exports: [_form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.j, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.M, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.c, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.b, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.e, _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_3__.g, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    }]
  }], null, null);
})();


/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_detail-edit-client_detail-edit-client_component_ts.js.map