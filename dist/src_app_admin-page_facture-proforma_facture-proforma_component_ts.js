"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture-proforma_facture-proforma_component_ts"],{

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

/***/ 66375:
/*!********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/produit.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitService: () => (/* binding */ ProduitService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class ProduitService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  ajouterProduit(boutiqueIds, quantites, seuilAlert, produit, imageFile, addToStock, datePreemption) {
    const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
    const formData = new FormData();
    formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
    formData.append('quantites', JSON.stringify(quantites));
    formData.append('produit', JSON.stringify(produit));
    formData.append('seuilAlert', JSON.stringify(seuilAlert));
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
    // Ajouter dans formData
    if (datePreemption) {
      formData.append('datePreemption', datePreemption);
    }
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(url, formData, {
        headers
      });
    }));
  }
  modifierProduit(produit, file) {
    const formData = new FormData();
    // Supprime id du payload si non nécessaire
    const {
      id,
      ...productData
    } = produit;
    formData.append('produit', JSON.stringify(productData));
    formData.append('addToStock', produit.enStock ? 'true' : 'false');
    if (file) {
      formData.append('image', file, file.name);
    }
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateProduit/${produit.id}`, formData, {
        headers
      });
    }));
  }
  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
  getProduitById(productId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${productId}`, {
        headers
      });
    }));
  }
  // Méthode pour récupérer la liste des produits d'une boutique
  getProduitsEntreprise(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${boutiqueId}/stock`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }));
  }
  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
  getProduitBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, {
        headers
      });
    }));
  }
  // Nouvelle méthode pour récupérer tous les produits de l'entreprise
  getProduitsByEntrepriseId(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, {
        headers
      });
    }));
  }
  getProduitsParEntreprise(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, {
        headers
      });
    }));
  }
  // Méthode pour recuperer les fournisseur de lutilisateur connecter
  getFournisseurs() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/get-fournisseurs`, {
        headers
      });
    }));
  }
  // Ajoutez un paramètre pour les IDs de boutiques
  importProduitsFromExcel(formData, boutiqueIds) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // Ajoutez les IDs de boutique dans le FormData
      formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
      return this.http.post(`${this.apiUrl}/import-produits-excel`, formData, {
        headers
      });
    }));
  }
  // Pour les produits d'entreprise (toutes les boutiques) :
  getProduitsByEntrepriseIdPaginated(entrepriseId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.http.get(`${this.apiUrl}/entreprise/${entrepriseId}/produits/paginated`, {
        headers,
        params
      });
    }));
  }
  // Pour les produits d'une boutique :
  getProduitsEntreprisePaginated(boutiqueId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.http.get(`${this.apiUrl}/boutique/${boutiqueId}/produits/paginated`, {
        headers,
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }));
  }
  static {
    this.ɵfac = function ProduitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProduitService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ProduitService,
      factory: ProduitService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 18116:
/*!***************************************************************************!*\
  !*** ./src/app/admin-page/facture-proforma/facture-proforma.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureProformaComponent: () => (/* binding */ FactureProformaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 43268);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 56755);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 40211);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SERVICES/client-service */ 47746);
/* harmony import */ var _SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/factureproforma-service */ 72409);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SERVICES/Module-Service */ 84173);






















const _c0 = () => [6, 10, 25, 100];
function FactureProformaComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleView("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_11_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleView("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Liste ", ctx_r1.isListView ? "\u2713" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Cadre ", !ctx_r1.isListView ? "\u2713" : "", " ");
  }
}
function FactureProformaComponent_div_0_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_14_div_3_Template_div_click_0_listener() {
      const type_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.choisirType(type_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", type_r6.value === ctx_r1.typeSelectionne);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r6.label, " ");
  }
}
function FactureProformaComponent_div_0_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Date d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function FactureProformaComponent_div_0_div_14_div_4_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.dateDebut, $event) || (ctx_r1.dateDebut = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Date fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function FactureProformaComponent_div_0_div_14_div_4_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.dateFin, $event) || (ctx_r1.dateFin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dateDebut);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dateFin);
  }
}
function FactureProformaComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FactureProformaComponent_div_0_div_14_div_3_Template, 2, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FactureProformaComponent_div_0_div_14_div_4_Template, 7, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.appliquerFiltre());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\uD83D\uDD0D Appliquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.typesPeriode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.typeSelectionne === "personnalise");
  }
}
function FactureProformaComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 44)(5, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Acc\u00E8s restreint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 46)(9, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Veuillez renouveler votre abonnement pour acc\u00E9der \u00E0 ce module.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_19_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.redirigerAccueil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.messageErreur);
  }
}
function FactureProformaComponent_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.totalAllFactures, " ");
  }
}
function FactureProformaComponent_div_0_ng_container_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statut_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.factureCounts[statut_r10.value], " ");
  }
}
function FactureProformaComponent_div_0_ng_container_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 53);
  }
}
function FactureProformaComponent_div_0_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_ng_container_28_Template_div_click_1_listener() {
      const statut_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectStatut(statut_r10.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FactureProformaComponent_div_0_ng_container_28_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FactureProformaComponent_div_0_ng_container_28_div_5_Template, 1, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const statut_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("name_boutique_active", ctx_r1.selectedStatut === statut_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statut_r10.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.factureCounts[statut_r10.value] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r11 !== ctx_r1.statuts.length - 1);
  }
}
function FactureProformaComponent_div_0_table_29_tr_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ligne_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ligne_r15.produit.nom, " (x", ligne_r15.quantite, ") ");
  }
}
function FactureProformaComponent_div_0_table_29_tr_20_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FactureProformaComponent_div_0_table_29_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_table_29_tr_20_Template_tr_click_0_listener() {
      const facture_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showDetails(facture_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, FactureProformaComponent_div_0_table_29_tr_20_div_9_Template, 2, 2, "div", 23)(10, FactureProformaComponent_div_0_table_29_tr_20_div_10_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 59)(12, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](facture_r14.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 9, facture_r14.dateCreation, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](facture_r14.client || facture_r14.entrepriseClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", facture_r14.ligneFactureProforma == null ? null : facture_r14.ligneFactureProforma.slice(0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (facture_r14.ligneFactureProforma == null ? null : facture_r14.ligneFactureProforma.length) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getStatutClass(facture_r14.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", facture_r14.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 12, facture_r14.totalFacture), " CFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", facture_r14.dateRelance ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](19, 14, facture_r14.dateRelance, "dd-MM-yyyy", "fr_FR") : "pas de date", " ");
  }
}
function FactureProformaComponent_div_0_table_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr", 54)(3, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_table_29_Template_th_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sort("numeroFacture"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " N\u00B0 Facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_table_29_Template_th_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sort("dateCreation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Doit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Date Relance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, FactureProformaComponent_div_0_table_29_tr_20_Template, 20, 18, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.sortField === "numeroFacture" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.sortField === "dateCreation" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFactures);
  }
}
function FactureProformaComponent_div_0_div_30_div_1_ng_container_28_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ligne_r18.nomProduit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ligne_r18.quantite, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 3, ligne_r18.montantTotal), " ");
  }
}
function FactureProformaComponent_div_0_div_30_div_1_ng_container_28_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 79)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FactureProformaComponent_div_0_div_30_div_1_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FactureProformaComponent_div_0_div_30_div_1_ng_container_28_tr_1_Template, 8, 5, "tr", 23)(2, FactureProformaComponent_div_0_div_30_div_1_ng_container_28_tr_2_Template, 7, 0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const facture_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", facture_r17.ligneFactureProforma.slice(0, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", facture_r17.ligneFactureProforma.length > 1);
  }
}
function FactureProformaComponent_div_0_div_30_div_1_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Aucun produit dans cette facture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FactureProformaComponent_div_0_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_div_30_div_1_Template_div_click_0_listener() {
      const facture_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showDetails(facture_r17.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 64)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Facture Pro forma");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 65)(5, "div", 66)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 67)(9, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Client(s) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 67)(14, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "table")(19, "thead")(20, "tr")(21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Quantit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Montant Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, FactureProformaComponent_div_0_div_30_div_1_ng_container_28_Template, 3, 2, "ng-container", 71)(29, FactureProformaComponent_div_0_div_30_div_1_ng_template_29_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 74)(35, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " - Etat - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 76)(40, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " MONTANT TOTAL TTC : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const facture_r17 = ctx.$implicit;
    const noLines_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](30);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("N ", facture_r17.numeroFacture, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", facture_r17.client || facture_r17.entrepriseClient, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", facture_r17.dateCreation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", facture_r17.ligneFactureProforma == null ? null : facture_r17.ligneFactureProforma.length)("ngIfElse", noLines_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.getImageSrc(facture_r17.statut), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getStatutClass(facture_r17.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", facture_r17.statut, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 9, facture_r17.totalFacture), " CFA ");
  }
}
function FactureProformaComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FactureProformaComponent_div_0_div_30_div_1_Template, 45, 11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFactures);
  }
}
function FactureProformaComponent_div_0_mat_paginator_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function FactureProformaComponent_div_0_mat_paginator_32_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r1.filteredFactures.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
  }
}
function FactureProformaComponent_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Aucun facture pro forma trouv\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FactureProformaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Facture pro forma");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 6)(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goToAddProduit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Cr\u00E9er une facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showDropdown = !ctx_r1.showDropdown);
    })("clickOutside", function FactureProformaComponent_div_0_Template_div_clickOutside_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showDropdown = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, FactureProformaComponent_div_0_div_11_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, FactureProformaComponent_div_0_div_14_Template, 7, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 13)(17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function FactureProformaComponent_div_0_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FactureProformaComponent_div_0_Template_input_ngModelChange_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSearchChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_Template_i_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r1.searchText = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSearchChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, FactureProformaComponent_div_0_div_19_Template, 15, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_div_0_Template_div_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectStatut(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Toutes les \u00E9tats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, FactureProformaComponent_div_0_span_26_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, FactureProformaComponent_div_0_ng_container_28_Template, 6, 5, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, FactureProformaComponent_div_0_table_29_Template, 21, 5, "table", 24)(30, FactureProformaComponent_div_0_div_30_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, FactureProformaComponent_div_0_mat_paginator_32_Template, 1, 4, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, FactureProformaComponent_div_0_div_33_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.isListView ? "ri-list-check" : "ri-apps-fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.dropdownOuvert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.searchText ? "ri-close-line red-icon" : "ri-search-2-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.accesAutorise);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("name_boutique_active", ctx_r1.selectedStatut === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.totalAllFactures > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.statuts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isListView);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.isListView);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.filteredFactures.length > ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.facturesLoaded && ctx_r1.filteredFactures.length === 0);
  }
}
function FactureProformaComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.messageErreur, " ");
  }
}
function FactureProformaComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FactureProformaComponent_ng_template_1_div_0_Template, 2, 1, "div", 83);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.messageErreur);
  }
}
class FactureProformaComponent {
  constructor(router, clientService, factureProFormaService, produitService, usersService, moduleService, route) {
    this.router = router;
    this.clientService = clientService;
    this.factureProFormaService = factureProFormaService;
    this.produitService = produitService;
    this.usersService = usersService;
    this.moduleService = moduleService;
    this.route = route;
    this.pendingAdjustments = [];
    this.description = '';
    this.typeDestinataire = 'client';
    this.selectedClientId = null;
    this.selectedEntrepriseId = null;
    this.nomEntreprise = '';
    this.produits = [];
    this.lignesFacture = [{
      produitId: 0,
      quantite: 1
    }];
    this.clients = [];
    this.totalClients = 0;
    this.noClientsAvailable = false;
    this.entreprises = [];
    this.remiseTVAActive = false;
    this.remisePourcentage = 0;
    this.tva = 0;
    this.entrepriseId = 0;
    this.userEntrepriseId = null;
    this.isLoading = false;
    this.facturesproforma = [];
    // Variables existantes...
    this.isListView = true;
    this.showDropdown = false;
    this.searchTerm = '';
    // filteredFactures: any[] = [];
    this.facturesLoaded = false;
    this.searchText = '';
    this.factureCounts = {};
    this.totalAllFactures = 0;
    // Pagination
    this.pageSize = 10;
    this.currentPage = 0;
    this.facturesFiltrees = []; // résultats backend filtrés
    this.filteredFacturess = [];
    this.sortField = 'numeroFacture'; // Au lieu de 'any'
    this.sortDirection = 'asc';
    // Ajouter dans la classe
    this.selectedStatut = null;
    this.statuts = [{
      value: 'BROUILLON',
      label: 'Brouillon'
    }, {
      value: 'APPROUVE',
      label: 'Approuvé'
    }, {
      value: 'ENVOYE',
      label: 'Envoyé'
    }, {
      value: 'VALIDE',
      label: 'Validé'
    }, {
      value: 'ANNULE',
      label: 'Annulé'
    }];
    this.accesAutorise = false;
    this.chargementFini = false;
    this.messageErreur = "";
    this.tempsRestantEssai = null;
    // Trier
    this.typeSelectionne = 'jour';
    this.dateDebut = '';
    this.dateFin = '';
    this.factures = [];
    this.dropdownOuvert = false;
    this.typesPeriode = [{
      value: 'jour',
      label: 'Par jour'
    }, {
      value: 'mois',
      label: 'Par mois'
    }, {
      value: 'annee',
      label: 'Par année'
    }, {
      value: 'personnalise',
      label: 'Personnalisé'
    }];
  }
  ngOnInit() {
    const savedView = localStorage.getItem('factureView');
    this.isListView = savedView !== 'grid';
    this.getUserInfo();
    this.verifierAcces();
    this.route.queryParams.subscribe(params => {
      const etatParam = params['etat'];
      if (etatParam && this.statuts.some(s => s.value === etatParam)) {
        this.selectStatut(etatParam);
      }
    });
  }
  toggleView(viewType) {
    this.isListView = viewType === 'list';
    localStorage.setItem('factureView', viewType);
  }
  goToAddProduit() {
    this.router.navigate(['/addfacture-proforma']);
  }
  clearSearch() {
    this.searchTerm = '';
  }
  // Corriger la signature de la méthode sort
  // sort(field: string) { // Spécifier le type string explicitement
  //   if (this.sortField === field) {
  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortField = field;
  //     this.sortDirection = 'asc';
  //   }
  //   this.facturesproforma.sort((a, b) => {
  //     const valueA = a[field]?.toString().toLowerCase() ?? '';
  //     const valueB = b[field]?.toString().toLowerCase() ?? '';
  //     return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
  //   });
  // }
  // Corriger la signature de la méthode sort
  sort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field; // Maintenant le type correspond
      this.sortDirection = 'asc';
    }
    this.facturesproforma.sort((a, b) => {
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }
  get filteredFactures() {
    let result = [...this.facturesproforma];
    // Filtre par statut
    if (this.selectedStatut) {
      result = result.filter(f => f.statut === this.selectedStatut);
    }
    // Filtre par texte
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase().trim();
      result = result.filter(f => f.numeroFacture?.toLowerCase().includes(searchLower) || f.client?.toLowerCase().includes(searchLower) || f.entrepriseClient?.toLowerCase().includes(searchLower) || f.totalFacture?.toString().includes(this.searchText));
    }
    // Tri
    // if (this.sortField) {
    //     result.sort((a, b) => {
    //         let valueA = a[this.sortField];
    //         let valueB = b[this.sortField];
    //         // Cas particulier pour les dates
    //         if (this.sortField === 'dateCreation') {
    //             valueA = new Date(valueA).getTime();
    //             valueB = new Date(valueB).getTime();
    //             return (valueA - valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    //         }
    //         valueA = (valueA ?? '').toString().toLowerCase();
    //         valueB = (valueB ?? '').toString().toLowerCase();
    //         return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    //     });
    // }
    return result;
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  // Méthode pour filtrer par statut
  selectStatut(statut) {
    this.selectedStatut = statut;
    this.currentPage = 0;
  }
  // Modifier le getter paginatedFactures
  get paginatedFactures() {
    const start = this.currentPage * this.pageSize;
    return this.filteredFactures.slice(start, start + this.pageSize);
  }
  getTotalFacture(facture) {
    return facture.ligneFactureProforma?.reduce((acc, ligne) => acc + ligne.montantTotal, 0) || 0;
  }
  getUserInfo() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        this.loadFactproformaOfEntreprise(this.userEntrepriseId);
        // Initialiser avec toutes les factures
        // this.filteredFactures = [...this.facturesproforma];
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
        this.facturesLoaded = true;
      }
    });
  }
  loadFactproformaOfEntreprise(userEntrepriseId) {
    this.isLoading = true;
    this.facturesLoaded = false;
    this.factureProFormaService.getAlFactproformaOfEntreprise(userEntrepriseId).subscribe({
      next: data => {
        this.facturesproforma = data.map(facturesproforma => ({
          ...facturesproforma
        }));
        // Calculer les comptages après le chargement
        this.calculateFactureCounts();
        this.isLoading = false;
        this.facturesLoaded = true;
      },
      error: err => {
        console.error('Erreur lors du chargement des facture proforma', err);
        this.isLoading = false;
        this.facturesLoaded = true;
      }
    });
  }
  showDetails(factureId) {
    // Redirige vers la page de détail
    this.router.navigate(['/facture-proforma-details', factureId]);
  }
  getImageSrc(statut) {
    switch (statut) {
      case 'BROUILLON"':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png';
      case 'APPROUVE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-bleu-.png';
      case 'ENVOYE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-orange.png';
      case 'VALIDE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Vert.png';
      case 'ANNULE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-rouge.png';
      default:
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png';
    }
  }
  getStatutClass(statut) {
    switch (statut) {
      case 'BROUILLON':
        return 'etat-gris';
      case 'APPROUVE':
        return 'etat-bleu';
      case 'ENVOYE':
        return 'etat-orange';
      case 'VALIDE':
        return 'etat-vert';
      case 'ANNULE':
        return 'etat-rouge';
      default:
        return 'etat-gris';
    }
  }
  verifierAcces() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        const moduleFacturation = modules.find(m => m.code === 'GESTION_FACTURATION');
        if (moduleFacturation?.actif) {
          this.accesAutorise = true;
          this.tempsRestantEssai = moduleFacturation.tempsRestantEssai || null;
        } else {
          this.accesAutorise = false;
          this.messageErreur = moduleFacturation?.tempsRestantEssai ? "Votre période d'essai est terminée." : "Ce module est inactif.";
        }
        this.chargementFini = true;
      },
      error: err => {
        this.accesAutorise = false;
        this.messageErreur = "Erreur lors de la vérification d'accès.";
        this.chargementFini = true;
      }
    });
  }
  onSearchChange() {
    this.currentPage = 0; // Réinitialiser à la première page
    // Le filtrage sera géré automatiquement par le getter filteredFactures
  }
  redirigerAccueil() {
    this.router.navigate(['/']);
  }
  calculateFactureCounts() {
    // Réinitialiser les compteurs
    this.factureCounts = {};
    this.totalAllFactures = this.facturesproforma.length;
    // Compter par statut
    this.facturesproforma.forEach(facture => {
      const statut = facture.statut;
      if (statut) {
        this.factureCounts[statut] = (this.factureCounts[statut] || 0) + 1;
      }
    });
  }
  get labelTypeSelectionne() {
    return this.typesPeriode.find(t => t.value === this.typeSelectionne)?.label || 'Filtrer';
  }
  toggleDropdown() {
    this.dropdownOuvert = !this.dropdownOuvert;
  }
  choisirType(type) {
    this.typeSelectionne = type;
    this.dateDebut = '';
    this.dateFin = '';
  }
  appliquerFiltre() {
    if (this.typeSelectionne === 'personnalise' && (!this.dateDebut || !this.dateFin)) {
      alert("Veuillez sélectionner une date de début et de fin.");
      return;
    }
    this.factureProFormaService.getFacturesParPeriode(this.typeSelectionne, this.dateDebut, this.dateFin).subscribe({
      next: data => {
        console.log("lhhhhhh", data);
        this.facturesproforma = data;
        this.currentPage = 0;
        this.dropdownOuvert = false;
      },
      error: err => {
        console.error('Erreur de chargement des factures:', err);
      }
    });
  }
  onClickOutside(target) {
    if (!target.closest('.filter-dropdown-wrapper') && !target.closest('.filter-toggle-icon')) {
      this.dropdownOuvert = false;
      // this.reinitialiserFiltre();
    }
  }
  reinitialiserFiltre() {
    this.typeSelectionne = 'annee';
    this.dateDebut = '';
    this.dateFin = '';
    this.dropdownOuvert = false;
    this.factureProFormaService.getFacturesParPeriode('annee').subscribe({
      next: data => {
        this.facturesproforma = data;
        this.currentPage = 0;
      },
      error: err => {
        console.error('Erreur lors du chargement des factures:', err);
      }
    });
  }
  static {
    this.ɵfac = function FactureProformaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureProformaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_1__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_2__.FactureProFormaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_5__.ModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FactureProformaComponent,
      selectors: [["app-facture-proforma"]],
      hostBindings: function FactureProformaComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FactureProformaComponent_click_HostBindingHandler($event) {
            return ctx.onClickOutside($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
        }
      },
      decls: 3,
      vars: 1,
      consts: [["accesRefuse", ""], ["noLines", ""], ["class", "containerTable", 4, "ngIf"], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], [1, "add-task", 3, "click"], [1, "contentIcon"], [1, "bare"], ["clickOutside", "", 1, "contentIcon", 3, "click", "clickOutside"], ["class", "view-dropdown", 4, "ngIf"], ["class", "filter-dropdown-wrapper", 4, "ngIf"], [1, "inputSearch"], ["type", "text", "placeholder", "Recherche...", 3, "ngModelChange", "ngModel"], [3, "click", "ngClass"], ["class", "access-overlay", 4, "ngIf"], [1, "container_list_boutique"], [1, "content_list_boutique"], [1, "name_boutique"], [1, "all_boutique", 3, "click"], [1, "all_boutique", 2, "display", "flex", "align-items", "center"], ["class", "facture-count", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "parent", 4, "ngIf"], [1, "pagination"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["class", "no-client-message", 4, "ngIf"], [1, "view-dropdown"], [1, "dropdown-item", 3, "click"], [1, "filter-dropdown-wrapper"], [1, "filter-dropdown"], [1, "filter-type"], ["class", "filter-option", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "filter-date", 4, "ngIf"], [1, "filter-btn", 3, "click"], [1, "filter-option", 3, "click"], [1, "filter-date"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "access-overlay"], [1, "access-card"], ["aria-hidden", "true", 1, "icon-container"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48"], ["d", "M18 6L6 18", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 6L18 18", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "description"], [1, "message-principal"], [1, "dashboard-button", 3, "click"], [1, "facture-count"], [1, "statut-option", 3, "click"], [2, "display", "flex", "align-items", "center"], ["class", "barre", 4, "ngIf"], [1, "barre"], [1, "tr"], [1, "th", 3, "click"], [1, "th"], ["class", "tr", 3, "click", 4, "ngFor", "ngForOf"], [1, "tr", 3, "click"], [1, "td"], [3, "ngClass"], [1, "parent"], ["class", "cadre_cahier", 3, "click", 4, "ngFor", "ngForOf"], [1, "cadre_cahier", 3, "click"], [1, "title_facture"], [1, "information_cadre"], [1, "num_facture"], [1, "double_info"], [1, "left_name"], [1, "right_name"], [1, "right_name", "date_name", 2, "font-size", "11px"], [4, "ngIf", "ngIfElse"], [1, "image_etiquette"], ["alt", "Etiquette", 3, "src"], [1, "etat", 3, "ngClass"], [1, "tilte_etat"], [1, "double_info1"], ["class", "facture_trois", 4, "ngIf"], [1, "tb_total"], [1, "facture_trois"], ["colspan", "3", 1, "text-center"], [3, "page", "length", "pageSize", "pageSizeOptions"], [1, "no-client-message"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-warning"]],
      template: function FactureProformaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, FactureProformaComponent_div_0_Template, 34, 15, "div", 2)(1, FactureProformaComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chargementFini);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__.CustomNumberPipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.M, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.M, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.M, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule],
      styles: ["@charset \"UTF-8\";\n.title_return[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 0 10px;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntr.tr[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 8px;\n}\n\nth.th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 10px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n  transition: all 0.5s ease;\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  background-color: #eee;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.content_sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.btn_add_ligne[_ngcontent-%COMP%] {\n  background-color: #e6f2ff;\n  border: 1px solid #007bff;\n  padding: 5px 10px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.btn_remove[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: red;\n}\n\n.content_cadre_double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n\n\n.imgClient_grid[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  border: none;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n  position: relative;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.facture_trois[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n\n\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.view-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  min-width: 150px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.container_list_boutique[_ngcontent-%COMP%] {\n  scrollbar-width: auto;\n  overflow: auto;\n  scrollbar-color: #888 #f1f1f1;\n  scrollbar-width: thin;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 3px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: blue; \n\n  border-radius: 4px; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: red; \n\n}\n\n.name_boutique[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  margin: 30px 0 20px;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n}\n\n.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 0;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 16px;\n  margin: 4px 0;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.name_boutique[_ngcontent-%COMP%]   p.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  color: #000 !important;\n}\n\n\n\n.etat-gris[_ngcontent-%COMP%] {\n  color: #808080;\n} \n\n.etat-bleu[_ngcontent-%COMP%] {\n  color: #0671e4;\n} \n\n.etat-orange[_ngcontent-%COMP%] {\n  color: #ff9900;\n} \n\n.etat-vert[_ngcontent-%COMP%] {\n  color: #008000;\n} \n\n.etat-rouge[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n\n\n.td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 0.9em;\n}\n\n\n\n\n\n\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.no-phone-text[_ngcontent-%COMP%] {\n  color: #c3c3c3; \n\n  font-style: italic; \n\n}\n\n.info_cadre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.cadreChoix[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.sizeBox[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.statut[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-left: auto;\n  font-weight: bold;\n  color: #6c757d;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.cadre_cahier[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease;\n  border: 1px solid #e0e0e0;\n  height: 287px;\n  position: relative;\n  cursor: pointer;\n}\n\n.cadre_cahier[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.title_facture[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2px;\n}\n\n.num_facture[_ngcontent-%COMP%], \n.double_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.left_name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.title_facture[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.65px;\n}\n\n.num_facture[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n}\n\n.num_facture[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.double_info[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.double_info1[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 5px;\n  font-size: 6px;\n  margin-top: 2%;\n  color: #6c757d;\n  text-align: end;\n  display: block;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  opacity: 0.7;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 8px;\n  font-size: 8px;\n}\n\nth.th[_ngcontent-%COMP%], td.td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 20px;\n  font-size: 13px;\n  color: black;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ffffff;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #fefefe;\n}\n\ntr.tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr.tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.tb_total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.image_etiquette[_ngcontent-%COMP%] {\n  width: 147px;\n  height: 108px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: absolute;\n  left: -24px;\n  transform: rotate(-19deg);\n  bottom: -23px;\n}\n\n.image_etiquette[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.etat[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: rotate(12deg);\n  top: 45px;\n  left: 58px;\n}\n\n\n\n.etat[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.etat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n}\n\n.etat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: lowercase !important;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n\n.tilte_etat[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  color: rgba(255, 255, 255, 0.537254902) !important;\n}\n\n\n\n.etat-gris[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.etat-gris[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4823529412) !important;\n}\n\n.etat-orange[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-orange[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.etat-bleu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-bleu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.etat-vert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-vert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.etat-rouge[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-rouge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.access-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  pointer-events: all;\n}\n\n.access-card[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);\n  max-width: 300px;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #EF4444;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.icon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.access-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 10px 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.access-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  line-height: 1.4;\n  margin-bottom: 24px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 11px;\n}\n\n.access-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 11px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  width: 100%;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.dashboard-button[_ngcontent-%COMP%]:hover {\n  background-color: #edcc3a;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.filter-dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block; \n\n}\n\n.filter-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  background-color: #f8f9fa;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.filter-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #eef1f4;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.filter-arrow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  min-width: 260px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);\n  padding: 16px;\n  margin-top: 8px;\n  position: absolute;\n  z-index: 1000;\n}\n\n.filter-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.filter-option[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  font-size: 14px;\n  color: #333;\n}\n\n.filter-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f6;\n}\n\n.filter-option.active[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 500;\n}\n\n.filter-date[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  margin: 8px 0 4px;\n  color: #555;\n}\n\n.filter-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 10px;\n  font-weight: 500;\n  background-color: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n  cursor: pointer;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background-color: #155fa0;\n}\n\n\n\n.filter-toggle-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #f0f0f0;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.filter-toggle-icon[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.filter-toggle-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmUtcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwwREFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMERBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtB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QUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBektGOztBQTRLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQXpLRjs7QUE0S0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UseUJBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBektGOztBQTRLQTtFQUNFLHlCQUFBO0FBektGOztBQTJLQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQXhLRjs7QUEyS0E7RUFDRSx5QkFBQTtBQXhLRjs7QUEyS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXhLRiIsImZpbGUiOiJmYWN0dXJlLXByb2Zvcm1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX3JldHVybiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgXG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRyLnRyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4gIFxudGh7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4gIFxudGgudGgge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxNXB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbn1cbiAgXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb250YWluZXJUYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiAgXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4gIFxuLmNvbnRlbnRJY29uIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuICBcbi5jb250ZW50SWNvbiBpe1xuICAgIC8vIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5jb250ZW50SWNvbiBpOmhvdmVyIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuICBcbi5iYXJlIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuICBcbi5pbnB1dFNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGVudF9zb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmJ0bl9hZGRfbGlnbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5fcmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cblxuXG5cbi5jb250ZW50X2NhZHJlX2RvdWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBsaXN0ICovXG4uaW1nQ2xpZW50IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uaW1nQ2xpZW50IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4gIFxuLmltZ0NsaWVudDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBncmlkICovXG4uaW1nQ2xpZW50X2dyaWQge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiAgXG4uaW1nQ2xpZW50X2dyaWQgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbiAgXG4uaW1nQ2xpZW50X2dyaWQ6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNvbnRlbnRJY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbi5hY3Rpb25zIGl7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi8vIC5iYXJyZSB7XG4vLyAgICAgaGVpZ2h0OiAyNXB4O1xuLy8gICAgIHdpZHRoOiAxcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuLy8gICAgIG1hcmdpbjogOHB4IDE1cHg7XG4vLyB9XG5cbi8vIHRhYmxlIFxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMThweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5mYWN0dXJlX3Ryb2lzIHRkIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRHJvcGRvd24gc3R5bGVzICovXG4uY29udGVudEljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bzsgXG4gIHNjcm9sbGJhci1jb2xvcjogIzg4OCAjZjFmMWYxO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDJweDsgXG4gIGhlaWdodDogM3B4O1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogY291bGV1ciBkdSBmb25kIGRlIGxhIHNjcm9sbGJhciAqL1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogYmx1ZTsgLyogY291bGV1ciBkdSBjdXJzZXVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogYXJyb25kaXIgbGVzIGJvcmRzIGR1IGN1cnNldXIgKi9cbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDsgLyogY291bGV1ciBkdSBjdXJzZXVyIGF1IHN1cnZvbCAqL1xufVxuXG4ubmFtZV9ib3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDMwcHggMCAyMHB4O1xufVxuXG4ubmFtZV9ib3V0aXF1ZSBwIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5iYXJyZSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICAvLyBtYXJnaW46IDAgMXB4IDE2cHg7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7IC8vIENvdWxldXIgZGUgZm9uZCBxdWFuZCBhY3RpZlxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLy8gRm9yY2UgbGEgY291bGV1ciBibGFuY2hlIHF1YW5kIGFjdGlmXG4gICAgfVxuICB9XG59XG5cbi8qIEFqb3V0ZXIgY2VzIG5vdXZlbGxlcyBjbGFzc2VzICovXG4uZXRhdC1ncmlzIHsgY29sb3I6ICM4MDgwODA7IH0gICAgICAgIC8qIE5vaXIgcG91ciBicm91aWxsb24gKi9cbi5ldGF0LWJsZXUgeyBjb2xvcjogIzA2NzFlNDsgfSAgICAgLyogQmxldSBwb3VyIGFwcHJvdXbDqSAqL1xuLmV0YXQtb3JhbmdlIHsgY29sb3I6ICNmZjk5MDA7IH0gICAvKiBPcmFuZ2UgcG91ciBlbnZvecOpICovXG4uZXRhdC12ZXJ0IHsgY29sb3I6ICMwMDgwMDA7IH0gICAgIC8qIFZlcnQgcG91ciB2YWxpZMOpICovXG4uZXRhdC1yb3VnZSB7IGNvbG9yOiAjZmYwMDAwOyB9IFxuXG4vKiBPcHRpb25uZWwgOiByZW5kcmUgbGUgdGV4dGUgcGx1cyB2aXNpYmxlICovXG4udGQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8qIEdyaWQgdmlldyBzdHlsZXMgKi9cbi8vIC5ncmlkLXZpZXcge1xuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuLy8gICAgIGdhcDogMjBweDtcbi8vIH1cblxuXG4vLyAuY2xpZW50LWNhcmQge1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbi8vICAgICBwYWRkaW5nOiAyMHB4O1xuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuLy8gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbi8vICAgICBtYXJnaW46IDIwcHggMCAtMjBweDtcbi8vIH1cblxuLy8gLmNsaWVudC1jYXJkOmhvdmVyIHtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4vLyAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyB9XG5cbi8vIC5jbGllbnQtY2FyZCBoMyB7XG4vLyAgICAgY29sb3I6ICMyYzNlNTA7XG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vIH1cblxuLy8gLm5hbWVfaWNvbiB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbi8vICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4vLyB9XG5cbi8vIC5uYW1lX2ljb24gaSB7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBtYXJnaW4tbGVmdDogMTZweDtcbi8vIH1cblxuLy8gLmNsaWVudC1jYXJkIHAge1xuLy8gICAgIG1hcmdpbjogOHB4IDA7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGNvbG9yOiAjNjY2O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBnYXA6IDhweDtcbi8vIH1cblxuLy8gLmNsaWVudC1jYXJkIHAgaSB7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gfVxuXG4vKiBBbcOpbGlvcmF0aW9ucyBkcm9wZG93biAqL1xuLy8gLnZpZXctZHJvcGRvd24ge1xuLy8gICAgIC8qIC4uLiBzdHlsZXMgZXhpc3RhbnRzIC4uLiAqL1xuLy8gICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbi8vICAgICBhbmltYXRpb246IHNjYWxlSW4gMC4xNXMgZWFzZS1vdXQ7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgc2NhbGVJbiB7XG4vLyAgICAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45KTsgb3BhY2l0eTogMDsgfVxuLy8gICAgIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuLy8gfVxuXG4vLyAuZHJvcGRvd24taXRlbSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbi8vIH1cblxuLy8gLmRyb3Bkb3duLWl0ZW06OmFmdGVyIHtcbi8vICAgICBjb250ZW50OiAn4pyTJztcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gfVxuXG4vLyAuZHJvcGRvd24taXRlbS5hY3RpdmU6OmFmdGVyIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gfVxuXG4vKiBBam91dGUgZGFucyBDU1MgKi9cbi8vIC5zdGF0dXMtYmFkZ2Uge1xuLy8gICAgIHBhZGRpbmc6IDRweCA4cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB9XG4gIFxuLy8gICAuc3RhdHVzLWFjdGl2ZSB7XG4vLyAgICAgYmFja2dyb3VuZDogI2UzZmNlZjtcbi8vICAgICBjb2xvcjogIzAwNjY0NDtcbi8vICAgfVxuICBcbi8vICAgLnN0YXR1cy1pbmFjdGl2ZSB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZhZWFlNTtcbi8vICAgICBjb2xvcjogI2JmMzYwYztcbi8vICAgfVxuXG4vLyAgIC8qIFBvdXIgbGVzIG1vYmlsZXMgKi9cbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIC50YXNrcy1oZWFkZXIge1xuLy8gICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgICBnYXA6IDE1cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gLmFkZC10YXNrIHtcbi8vICAgICAvLyB9XG4gICAgXG4vLyAgICAgLmlucHV0U2VhcmNoIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAvKiBGb3JjZSBsJ2FmZmljaGFnZSBkZXMgY2FydGVzICovXG4vLyAgICAgLmdyaWQtdmlldyB7XG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLmNsaWVudC1jYXJkIHtcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbi8vICAgICAubW9iaWxlLW9ubHkge1xuLy8gICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgfVxuXG5cbiAgXG5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vLXBob25lLXRleHQge1xuICAgIGNvbG9yOiAjYzNjM2MzOyAvKiBDb3VsZXVyIGdyaXNlIGV4ZW1wbGUgKi9cbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IC8qIE9wdGlvbm5lbCAqL1xufVxuICBcbi5pbmZvX2NhZHJlIHAge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4ucG9wdXAtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWRyZUNob2l4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpemVCb3gge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uc3RhdHV0IHtcbiAgXG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbn1cbiAgXG4uY2FkcmVfY2FoaWVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBoZWlnaHQ6IDI4N3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWRyZV9jYWhpZXI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50aXRsZV9mYWN0dXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubnVtX2ZhY3R1cmUsXG4uZG91YmxlX2luZm8gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubGVmdF9uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi50aXRsZV9mYWN0dXJlIGg1IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjVweDtcbn1cblxuLm51bV9mYWN0dXJlIHtcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xufVxuXG4ubnVtX2ZhY3R1cmUgc3BhbiB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5kb3VibGVfaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4uZG91YmxlX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmRvdWJsZV9pbmZvMSB7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIC8vIGZvbnQtc2l6ZTogOXB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDhweDtcbn1cblxudGgudGgsIHRkLnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuXG50ci50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHIudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50Yl90b3RhbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSAqL1xuLmltYWdlX2V0aXF1ZXR0ZSB7XG4gICAgd2lkdGg6IDE0N3B4O1xuICAgIGhlaWdodDogMTA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBsZWZ0OiAtN3B4O1xuICAgIGxlZnQ6IC0yNHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOWRlZyk7XG4gICAgYm90dG9tOiAtMjNweDtcbn1cbiAgXG4uaW1hZ2VfZXRpcXVldHRlIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmV0YXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG4gICAgLy8gdG9wOiA0N3B4O1xuICAgIC8vIGxlZnQ6IDYwcHg7XG4gICAgdG9wOiA0NXB4O1xuICAgIGxlZnQ6IDU4cHg7XG59XG5cbi8qIFN0eWxlIHBhciBkw6lmYXV0ICovXG4uZXRhdCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZXRhdCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZXRhdCBzcGFuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnRpbHRlX2V0YXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBjb2xvcjogI2ZmZmZmZjg5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBcbiAgLyogU3R5bGVzIHNww6ljaWZpcXVlcyDDoCBjaGFxdWUgc3RhdHV0ICovXG5cbiAgLmV0YXQtZ3JpcyBzcGFuIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIC5ldGF0LWdyaXMgcCB7XG4gICAgY29sb3I6ICMwMDAwMDA3YiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZXRhdC1vcmFuZ2UgcCxcbiAgLmV0YXQtb3JhbmdlIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuZXRhdC1ibGV1IHAsXG4gIC5ldGF0LWJsZXUgc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7IFxuICB9XG4gIFxuICAuZXRhdC12ZXJ0IHAsXG4gIC5ldGF0LXZlcnQgc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuZXRhdC1yb3VnZSBwLFxuICAuZXRhdC1yb3VnZSBzcGFuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcblxuXG4gIC5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4ubm8tY2xpZW50LW1lc3NhZ2UgeyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cblxuLmFjY2Vzcy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLmFjY2Vzcy1jYXJkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NDQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmljb24tY29udGFpbmVyIHN2ZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uYWNjZXNzLWNhcmQgaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMUYyOTM3O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uYWNjZXNzLWNhcmQgLmRlc2NyaXB0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5hY2Nlc3MtY2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gICAgbWFyZ2luOiAwIDAgNnB4IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG5cbn1cblxuLmRhc2hib2FyZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZGFzaGJvYXJkLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkY2MzYTtcbn1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyogUG91ciBhbGlnbmVyIGNvcnJlY3RlbWVudCBsZXMgw6lsw6ltZW50cyAqL1xuLmRyYWdnYWJsZS1pdGVtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5maWx0ZXItZHJvcGRvd24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBlc3NlbnRpZWwgcG91ciBxdWUgbGUgbWVudSBzJ2FqdXN0ZSBhdSBjb250ZW51ICovXG59XG5cbi5maWx0ZXItdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uZmlsdGVyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZjQ7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmlsdGVyLWFycm93IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uZmlsdGVyLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZpbHRlci1vcHRpb24ge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZpbHRlci1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y2O1xufVxuXG4uZmlsdGVyLW9wdGlvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWx0ZXItZGF0ZSBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogOHB4IDAgNHB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmZpbHRlci1kYXRlIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmZpbHRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NWZhMDtcbn1cbi8qIEJvdXRvbiByb25kIGF2ZWMgaWPDtG5lICovXG4uZmlsdGVyLXRvZ2dsZS1pY29uIHsgXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5maWx0ZXItdG9nZ2xlLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uZmlsdGVyLXRvZ2dsZS1pY29uIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXByb2Zvcm1hL2ZhY3R1cmUtcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwwREFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMERBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7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QUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBektGOztBQTRLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQXpLRjs7QUE0S0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UseUJBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF6S0Y7O0FBNEtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBektGOztBQTRLQTtFQUNFLHlCQUFBO0FBektGOztBQTJLQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQXhLRjs7QUEyS0E7RUFDRSx5QkFBQTtBQXhLRjs7QUEyS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXhLRjtBQURBLGc1akNBQWc1akMiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfcmV0dXJuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuICBcbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICBcbn1cblxudHIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudHIudHIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbiAgXG50aHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbiAgXG50aC50aCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE1cHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xufVxuICBcbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuICBcbnRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbiAgXG50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNvbnRhaW5lclRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuICBcbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiAgXG4uY29udGVudEljb24ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgXG4gIFxuLmNvbnRlbnRJY29uIGl7XG4gICAgLy8gcGFkZGluZzogMCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmNvbnRlbnRJY29uIGk6aG92ZXIge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4gIFxuLmJhcmUge1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4gIFxuLmlucHV0U2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250ZW50X3NvcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uYnRuX2FkZF9saWduZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmYyZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0bl9yZW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuXG5cblxuLmNvbnRlbnRfY2FkcmVfZG91YmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGxpc3QgKi9cbi5pbWdDbGllbnQge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5pbWdDbGllbnQgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbiAgXG4uaW1nQ2xpZW50OmhvdmVyIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGdyaWQgKi9cbi5pbWdDbGllbnRfZ3JpZCB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xufVxuICBcbi5pbWdDbGllbnRfZ3JpZCBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuICBcbi5pbWdDbGllbnRfZ3JpZDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY29udGVudEljb24gaSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuLmFjdGlvbnMgaXtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLy8gLmJhcnJlIHtcbi8vICAgICBoZWlnaHQ6IDI1cHg7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4vLyAgICAgbWFyZ2luOiA4cHggMTVweDtcbi8vIH1cblxuLy8gdGFibGUgXG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxOHB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbn1cbiAgXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xufVxuICBcbnRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbiAgXG50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmZhY3R1cmVfdHJvaXMgdGQge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBEcm9wZG93biBzdHlsZXMgKi9cbi5jb250ZW50SWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZXctZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvOyBcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMnB4OyBcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyAvKiBjb3VsZXVyIGR1IGZvbmQgZGUgbGEgc2Nyb2xsYmFyICovXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBibHVlOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBhcnJvbmRpciBsZXMgYm9yZHMgZHUgY3Vyc2V1ciAqL1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgYXUgc3Vydm9sICovXG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDIwcHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHAge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJhcnJlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gIC8vIG1hcmdpbjogMCAxcHggMTZweDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLm5hbWVfYm91dGlxdWUge1xuICBwIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gcGFkZGluZzogOHB4IDE2cHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICYubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTsgLy8gQ291bGV1ciBkZSBmb25kIHF1YW5kIGFjdGlmXG4gICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvLyBGb3JjZSBsYSBjb3VsZXVyIGJsYW5jaGUgcXVhbmQgYWN0aWZcbiAgICB9XG4gIH1cbn1cblxuLyogQWpvdXRlciBjZXMgbm91dmVsbGVzIGNsYXNzZXMgKi9cbi5ldGF0LWdyaXMgeyBjb2xvcjogIzgwODA4MDsgfSAgICAgICAgLyogTm9pciBwb3VyIGJyb3VpbGxvbiAqL1xuLmV0YXQtYmxldSB7IGNvbG9yOiAjMDY3MWU0OyB9ICAgICAvKiBCbGV1IHBvdXIgYXBwcm91dsODwqkgKi9cbi5ldGF0LW9yYW5nZSB7IGNvbG9yOiAjZmY5OTAwOyB9ICAgLyogT3JhbmdlIHBvdXIgZW52b3nDg8KpICovXG4uZXRhdC12ZXJ0IHsgY29sb3I6ICMwMDgwMDA7IH0gICAgIC8qIFZlcnQgcG91ciB2YWxpZMODwqkgKi9cbi5ldGF0LXJvdWdlIHsgY29sb3I6ICNmZjAwMDA7IH0gXG5cbi8qIE9wdGlvbm5lbCA6IHJlbmRyZSBsZSB0ZXh0ZSBwbHVzIHZpc2libGUgKi9cbi50ZCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLyogR3JpZCB2aWV3IHN0eWxlcyAqL1xuLy8gLmdyaWQtdmlldyB7XG4vLyAgICAgZGlzcGxheTogZ3JpZDtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4vLyAgICAgZ2FwOiAyMHB4O1xuLy8gfVxuXG5cbi8vIC5jbGllbnQtY2FyZCB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4vLyAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuLy8gICAgIG1hcmdpbjogMjBweCAwIC0yMHB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQ6aG92ZXIge1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbi8vICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vIH1cblxuLy8gLmNsaWVudC1jYXJkIGgzIHtcbi8vICAgICBjb2xvcjogIzJjM2U1MDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gfVxuXG4vLyAubmFtZV9pY29uIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuLy8gICAgIG1hcmdpbjogMCAwIDEycHggMDtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbi8vIH1cblxuLy8gLm5hbWVfaWNvbiBpIHtcbi8vICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQgcCB7XG4vLyAgICAgbWFyZ2luOiA4cHggMDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgY29sb3I6ICM2NjY7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGdhcDogOHB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQgcCBpIHtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyB9XG5cbi8qIEFtw4PCqWxpb3JhdGlvbnMgZHJvcGRvd24gKi9cbi8vIC52aWV3LWRyb3Bkb3duIHtcbi8vICAgICAvKiAuLi4gc3R5bGVzIGV4aXN0YW50cyAuLi4gKi9cbi8vICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4vLyAgICAgYW5pbWF0aW9uOiBzY2FsZUluIDAuMTVzIGVhc2Utb3V0O1xuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIHNjYWxlSW4ge1xuLy8gICAgIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IG9wYWNpdHk6IDA7IH1cbi8vICAgICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbi8vIH1cblxuLy8gLmRyb3Bkb3duLWl0ZW0ge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4vLyB9XG5cbi8vIC5kcm9wZG93bi1pdGVtOjphZnRlciB7XG4vLyAgICAgY29udGVudDogJ8OiwpzCkyc7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgICBjb2xvcjogIzA2NzJFNDtcbi8vIH1cblxuLy8gLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOjphZnRlciB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vIH1cblxuLyogQWpvdXRlIGRhbnMgQ1NTICovXG4vLyAuc3RhdHVzLWJhZGdlIHtcbi8vICAgICBwYWRkaW5nOiA0cHggOHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgfVxuICBcbi8vICAgLnN0YXR1cy1hY3RpdmUge1xuLy8gICAgIGJhY2tncm91bmQ6ICNlM2ZjZWY7XG4vLyAgICAgY29sb3I6ICMwMDY2NDQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5zdGF0dXMtaW5hY3RpdmUge1xuLy8gICAgIGJhY2tncm91bmQ6ICNmYWVhZTU7XG4vLyAgICAgY29sb3I6ICNiZjM2MGM7XG4vLyAgIH1cblxuLy8gICAvKiBQb3VyIGxlcyBtb2JpbGVzICovXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbi8vICAgICAudGFza3MtaGVhZGVyIHtcbi8vICAgICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgICAgZ2FwOiAxNXB4O1xuLy8gICAgIH1cblxuLy8gICAgIC8vIC5hZGQtdGFzayB7XG4vLyAgICAgLy8gfVxuICAgIFxuLy8gICAgIC5pbnB1dFNlYXJjaCB7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLyogRm9yY2UgbCdhZmZpY2hhZ2UgZGVzIGNhcnRlcyAqL1xuLy8gICAgIC5ncmlkLXZpZXcge1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5jbGllbnQtY2FyZCB7XG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuLy8gICAgIH1cbi8vICAgfVxuICBcbi8vICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4vLyAgICAgLm1vYmlsZS1vbmx5IHtcbi8vICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyAgIH1cblxuXG4gIFxubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uby1waG9uZS10ZXh0IHtcbiAgICBjb2xvcjogI2MzYzNjMzsgLyogQ291bGV1ciBncmlzZSBleGVtcGxlICovXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyAvKiBPcHRpb25uZWwgKi9cbn1cbiAgXG4uaW5mb19jYWRyZSBwIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnBvcHVwLWhlYWRlciBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FkcmVDaG9peCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zaXplQm94IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnN0YXR1dCB7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ucGFyZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG59XG4gIFxuLmNhZHJlX2NhaGllciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgaGVpZ2h0OiAyODdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FkcmVfY2FoaWVyOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udGl0bGVfZmFjdHVyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm51bV9mYWN0dXJlLFxuLmRvdWJsZV9pbmZvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmxlZnRfbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4udGl0bGVfZmFjdHVyZSBoNSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjY1cHg7XG59XG5cbi5udW1fZmFjdHVyZSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweDtcbn1cblxuLm51bV9mYWN0dXJlIHNwYW4ge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uZG91YmxlX2luZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuLmRvdWJsZV9pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5kb3VibGVfaW5mbzEge1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICAvLyBmb250LXNpemU6IDlweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA1JTtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnRoLCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbnRoLnRoLCB0ZC50ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbiAgXG50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbn1cblxudHIudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyLnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4udGJfdG90YWwge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgKi9cbi5pbWFnZV9ldGlxdWV0dGUge1xuICAgIHdpZHRoOiAxNDdweDtcbiAgICBoZWlnaHQ6IDEwOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gbGVmdDogLTdweDtcbiAgICBsZWZ0OiAtMjRweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTlkZWcpO1xuICAgIGJvdHRvbTogLTIzcHg7XG59XG4gIFxuLmltYWdlX2V0aXF1ZXR0ZSBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5ldGF0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICAgIC8vIHRvcDogNDdweDtcbiAgICAvLyBsZWZ0OiA2MHB4O1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiA1OHB4O1xufVxuXG4vKiBTdHlsZSBwYXIgZMODwqlmYXV0ICovXG4uZXRhdCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZXRhdCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZXRhdCBzcGFuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnRpbHRlX2V0YXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBjb2xvcjogI2ZmZmZmZjg5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBcbiAgLyogU3R5bGVzIHNww4PCqWNpZmlxdWVzIMODwqAgY2hhcXVlIHN0YXR1dCAqL1xuXG4gIC5ldGF0LWdyaXMgc3BhbiB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAuZXRhdC1ncmlzIHAge1xuICAgIGNvbG9yOiAjMDAwMDAwN2IgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmV0YXQtb3JhbmdlIHAsXG4gIC5ldGF0LW9yYW5nZSBzcGFuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmV0YXQtYmxldSBwLFxuICAuZXRhdC1ibGV1IHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmOyBcbiAgfVxuICBcbiAgLmV0YXQtdmVydCBwLFxuICAuZXRhdC12ZXJ0IHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmV0YXQtcm91Z2UgcCxcbiAgLmV0YXQtcm91Z2Ugc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG5cblxuICAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuLm5vLWNsaWVudC1tZXNzYWdlIHsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG5cbi5hY2Nlc3Mtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5hY2Nlc3MtY2FyZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGNDQ0NDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pY29uLWNvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLmFjY2Vzcy1jYXJkIGgxIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFGMjkzNztcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmFjY2Vzcy1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uYWNjZXNzLWNhcmQgLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRhc2hib2FyZC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGNjM2E7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFBvdXIgYWxpZ25lciBjb3JyZWN0ZW1lbnQgbGVzIMODwqlsw4PCqW1lbnRzICovXG4uZHJhZ2dhYmxlLWl0ZW0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmZpbHRlci1kcm9wZG93bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGVzc2VudGllbCBwb3VyIHF1ZSBsZSBtZW51IHMnYWp1c3RlIGF1IGNvbnRlbnUgKi9cbn1cblxuLmZpbHRlci10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5maWx0ZXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNDtcbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWx0ZXItYXJyb3cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5maWx0ZXItdHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZmlsdGVyLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZmlsdGVyLW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XG59XG5cbi5maWx0ZXItb3B0aW9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZpbHRlci1kYXRlIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA4cHggMCA0cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uZmlsdGVyLWRhdGUgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZmEwO1xufVxuLyogQm91dG9uIHJvbmQgYXZlYyBpY8ODwrRuZSAqL1xuLmZpbHRlci10b2dnbGUtaWNvbiB7IFxuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uZmlsdGVyLXRvZ2dsZS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmZpbHRlci10b2dnbGUtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 31034:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/menu.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_MENU_CONTENT: () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   MAT_MENU_DEFAULT_OPTIONS: () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   MAT_MENU_PANEL: () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MENU_PANEL_TOP_PADDING: () => (/* binding */ MENU_PANEL_TOP_PADDING),
/* harmony export */   MatMenu: () => (/* binding */ MatMenu),
/* harmony export */   MatMenuContent: () => (/* binding */ MatMenuContent),
/* harmony export */   MatMenuItem: () => (/* binding */ MatMenuItem),
/* harmony export */   MatMenuModule: () => (/* binding */ MatMenuModule),
/* harmony export */   MatMenuTrigger: () => (/* binding */ MatMenuTrigger),
/* harmony export */   fadeInItems: () => (/* binding */ fadeInItems),
/* harmony export */   matMenuAnimations: () => (/* binding */ matMenuAnimations),
/* harmony export */   transformMenu: () => (/* binding */ transformMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 37);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 76271);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 6988);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ 513);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5758);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 61235);
/* harmony import */ var _structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structural-styles-BQUT6wsL.mjs */ 66222);
/* harmony import */ var _ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ripple-BT3tzh6F.mjs */ 66027);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 7480);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 99932);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 16895);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ 11437);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./index-SYVYjXwK.mjs */ 45901);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 57708);



















/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
const _c0 = ["mat-menu-item", ""];
const _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
const _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.panelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
const MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');

/**
 * Single item inside a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
class MatMenuItem {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.F);
  _parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  /** ARIA role for the menu item. */
  role = 'menuitem';
  /** Whether the menu item is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the menu item. */
  disableRipple = false;
  /** Stream that emits when the menu item is hovered. */
  _hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  /** Stream that emits when the menu item is focused. */
  _focused = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  /** Whether the menu item is highlighted. */
  _highlighted = false;
  /** Whether the menu item acts as a trigger for a sub-menu. */
  _triggersSubmenu = false;
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._).load(_structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_5__._);
    this._parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      // Start monitoring the element, so it gets the appropriate focused classes. We want
      // to show the focus style for menu items only when the focus was not caused by a
      // mouse or touch interaction.
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll('mat-icon, .material-icons');
    // Strip away icons, so they don't show up in the text.
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || '';
  }
  _setHighlighted(isHighlighted) {
    // We need to mark this for check for the case where the content is coming from a
    // `matMenuContent` whose change detection tree is at the declaration position,
    // not the insertion position. See #23175.
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static ɵfac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMenuItem)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [_ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_6__.M],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-menu-item]',
      exportAs: 'matMenuItem',
      host: {
        '[attr.role]': 'role',
        'class': 'mat-mdc-menu-item mat-focus-indicator',
        '[class.mat-mdc-menu-item-highlighted]': '_highlighted',
        '[class.mat-mdc-menu-item-submenu-trigger]': '_triggersSubmenu',
        '[attr.tabindex]': '_getTabIndex()',
        '[attr.aria-disabled]': 'disabled',
        '[attr.disabled]': 'disabled || null',
        '(click)': '_checkDisabled($event)',
        '(mouseenter)': '_handleMouseEnter()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      imports: [_ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_6__.M],
      template: "<ng-content select=\"mat-icon, [matMenuItemIcon]\"></ng-content>\n<span class=\"mat-mdc-menu-item-text\"><ng-content></ng-content></span>\n<div class=\"mat-mdc-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class=\"mat-mdc-menu-submenu-icon\"\n       viewBox=\"0 0 5 10\"\n       focusable=\"false\"\n       aria-hidden=\"true\"><polygon points=\"0,0 5,5 0,10\"/></svg>\n}\n"
    }]
  }], () => [], {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` + `not a parent of the trigger or move the trigger outside of the menu.`);
}

/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
/** Menu content that will be rendered lazily once the menu is opened. */
class MatMenuContent {
  _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
  _appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  _portal;
  _outlet;
  /** Emits when the menu content has been attached. */
  _attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  constructor() {}
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.T(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.b(this._document.createElement('div'), null, this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    // Because we support opening the same menu from different triggers (which in turn have their
    // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
    // risk it staying attached to a pane that's no longer in the DOM.
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
    // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
    // by Angular. This causes the `@ContentChildren` for menu items within the menu to
    // not be updated by Angular. By explicitly marking for check here, we tell Angular that
    // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static ɵfac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMenuContent)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_MENU_CONTENT,
      useExisting: MatMenuContent
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matMenuContent]',
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], () => [], null);
})();

/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
  providedIn: 'root',
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop'
  };
}
/** Name of the enter animation `@keyframes`. */
const ENTER_ANIMATION = '_mat-menu-enter';
/** Name of the exit animation `@keyframes`. */
const EXIT_ANIMATION = '_mat-menu-exit';
class MatMenu {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  /** Whether animations are currently disabled. */
  _animationsDisabled;
  /** All items inside the menu. Includes items nested inside another menu. */
  _allItems;
  /** Only the direct descendant menu items. */
  _directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
  /** Classes to be applied to the menu panel. */
  _classList = {};
  /** Current state of the panel animation. */
  _panelAnimationState = 'void';
  /** Emits whenever an animation on the menu completes. */
  _animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  /** Whether the menu is animating. */
  _isAnimating = false;
  /** Parent menu of the current menu panel. */
  parentMenu;
  /** Layout direction of the menu. */
  direction;
  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass;
  /** Class to be added to the backdrop element. */
  backdropClass;
  /** aria-label for the menu panel. */
  ariaLabel;
  /** aria-labelledby for the menu panel. */
  ariaLabelledby;
  /** aria-describedby for the menu panel. */
  ariaDescribedby;
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** @docs-private */
  templateRef;
  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  items;
  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  lazyContent;
  /** Whether the menu should overlap its trigger. */
  overlapTrigger;
  /** Whether the menu has a backdrop. */
  hasBackdrop;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = {
      ...this._classList
    };
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach(className => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(' ').forEach(className => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = '';
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  /** Event emitted when the menu is closed. */
  closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @breaking-change 8.0.0
   */
  close = this.closed;
  panelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__._).getId('mat-menu-panel-');
  constructor() {
    const defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || '';
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
    this._animationsDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
      optional: true
    }) === 'NoopAnimations';
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.F(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
    // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
    // change back to the key manager. Note that we don't need to unsubscribe here because _focused
    // is internal and we know that it gets completed on destroy.
    this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe(itemsList => {
      // Move focus to another item, if the active item is removed from the list.
      // We need to debounce the callback, because multiple items might be removed
      // in quick succession.
      const manager = this._keyManager;
      if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    // Coerce the `changes` property because Angular types it as `Observable<any>`
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(...items.map(item => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {}
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {}
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.g:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.hasModifierKey)(event)) {
          event.preventDefault();
          this.closed.emit('keydown');
        }
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.L:
        if (this.parentMenu && this.direction === 'ltr') {
          this.closed.emit('keydown');
        }
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.R:
        if (this.parentMenu && this.direction === 'rtl') {
          this.closed.emit('keydown');
        }
        break;
      default:
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.U || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.D) {
          manager.setFocusOrigin('keyboard');
        }
        manager.onKeydown(event);
        return;
    }
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = 'program') {
    // Wait for `afterNextRender` to ensure iOS VoiceOver screen reader focuses the first item (#24735).
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
      const menuPanel = this._resolvePanel();
      // If an item in the menuPanel is already focused, avoid overriding the focus.
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menuPanel panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * @deprecated No longer used and will be removed.
   * @breaking-change 21.0.0
   */
  setElevation(_depth) {}
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = {
      ...this._classList,
      ['mat-menu-before']: posX === 'before',
      ['mat-menu-after']: posX === 'after',
      ['mat-menu-above']: posY === 'above',
      ['mat-menu-below']: posY === 'below'
    };
    this._changeDetectorRef.markForCheck();
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = undefined;
      }
      this._animationDone.next(isExit ? 'void' : 'enter');
      this._isAnimating = false;
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating = true;
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? 'enter' : 'void';
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      // Some apps do `* { animation: none !important; }` in tests which will prevent the
      // `animationend` event from firing. Since the exit animation is loading-bearing for
      // removing the content from the DOM, add a fallback timer.
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    // Animation events won't fire when animations are disabled so we simulate them.
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(this._allItems)).subscribe(items => {
      this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  /** Gets the menu panel DOM node. */
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      // Because the `mat-menuPanel` is at the DOM insertion point, not inside the overlay, we don't
      // have a nice way of getting a hold of the menuPanel panel. We can't use a `ViewChild` either
      // because the panel is inside an `ng-template`. We work around it by starting from one of
      // the items and walking up the DOM.
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static ɵfac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMenu)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", value => value == null ? null : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_MENU_PANEL,
      useExisting: MatMenu
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-menu',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matMenu',
      host: {
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null'
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: "<ng-template>\n  <div\n    class=\"mat-mdc-menu-panel\"\n    [id]=\"panelId\"\n    [class]=\"_classList\"\n    [class.mat-menu-panel-animations-disabled]=\"_animationsDisabled\"\n    [class.mat-menu-panel-exit-animation]=\"_panelAnimationState === 'void'\"\n    [class.mat-menu-panel-animating]=\"_isAnimating\"\n    (click)=\"closed.emit('click')\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    (animationstart)=\"_onAnimationStart($event.animationName)\"\n    (animationend)=\"_onAnimationDone($event.animationName)\"\n    (animationcancel)=\"_onAnimationDone($event.animationName)\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-mdc-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
    }]
  }], () => [], {
    _allItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => value == null ? null : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(value)
      }]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.a);
    return () => overlay.scrollStrategies.reposition();
  }
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.a],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = {
  passive: true
};
/**
 * Default top padding of the menu panel.
 * @deprecated No longer being used. Will be removed.
 * @breaking-change 15.0.0
 */
const MENU_PANEL_TOP_PADDING = 8;
/** Mapping between menu panels and the last trigger that opened them. */
const PANELS_TO_TRIGGERS = new WeakMap();
/** Directive applied to an element that should trigger a `mat-menu`. */
class MatMenuTrigger {
  _overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.a);
  _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
  _menuItemInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.D, {
    optional: true
  });
  _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.F);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
  _scrollStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  _cleanupTouchstart;
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription.EMPTY;
  _hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription.EMPTY;
  _menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription.EMPTY;
  _pendingRemoval;
  /**
   * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
   * interface lacks some functionality around nested menus and animations.
   */
  _parentMaterialMenu;
  /**
   * Cached value of the padding of the parent menu panel.
   * Used to offset sub-menus to compensate for the padding.
   */
  _parentInnerPadding;
  // Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the menu is opened via the keyboard
  _openedBy = undefined;
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe(reason => {
        this._destroyMenu(reason);
        // If a click closed the menu, we should close the entire chain of nested menus.
        if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
  }
  _menu;
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Event emitted when the associated menu is opened.
   * @deprecated Switch to `menuOpened` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuOpen = this.menuOpened;
  /** Event emitted when the associated menu is closed. */
  menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Event emitted when the associated menu is closed.
   * @deprecated Switch to `menuClosed` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuClose = this.menuClosed;
  constructor() {
    const parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
      optional: true
    });
    const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : undefined;
    this._cleanupTouchstart = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__._)(renderer, this._element.nativeElement, 'touchstart', event => {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.a)(event)) {
        this._openedBy = 'touch';
      }
    }, passiveEventListenerOptions);
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    if (this.menu && this._ownsMenu(this.menu)) {
      PANELS_TO_TRIGGERS.delete(this.menu);
    }
    this._cleanupTouchstart();
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    const menu = this.menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    // If the same menu is currently attached to another trigger,
    // we need to close it so it doesn't end up in a broken state.
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger.closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    // We need the `hasAttached` check for the case where the user kicked off a removal animation,
    // but re-entered the menu. Re-attaching the same portal will trigger an error otherwise.
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
    menu.direction = this.dir;
    menu.focusFirstItem(this._openedBy || 'program');
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(menu.close)).subscribe(() => {
        // Re-adjust the position without locking when the amount of items
        // changes so that the overlay is allowed to pick a new optimal position.
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    // Note that we don't wait for the animation to finish if another trigger took
    // over the menu, because the panel will end up empty which looks glitchy.
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1)).subscribe(() => {
        overlayRef.detach();
        menu.lazyContent?.detach();
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    // Always restore focus if the user is navigating using the keyboard or the menu was opened
    // programmatically. We don't restore for non-root triggers, because it can prevent focus
    // from making it back to the root trigger when closing a long chain of menus by clicking
    // on the backdrop.
    if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = undefined;
    this._setIsMenuOpen(false);
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this.triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe(event => {
        if (this.menu instanceof MatMenu) {
          this.menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.f({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
      backdropClass: menu.backdropClass || 'cdk-overlay-transparent-backdrop',
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || 'ltr'
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe(change => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
          const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
    let [overlayY, overlayFallbackY] = menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      // When the menu is a sub-menu, it should always align itself
      // to the edges of the trigger, instead of overlapping it.
      overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
      originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === 'top' ? 'bottom' : 'top';
      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(active => this._menuOpen && active !== this._menuItemInstance)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.i)(event)) {
      // Since right or middle button clicks won't trigger the `click` event,
      // we shouldn't consider the menu as opened by mouse in those cases.
      this._openedBy = event.button === 0 ? 'mouse' : undefined;
      // Since clicking on the trigger won't close the menu if it opens a sub-menu,
      // we should prevent focus from moving onto it via click to avoid the
      // highlight from lingering on the menu item.
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    // Pressing enter on the trigger will trigger the click handler later.
    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.c || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.S) {
      this._openedBy = 'keyboard';
    }
    if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.R && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.L && this.dir === 'rtl')) {
      this._openedBy = 'keyboard';
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      // Stop event propagation to avoid closing the parent menu.
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    // Subscribe to changes in the hovered item in order to toggle the panel.
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe(active => {
        if (active === this._menuItemInstance && !active.disabled) {
          this._openedBy = 'mouse';
          this.openMenu();
        }
      });
    }
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    // Note that we can avoid this check by keeping the portal on the menu panel.
    // While it would be cleaner, we'd have to introduce another required method on
    // `MatMenuPanel`, making it harder to consume.
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.T(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  /**
   * Determines whether the trigger owns a specific menu panel, at the current point in time.
   * This allows us to distinguish the case where the same panel is passed into multiple triggers
   * and multiple are open at a time.
   */
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  static ɵfac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMenuTrigger)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        'class': 'mat-mdc-menu-trigger',
        '[attr.aria-haspopup]': 'menu ? "menu" : null',
        '[attr.aria-expanded]': 'menuOpen',
        '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
        '(click)': '_handleClick($event)',
        '(mousedown)': '_handleMousedown($event)',
        '(keydown)': '_handleKeydown($event)'
      },
      exportAs: 'matMenuTrigger'
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-menu-trigger-for']
    }],
    menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerFor']
    }],
    menuData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerData']
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerRestoreFocus']
    }],
    menuOpened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMenuOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    menuClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMenuClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class MatMenuModule {
  static ɵfac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMenuModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatMenuModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [_index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_24__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_25__.M, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.m, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_25__.M]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_24__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_25__.M, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.m, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, MatMenu, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_25__.M, MatMenuItem, MatMenuContent, MatMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const matMenuAnimations = {
  // Represents:
  // trigger('transformMenu', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
  // ])
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: {
    type: 7,
    name: 'transformMenu',
    definitions: [{
      type: 0,
      name: 'void',
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: 'scale(0.8)'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: 'void => enter',
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: 'scale(1)'
          },
          offset: null
        },
        timings: '120ms cubic-bezier(0, 0, 0.2, 1)'
      },
      options: null
    }, {
      type: 1,
      expr: '* => void',
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: '100ms 25ms linear'
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('fadeInItems', [
  //   // TODO(crisbeto): this is inside the `transformMenu`
  //   // now. Remove next time we do breaking changes.
  //   state('showing', style({opacity: 1})),
  //   transition('void => *', [
  //     style({opacity: 0}),
  //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: {
    type: 7,
    name: 'fadeInItems',
    definitions: [{
      type: 0,
      name: 'showing',
      styles: {
        type: 6,
        styles: {
          opacity: 1
        },
        offset: null
      }
    }, {
      type: 1,
      expr: 'void => *',
      animation: [{
        type: 6,
        styles: {
          opacity: 0
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: '400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'
      }],
      options: null
    }],
    options: {}
  }
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const transformMenu = matMenuAnimations.transformMenu;


/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture-proforma_facture-proforma_component_ts.js.map