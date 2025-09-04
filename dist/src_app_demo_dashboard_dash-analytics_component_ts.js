"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_demo_dashboard_dash-analytics_component_ts"],{

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

/***/ 8191:
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-analytics.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _product_sale_product_sale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-sale/product-sale.component */ 30281);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_app_admin_page_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/produit.service */ 66375);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/vente-service */ 44413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/shared/components/card/card.component */ 33413);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
// project import


// 3rd party import











const _c0 = ["chart"];
const _c1 = ["customerChart"];
function DashAnalyticsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "app-card", 14)(2, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("cardClass", "", card_r2.background, " order-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](card_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("feather ", card_r2.icon, " float-start");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](card_r2.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", card_r2.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](card_r2.no);
  }
}
function DashAnalyticsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-product-sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DashAnalyticsComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-sale");
  }
}
function DashAnalyticsComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-sale");
  }
}
function DashAnalyticsComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-sale");
  }
}
class DashAnalyticsComponent {
  constructor(userService, http, produitService, usersService, venteService, router) {
    this.userService = userService;
    this.http = http;
    this.produitService = produitService;
    this.usersService = usersService;
    this.venteService = venteService;
    this.router = router;
    this.boutiqueName = '';
    this.userEmail = '';
    this.cards = [];
    this.carde2 = [];
    this.error = null;
    this.images = [{
      src: 'assets/images/gallery-grid/img-grd-gal-1.jpg',
      title: 'Old Scooter',
      size: 'PNG-100KB'
    }, {
      src: 'assets/images/gallery-grid/img-grd-gal-2.jpg',
      title: 'Wall Art',
      size: 'PNG-150KB'
    }, {
      src: 'assets/images/gallery-grid/img-grd-gal-3.jpg',
      title: 'Microphone',
      size: 'PNG-150KB'
    }];
    //   showBlockedPopup: boolean = false;
    //   isAdmin: boolean = false;
    //  onLogout(): void {
    //     this.userService.logoutUser();
    //   }
    // private checkAccountStatus(): void {
    //   this.userService.getUserInfo()
    //     .pipe(tap(user => console.log('[checkAccountStatus] user:', user)))
    //     .subscribe((user: UserRequest) => {
    //       this.userEmail = user.email;
    //       this.isAdmin = user.roleType?.toUpperCase() === 'ADMIN';
    //       const now = Date.now();
    //       const createdAt = this.isAdmin
    //         ? user.createdAt
    //         : user.adminCreatedAt;
    //       const parsedCreatedAt = createdAt ? Date.parse(createdAt) : null;
    //       const diffInHours = parsedCreatedAt ? (now - parsedCreatedAt) / (1000 * 60 * 60) : 0;
    //       const adminActivated = this.isAdmin
    //         ? user.adminActivated
    //         : user.adminActivated;
    //       console.log(`[${this.isAdmin ? 'Admin' : 'User'}] adminActivated=${adminActivated}, hours since admin creation=${diffInHours}`);
    //       this.showBlockedPopup = adminActivated === false && diffInHours > 24;
    //       console.log('=> showBlockedPopup =', this.showBlockedPopup);
    //     });
    // }
    //Get Count of users dans l'entreprise
    this.usersCount = null;
  }
  ngOnInit() {
    this.initializeCharts();
    this.updateTotalProduits();
    this.getBoutiqueInfo();
    this.getBoutiqueName();
    this.fetchUsersCount();
    // this.checkAccountStatus();
  }
  initializeCharts() {
    this.chartOptions = {
      chart: {
        height: 205,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [{
        name: 'Arts',
        data: [20, 50, 30, 60, 30, 50]
      }, {
        name: 'Commerce',
        data: [60, 30, 65, 45, 67, 35]
      }],
      legend: {
        position: 'top'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: true,
        min: 10,
        max: 70
      },
      colors: ['#73b4ff', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: '#cccccc3b'
      }
    };
    this.chartOptions_1 = {
      chart: {
        height: 150,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%'
          }
        }
      },
      labels: ['New', 'Return'],
      series: [39, 10],
      legend: {
        show: false
      },
      tooltip: {
        theme: 'dark'
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4680ff', '#2ed8b6'],
      fill: {
        opacity: [1, 1]
      },
      stroke: {
        width: 0
      }
    };
    this.chartOptions_2 = {
      ...this.chartOptions_1,
      series: [20, 15],
      colors: ['#fff', '#2ed8b6']
    };
    this.chartOptions_3 = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff5370'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ff869a'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [45, 35, 60, 50, 85, 70]
      }],
      yaxis: {
        min: 5,
        max: 90
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
  }
  updateTotalProduits() {
    // Initialisation des cartes pour éviter les erreurs
    this.carde2 = [{
      background: 'bg-c-blue',
      title: 'Produits en Totals',
      icon: 'icon-shopping-cart',
      text: 'Produits non Stock',
      number: '0',
      no: ''
    }, {
      background: 'bg-c-blue',
      title: 'Total des Produits',
      icon: 'icon-shopping-cart',
      text: 'XpertCash',
      number: '0',
      no: '0'
    }];
    // Récupérer d'abord les informations utilisateur
    this.userService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo);
      // Vérifiez si l'utilisateur a des boutiques
      if (userInfo.boutiques && userInfo.boutiques.length > 0) {
        const boutiqueId = userInfo.boutiques[0].id;
        if (!boutiqueId) {
          console.error("L'ID de la boutique est introuvable");
          return;
        }
        // Si l'ID de la boutique est trouvé, on peut appeler l'API pour les totaux
        this.produitService.getProduitBoutique(boutiqueId).subscribe(totaux => {
          console.log(totaux);
          const totalEnStock = totaux.totalEnStock || 0;
          const totalNonEnStock = totaux.totalNonEnStock || 0;
          const totalProduits = totalEnStock + totalNonEnStock;
          this.carde2 = [{
            background: 'bg-c-blue',
            title: 'Produits en Totals',
            icon: 'icon-shopping-cart',
            text: 'Produits non Stock',
            number: totalProduits.toString(),
            no: ''
          }, {
            background: 'bg-c-blue',
            title: 'Total des Produits',
            icon: 'icon-shopping-cart',
            text: 'XpertCash',
            number: totaux.totalEnStock.toString(),
            no: totalNonEnStock.toString()
          }];
          // Configuration du graphique (apx-chart)
          this.chartOptions_1 = {
            chart: {
              height: 150,
              type: 'donut'
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%'
                }
              }
            },
            labels: ['Produits en Stock', 'Produits Non en Stock'],
            series: [totalEnStock, totalNonEnStock],
            legend: {
              show: false
            },
            tooltip: {
              theme: 'dark'
            },
            grid: {
              padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
              }
            },
            colors: ['#4680ff', '#2ed8b6'],
            fill: {
              opacity: [1, 1]
            },
            stroke: {
              width: 0
            }
          };
        }, error => {
          console.error('Erreur lors de la récupération des totaux des produits', error);
        });
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  getBoutiqueInfo() {
    this.cards = [{
      background: 'bg-c-blue',
      title: 'Produits en Totals',
      icon: 'icon-shopping-cart',
      text: 'Produits non Stock',
      number: '0',
      no: ''
    }, {
      background: 'bg-c-blue',
      title: 'Total des Produits',
      icon: 'icon-shopping-cart',
      text: 'XpertCash',
      number: '0',
      no: '0'
    }];
    this.userService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo); // Affichez la réponse complète dans la console pour vérifier sa structure
      // Vérifiez si l'utilisateur a des boutiques
      if (userInfo.boutiques && userInfo.boutiques.length > 0) {
        const boutiqueId = userInfo.boutiques[0].id;
        if (!boutiqueId) {
          console.error('L\'ID de la boutique est introuvable');
          return;
        }
        // Si l'ID de la boutique est trouvé, on peut appeler l'API pour les totaux
        this.produitService.getProduitBoutique(boutiqueId).subscribe(totaux => {
          console.log(totaux);
          const totalEnStock = totaux.totalEnStock || 0;
          const totalNonEnStock = totaux.totalNonEnStock || 0;
          const totalProduits = totalEnStock + totalNonEnStock;
          const montantTotal = totaux.montantTotal || 0; // Assurez-vous que cette propriété existe dans la réponse
          const montantTotalMois = totaux.montantTotalMois || 0; // Assurez-vous que cette propriété existe dans la réponse
          const beneficeMois = totaux.beneficeMois || 0; // Assurez-vous que cette propriété existe dans la réponse
          const beneficeJour = totaux.beneficeJour || 0; // Assurez-vous que cette propriété existe dans la réponse
          const beneficeAnnuel = totaux.beneficeAnne || 0; // Assurez-vous que cette propriété existe dans la réponse
          // Mise à jour des cartes avec les totaux des produits
          this.cards = [{
            background: 'bg-c-blue',
            title: 'Total des Produits',
            icon: 'icon-shopping-cart',
            text: this.boutiqueName,
            number: totalProduits.toString(),
            no: ""
          }, {
            background: 'bg-c-green',
            title: 'Vente du jour',
            icon: 'icon-tag',
            text: 'Statistique',
            number: montantTotal.toString(),
            no: ''
          }, {
            background: 'bg-c-yellow',
            title: 'Revenue du jour',
            icon: 'icon-repeat',
            text: 'du mois',
            number: beneficeJour.toString(),
            no: beneficeMois.toString()
          }, {
            background: 'bg-c-red',
            title: 'Total Profit Annuel',
            icon: 'icon-shopping-cart',
            text: 'Statistique',
            number: beneficeAnnuel.toString(),
            no: ''
          }];
          // Configuration du graphique (apx-chart)
          this.chartOptions_1 = {
            chart: {
              height: 150,
              type: 'donut'
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%'
                }
              }
            },
            labels: ['Produits en Stock', 'Produits Non en Stock'],
            series: [totalEnStock, totalNonEnStock],
            legend: {
              show: false
            },
            tooltip: {
              theme: 'dark'
            },
            grid: {
              padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
              }
            },
            colors: ['#4680ff', '#2ed8b6'],
            fill: {
              opacity: [1, 1]
            },
            stroke: {
              width: 0
            }
          };
        }, error => {
          console.error('Erreur lors de la récupération des totaux des produits', error);
        });
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
      }
      // Vente total du jour
      this.venteService.getMontantTotalEntreprise().subscribe(montantTotal => {
        console.log('Montant total de l\'entreprise:', montantTotal);
        this.cards[1].number = montantTotal.toString();
      }, error => {
        console.error('Erreur lors de la récupération du montant total de l\'entreprise', error);
      });
      // Vente total du mois
      this.venteService.getMontantTotalEntrepriseMois().subscribe(montantTotalMois => {
        console.log('Montant total de l\'entreprise pour le mois:', montantTotalMois);
        this.cards[2].no = montantTotalMois.toString(); // <-- ici
      }, error => {
        console.error('Erreur lors de la récupération du montant total de l\'entreprise pour le mois', error);
      });
      // Bénéfice du mois
      this.venteService.getBeneficheEntrepriseMois().subscribe(beneficeMois => {
        console.log('Bénéfice du mois:', beneficeMois);
        this.cards[2].no = beneficeMois.toString();
      });
      // Bénéfice du jour
      this.venteService.getBeneficheEntrepriseJour().subscribe(beneficeJour => {
        console.log('Bénéfice du jour:', beneficeJour);
        this.cards[2].number = beneficeJour.toString();
      });
      //Benefice annuel
      this.venteService.getBeneficheEntrepriseAnnuel().subscribe(beneficeAnnuel => {
        console.log('Bénéfice Annuel:', beneficeAnnuel);
        this.cards[3].number = beneficeAnnuel.toString();
      });
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo);
      if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
        console.log(userInfo.boutiques[0]);
        this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvée';
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
        this.boutiqueName = 'Aucune boutique';
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  fetchUsersCount() {
    this.userService.countUsersInEntreprise().subscribe({
      next: count => this.usersCount = count,
      error: err => this.error = 'Impossible de récupérer le nombre d’utilisateurs.'
    });
  }
  goToUtilisateurs() {
    this.router.navigate(['/utilisateur']);
  }
  static {
    this.ɵfac = function DashAnalyticsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_4__.VenteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DashAnalyticsComponent,
      selectors: [["app-dash-analytics"]],
      viewQuery: function DashAnalyticsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.customerChart = _t.first);
        }
      },
      decls: 92,
      vars: 61,
      consts: [["nav", "ngbNav"], [1, "row"], [1, "col-md-6", "col-xl-3"], [1, "col-xl-6", "col-md-12"], ["cardTitle", "Etat", 3, "options"], [3, "chart", "dataLabels", "stroke", "series", "xaxis", "colors", "fill", "markers", "yaxis"], [1, "col-md-6"], [3, "hidHeader"], [1, "col-auto"], [1, "col", "text-end"], [1, "mb-0", 2, "color", "#4099ff"], [1, "text-c-green"], [1, "feather", "icon-trending-up", "ms-1"], [3, "series", "chart", "stroke", "dataLabels", "labels", "legend", "colors", "fill", "grid", "plotOptions", "tooltip"], [3, "hidHeader", "cardClass"], [2, "color", "white"], [1, "mb-0", 2, "color", "white"], ["id", "customerChart"], [1, "col-md-12", "col-lg-4"], ["cardClass", "seo-card", "blockClass", "seo-statustic", "footerClass", "seo-chart border border-top-0 p-0 overflow-hidden", 3, "hidHeader", "isCardFooter"], [1, "feather", "icon-save", "f-20", "text-c-red"], [1, "mb-1"], [1, "app-card-footer"], [3, "series", "chart", "stroke", "dataLabels", "colors", "fill", "tooltip", "yaxis"], [1, "col-md-6", "col-lg-4"], ["blockClass", "text-center", 3, "hidHeader"], [1, "fa", "fa-users", "text-c-blue", "d-block", "f-40"], [1, "m-t-20"], [1, "text-c-blue"], [1, "m-b-20"], [1, "btn", "btn-primery", "btn-sm", "btn-round", 3, "click"], [1, "fab", "fa-twitter", "text-c-green", "d-block", "f-40"], [1, "btn", "btn-success", "btn-sm", "btn-round"], [1, "col-md-12"], ["cardTitle", "Campaign Monitor", "cardClass", "tab-card tab-content", "blockClass", "nav-fill", 3, "options"], ["ngbNav", "", "aria-busy", "true", 1, "nav-pills"], [1, "flex", 3, "ngbNavItem"], ["ngbNavLink", ""], [1, "fa", "fa-home", "m-r-10"], ["ngbNavContent", ""], [1, "fa", "fa-key", "m-r-10"], [1, "fa", "fa-play-circle", "m-r-10"], [1, "fa", "fa-database", "m-r-10"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "text-white"], [1, "text-end", "text-white"], ["st", "", 1, "m-b-0"], [1, "float-end"], [1, "table-responsive"]],
      template: function DashAnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, DashAnalyticsComponent_For_2_Template, 12, 10, "div", 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "app-card", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "apx-chart", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 1)(8, "div", 6)(9, "app-card", 7)(10, "div", 1)(11, "div", 8)(12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Produits en Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "h2", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "apx-chart", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 6)(22, "app-card", 14)(23, "div", 1)(24, "div", 8)(25, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 9)(28, "h2", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "apx-chart", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 18)(36, "app-card", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "65%");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Memory");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "apx-chart", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 24)(45, "app-card", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h4", 27)(48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Utilisateurs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Nombre total d'utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashAnalyticsComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.goToUtilisateurs());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "G\u00E9rer la liste");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 24)(57, "app-card", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "h4", 27)(60, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "+40");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, " Vendeurs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Your main list is growing");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Check Theme Out");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 33)(68, "app-card", 34)(69, "ul", 35, 0)(71, "li", 36)(72, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, DashAnalyticsComponent_ng_template_75_Template, 2, 0, "ng-template", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "li", 36)(77, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Security ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, DashAnalyticsComponent_ng_template_80_Template, 1, 0, "ng-template", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "li", 36)(82, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " Entertainment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, DashAnalyticsComponent_ng_template_85_Template, 1, 0, "ng-template", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "li", 36)(87, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, " Big Data ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, DashAnalyticsComponent_ng_template_90_Template, 1, 0, "ng-template", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const nav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.cards);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("stroke", ctx.chartOptions.stroke)("series", ctx.chartOptions.series)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("fill", ctx.chartOptions.fill)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.carde2[1].number);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.carde2[1].no, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx.chartOptions_1.series)("chart", ctx.chartOptions_1.chart)("stroke", ctx.chartOptions_1.stroke)("dataLabels", ctx.chartOptions_1.dataLabels)("labels", ctx.chartOptions_1.labels)("legend", ctx.chartOptions_1.legend)("colors", ctx.chartOptions_1.colors)("fill", ctx.chartOptions_1.fill)("grid", ctx.chartOptions_1.grid)("plotOptions", ctx.chartOptions_1.plotOptions)("tooltip", ctx.chartOptions_1.tooltip);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true)("cardClass", ctx.carde2[0].background);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.carde2[0].title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.carde2[0].number);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.carde2[0].number, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx.chartOptions_1.series)("chart", ctx.chartOptions_1.chart)("stroke", ctx.chartOptions_1.stroke)("dataLabels", ctx.chartOptions_1.dataLabels)("labels", ctx.chartOptions_1.labels)("legend", ctx.chartOptions_1.legend)("colors", ctx.chartOptions_1.colors)("fill", ctx.chartOptions_1.fill)("grid", ctx.chartOptions_1.grid)("plotOptions", ctx.chartOptions_1.plotOptions)("tooltip", ctx.chartOptions_1.tooltip);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx.chartOptions_3.series)("chart", ctx.chartOptions_3.chart)("stroke", ctx.chartOptions_3.stroke)("dataLabels", ctx.chartOptions_3.dataLabels)("colors", ctx.chartOptions_3.colors)("fill", ctx.chartOptions_3.fill)("tooltip", ctx.chartOptions_3.tooltip)("yaxis", ctx.chartOptions_3.yaxis);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.usersCount !== null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 59, ctx.usersCount) : "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidHeader", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavItem", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavOutlet", nav_r3);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.ChartComponent, _product_sale_product_sale_component__WEBPACK_IMPORTED_MODULE_1__.ProductSaleComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoLWFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9kYXNoYm9hcmQvZGFzaC1hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 30281:
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/product-sale/product-sale.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSaleComponent: () => (/* binding */ ProductSaleComponent)
/* harmony export */ });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-scrollbar */ 74091);
// project import




function ProductSaleComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sale_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("feather ", sale_r1.icon, "  f-16");
  }
}
function ProductSaleComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r2.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r2.percentage);
  }
}
function ProductSaleComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r3.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r3.percentage);
  }
}
function ProductSaleComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r4.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r4.percentage);
  }
}
function ProductSaleComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r5.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r5.percentage);
  }
}
function ProductSaleComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r6.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r6.percentage);
  }
}
function ProductSaleComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r7.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r7.percentage);
  }
}
function ProductSaleComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngb-progressbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const progress_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", progress_r8.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", progress_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", progress_r8.percentage);
  }
}
class ProductSaleComponent {
  constructor() {
    // public method
    this.product_sale = [{
      title: 'Campaign date'
    }, {
      title: 'Click',
      icon: 'icon-help-circle'
    }, {
      title: 'Cost',
      icon: 'icon-help-circle'
    }, {
      title: 'CTR',
      icon: 'icon-help-circle'
    }, {
      title: 'ARPU',
      icon: 'icon-help-circle'
    }, {
      title: 'ECPI',
      icon: 'icon-help-circle'
    }, {
      title: 'ROI',
      icon: 'icon-help-circle'
    }, {
      title: 'Revenue',
      icon: 'icon-help-circle'
    }, {
      title: 'Conversions',
      icon: 'icon-help-circle'
    }];
    this.progressBar = [{
      value: '786',
      color: 'danger',
      percentage: 60
    }, {
      value: '485',
      color: 'primary',
      percentage: 50
    }, {
      value: '769',
      color: 'warning',
      percentage: 70
    }, {
      value: '45,3%',
      color: 'success',
      percentage: 60
    }, {
      value: '6,7%',
      color: 'info',
      percentage: 30
    }, {
      value: '8,56',
      color: 'danger',
      percentage: 40
    }, {
      value: '10:55',
      color: 'warning',
      percentage: 70
    }, {
      value: '33.8%',
      color: 'success',
      percentage: 40
    }];
    this.progressBar2 = [{
      value: '786',
      color: 'danger',
      percentage: 65
    }, {
      value: '523',
      color: 'primary',
      percentage: 80
    }, {
      value: '736',
      color: 'warning',
      percentage: 80
    }, {
      value: '78,3%',
      color: 'success',
      percentage: 70
    }, {
      value: '6,6%',
      color: 'info',
      percentage: 70
    }, {
      value: '7,56',
      color: 'danger',
      percentage: 44
    }, {
      value: '4:30',
      color: 'warning',
      percentage: 68
    }, {
      value: '76.8%',
      color: 'success',
      percentage: 90
    }];
    this.progressBar3 = [{
      value: '624',
      color: 'danger',
      percentage: 45
    }, {
      value: '436',
      color: 'primary',
      percentage: 55
    }, {
      value: '756',
      color: 'warning',
      percentage: 95
    }, {
      value: '78,3%',
      color: 'success',
      percentage: 38
    }, {
      value: '6,4%',
      color: 'info',
      percentage: 38
    }, {
      value: '9,45',
      color: 'danger',
      percentage: 38
    }, {
      value: '9:05',
      color: 'warning',
      percentage: 38
    }, {
      value: '8.63%',
      color: 'success',
      percentage: 38
    }];
    this.progressBar4 = [{
      value: '423',
      color: 'danger',
      percentage: 54
    }, {
      value: '123',
      color: 'primary',
      percentage: 70
    }, {
      value: '756',
      color: 'warning',
      percentage: 75
    }, {
      value: '78,6%',
      color: 'success',
      percentage: 60
    }, {
      value: '45,6%',
      color: 'info',
      percentage: 90
    }, {
      value: '6,85',
      color: 'danger',
      percentage: 38
    }, {
      value: '7:45',
      color: 'warning',
      percentage: 40
    }, {
      value: '33.8%',
      color: 'success',
      percentage: 80
    }];
    this.progressBar5 = [{
      value: '465',
      color: 'danger',
      percentage: 66
    }, {
      value: '463',
      color: 'primary',
      percentage: 66
    }, {
      value: '456',
      color: 'warning',
      percentage: 38
    }, {
      value: '68,6%',
      color: 'success',
      percentage: 38
    }, {
      value: '76,6%',
      color: 'info',
      percentage: 32
    }, {
      value: '7,56',
      color: 'danger',
      percentage: 70
    }, {
      value: '8:45',
      color: 'warning',
      percentage: 71
    }, {
      value: '39.8%',
      color: 'success',
      percentage: 38
    }];
    this.progressBar6 = [{
      value: '786',
      color: 'danger',
      percentage: 43
    }, {
      value: '485',
      color: 'primary',
      percentage: 70
    }, {
      value: '769',
      color: 'warning',
      percentage: 69
    }, {
      value: '45,3%',
      color: 'success',
      percentage: 90
    }, {
      value: '6,7%',
      color: 'info',
      percentage: 80
    }, {
      value: '8,56',
      color: 'danger',
      percentage: 38
    }, {
      value: '10:55',
      color: 'warning',
      percentage: 55
    }, {
      value: '33.8%',
      color: 'success',
      percentage: 70
    }];
    this.progressBar7 = [{
      value: '786',
      color: 'danger',
      percentage: 61
    }, {
      value: '523',
      color: 'primary',
      percentage: 45
    }, {
      value: '736',
      color: 'warning',
      percentage: 70
    }, {
      value: '78,3%',
      color: 'success',
      percentage: 60
    }, {
      value: '6,6%',
      color: 'info',
      percentage: 38
    }, {
      value: '7,56',
      color: 'danger',
      percentage: 40
    }, {
      value: '4:30',
      color: 'warning',
      percentage: 70
    }, {
      value: '76.8%',
      color: 'success',
      percentage: 40
    }];
  }
  static {
    this.ɵfac = function ProductSaleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductSaleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductSaleComponent,
      selectors: [["app-product-sale"]],
      decls: 42,
      vars: 0,
      consts: [["visibility", "hover", "track", "all", 2, "height", "362px"], [1, "table", "table-hover", "m-b-0", "mt-3"], [1, "help"], [1, "mt-1"], ["height", "4px", 3, "type", "value"]],
      template: function ProductSaleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-scrollbar", 0)(1, "table", 1)(2, "thead")(3, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, ProductSaleComponent_For_5_Template, 5, 4, "th", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody")(7, "tr")(8, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "08-11-2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](10, ProductSaleComponent_For_11_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr")(13, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "15-10-2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](15, ProductSaleComponent_For_16_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr")(18, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "08-08-2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](20, ProductSaleComponent_For_21_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr")(23, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "11-12-2017");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](25, ProductSaleComponent_For_26_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr")(28, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "05-06-2015");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](30, ProductSaleComponent_For_31_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr")(33, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "08-11-2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](35, ProductSaleComponent_For_36_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr")(38, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "15-10-2016");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](40, ProductSaleComponent_For_41_Template, 4, 3, "td", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.product_sale);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.progressBar7);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbProgressbar, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__.NgScrollbar],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNhbGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9kYXNoYm9hcmQvcHJvZHVjdC1zYWxlL3Byb2R1Y3Qtc2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dash-analytics_component_ts.js.map