"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["default-src_app_admin-page_SERVICES_boutique-service_ts"],{

/***/ 52719:
/*!*********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/boutique-service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueService: () => (/* binding */ BoutiqueService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class BoutiqueService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  updateBoutique(id, updates) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/updatedBoutique/${id}`, updates, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la mise à jour de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // LL recuperation de boutique dans e/ses
  getBoutiquesByEntreprise() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutiqueEntreprise`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des boutiques:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
  getBoutiqueById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutique/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  activerBoutique(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/activerBoutique/${id}`, {}, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de l\'activation de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  desactiverBoutique(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/desactiverBoutique/${id}`, {}, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la désactivation de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  //Delet
  deleteBoutique(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.delete(`${this.apiUrl}/boutique/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la suppression de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // getProductsByBoutiqueId(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/boutiques/${id}/produits`);
  // }
  getProductsByBoutiqueId(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutique/${id}/produits`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des produits:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  /*  getVendeursByBoutiqueId(id: number): Observable<Users[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token trouvé');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get<Users[]>(`${this.apiUrl}/${id}/vendeurs`, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des vendeurs:', error);
        return throwError(() => error);
      })
    );
  }
  */
  copierProduits(detailsCopie) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/copier-produits`, detailsCopie, {
        headers,
        responseType: 'json'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      if (error.error && typeof error.error === 'string') {
        try {
          const parsedError = JSON.parse(error.error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => parsedError);
        } catch (e) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => ({
            message: error.error
          }));
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  mettreEnCorbeille(produitId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.delete(`${this.apiUrl}/corbeille/${produitId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur lors de la mise en corbeille';
      if (error.error?.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errorMsg));
    }));
  }
  associateUserToBoutique(boutiqueId, userId) {
    return this.http.post(`${this.apiUrl}/boutiques/${boutiqueId}/users/${userId}`, {});
  }
  // Assignation des vendeur
  assignerVendeur(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // Appel à l'API backend pour assigner les vendeurs
      return this.http.post(`${this.apiUrl}/assigner-vendeur`, request, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de l\'assignation du vendeur:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // Retirer vendeur
  retirerVendeur(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/retirer-vendeur`, request, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de l\'assignation du vendeur:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  // Get Vendeurs d'une boutique
  getVendeursDeBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vendeurs/${boutiqueId}`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
        console.error('Erreur lors de la récupération des vendeurs:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }));
    }));
  }
  // Remplacer l'ancienne méthode par celle-ci
  getProduitsBoutiquePaginated(boutiqueId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.http.get(`${this.apiUrl}/boutique/${boutiqueId}/produits/paginated`, {
        headers,
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }));
    }));
  }
  static {
    this.ɵfac = function BoutiqueService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: BoutiqueService,
      factory: BoutiqueService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin-page_SERVICES_boutique-service_ts.js.map