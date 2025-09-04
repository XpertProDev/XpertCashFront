"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_detail-stock_detail-stock_component_ts"],{

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

/***/ 8114:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/detail-stock/detail-stock.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailStockComponent: () => (/* binding */ DetailStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/stocks.service */ 10933);











function DetailStockComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 48);
  }
}
function DetailStockComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 49);
  }
}
function DetailStockComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailStockComponent_div_14_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.downloadBoutiqueProduitPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "T\u00E9l\u00E9charger en PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Imprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DetailStockComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.getDisplayedDescription());
  }
}
function DetailStockComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.boutiqueName);
  }
}
function DetailStockComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.allBoutiqueNames.join(", ") || "Aucune boutique", " ");
  }
}
class DetailStockComponent {
  constructor(locale, userService, produitService,
  // private sharedDataService: SharedDataService,
  stockService, router, route) {
    this.locale = locale;
    this.userService = userService;
    this.produitService = produitService;
    this.stockService = stockService;
    this.router = router;
    this.route = route;
    this.boutiqueName = '';
    this.nomComplet = '';
    this.nomEntreprise = '';
    this.email = '';
    this.stockHistory = [];
    // Dropdown pour l'export
    this.showExportDropdown = false;
    this.showDescription = false;
    this.allBoutiqueNames = [];
    this.totalQuantity = 0;
    this.selectedBoutiqueId = null;
    // Liste filtrée des stocks ajustés
    this.adjustedStocks = [];
    this.stock = null;
    console.log('Langue actuelle:', this.locale); // Devrait afficher 'fr-FR'
  }
  // Affichage/Masquage du dropdown d'export
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  // Masque le dropdown si l'utilisateur clique en dehors
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }
  ngOnInit() {
    // Récupérer l'ID de la boutique depuis les query params
    this.route.queryParams.subscribe(params => {
      this.selectedBoutiqueId = params['boutiqueId'] ? +params['boutiqueId'] : null;
      this.getProduit();
    });
    this.getUserInfo();
    this.loadStockById();
    this.loadStockHistory();
  }
  // Méthode pour charger tous les stocks et ne conserver que ceux ajustés
  // Charge un seul stock ajusté (par exemple le premier)
  loadAdjustedStock() {
    const token = this.userService.getToken();
    if (!token) {
      console.error('Token introuvable');
      return;
    }
    this.stockService.getAllStocks().subscribe({
      next: stocks => {
        console.log("recuperer", stocks);
        // Filtre pour garder uniquement les stocks ayant des ajustements
        const adjustedStocks = stocks.filter(stock => stock.quantiteAjoute && stock.quantiteAjoute > 0 || stock.quantiteRetirer && stock.quantiteRetirer > 0);
        // Sélectionne le premier stock ajusté (ou null s'il n'y en a pas)
        this.stock = adjustedStocks.length > 0 ? adjustedStocks[0] : null;
      },
      error: error => {
        console.error("Erreur lors du chargement du stock ajusté", error);
      }
    });
  }
  // Appeler le service pour récupérer le stock par ID
  loadStockById() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const stockId = idParam ? +idParam : null;
    if (!stockId) {
      console.error('ID du stock invalide');
      return;
    }
    const token = this.userService.getToken();
    if (!token) {
      console.error('Token introuvable');
      return;
    }
    this.stockService.getAllStocks().subscribe({
      next: stocks => {
        // Chercher le stock dont l'ID correspond
        const selectedStock = stocks.find(stock => stock.id === stockId);
        if (selectedStock) {
          console.log("Stock trouvé :", selectedStock);
          this.stock = selectedStock;
        } else {
          console.error(`Aucun stock trouvé avec l'ID ${stockId}`);
        }
      },
      error: error => {
        console.error("Erreur lors du chargement des stocks", error);
      }
    });
  }
  getBoutiqueName() {
    this.userService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo);
      if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
        console.log(userInfo.boutiques[0]);
        this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
        this.boutiqueName = 'Aucune boutique';
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  // getPartageInfoUser() {
  //    // Partage de donner de user
  //    this.sharedDataService.boutiqueName$.subscribe(name => {
  //     console.log("AddProduitComponent - Nom boutique récupéré :", name);
  //     this.boutiqueName = name;
  //   });
  // }
  getUserInfo() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        this.nomComplet = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
        this.email = user.email;
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  getProduit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : 0;
    if (productId > 0) {
      this.produitService.getProduitById(productId).subscribe({
        next: data => {
          this.produit = data;
          // Mettre à jour les noms de toutes les boutiques
          if (data.boutiques && data.boutiques.length > 0) {
            this.allBoutiqueNames = data.boutiques.map(b => b.nom);
            // Calculer la quantité totale si "Toutes les boutiques" est sélectionné
            if (!this.selectedBoutiqueId) {
              this.totalQuantity = data.boutiques.reduce((sum, b) => sum + (b.quantite || 0), 0);
            }
          }
          // Trouver la boutique spécifique si ID est présent
          if (this.selectedBoutiqueId && data.boutiques) {
            const boutique = data.boutiques.find(b => b.id === this.selectedBoutiqueId);
            if (boutique) {
              this.boutiqueName = boutique.nom;
              this.produit.quantite = boutique.quantite || 0;
            }
          }
          this.loadStockHistory();
        },
        error: err => console.error('Erreur:', err)
      });
    }
  }
  loadStockHistory() {
    const produitId = this.produit?.id;
    if (!produitId) {
      console.error('Produit non défini pour charger l\'historique');
      return;
    }
    const token = this.userService.getToken();
    if (!token) {
      console.error('Token introuvable');
      return;
    }
    this.stockService.getAllstockhistorique(produitId).subscribe({
      next: data => {
        console.log('Historique de stock:', data);
        this.stockHistory = data;
      },
      error: error => {
        console.error("Erreur lors du chargement de l'historique de stock", error);
      }
    });
  }
  // getLastStockAction(): string {
  //   if (!this.stockHistory || this.stockHistory.length === 0) {
  //     return 'Non activitité';
  //   }
  //   const lastStock = this.stockHistory[this.stockHistory.length - 1];
  //   // Vérification supplémentaire si lastStock est undefined
  //   if (!lastStock) {
  //     return 'Non activitité';
  //   }
  //   return lastStock.action || 'Non activitité';
  // }
  getLastStockAction() {
    if (!this.stockHistory || this.stockHistory.length === 0) {
      // console.log('Aucune activité dans stockHistory');
      return 'Non activitité';
    }
    const lastStock = this.stockHistory[this.stockHistory.length - 1];
    // console.log('Dernière action stockée :', lastStock?.action);
    return lastStock?.action || 'Non activitité';
  }
  downloadBoutiqueProduitPDF() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (!this.boutiqueName || !this.nomComplet || !this.email || !this.produit) {
      console.error("Informations incomplètes !");
      return;
    }
    let formattedDate = '';
    if (this.produit.createdAt) {
      const createdAt = new Date(this.produit.createdAt);
      formattedDate = createdAt.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } else {
      formattedDate = 'Date non disponible';
    }
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(`Fiche Produit et Stock`, 80, 15);
    doc.setFontSize(12);
    doc.text(`Informations de la boutique`, 14, 30);
    doc.setLineWidth(0.5);
    doc.line(14, 32, 195, 32);
    // Informations sur la boutique
    doc.setFontSize(10);
    doc.text(`Nom de la Boutique : ${this.boutiqueName}`, 14, 40);
    doc.text(`Adresse : Rue 414`, 14, 45);
    doc.text(`Date de création : ${formattedDate}`, 14, 50);
    doc.text(`Créé par : ${this.nomComplet}`, 14, 55);
    doc.text(`Email : ${this.email}`, 14, 60);
    doc.setLineWidth(0.5);
    doc.line(14, 65, 195, 65);
    doc.setFontSize(12);
    doc.text(`Détails du Produit N°: ${this.produit.codeGenerique}`, 14, 75);
    doc.line(14, 77, 195, 77);
    const columns = ['Mes produits', 'Stock actuel', 'Quantité à ajouter', 'Quantité à retiré', 'Coût du produit'];
    const rows = [[this.produit.nom || 'N/A', this.produit.quantite ?? 0, '_____', `${this.produit.prixAchat ?? 0}`]];
    jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, {
      head: [columns],
      body: rows,
      startY: 80,
      theme: 'grid',
      headStyles: {
        fillColor: [64, 153, 255],
        textColor: [255, 255, 255],
        fontSize: 12
      },
      bodyStyles: {
        fontSize: 10
      }
    });
    const finalY = doc.lastAutoTable?.finalY || 120;
    doc.setLineWidth(0.5);
    doc.line(14, finalY + 5, 195, finalY + 5);
    doc.setFontSize(10);
    doc.text('Signature:', 14, finalY + 15);
    doc.text('Approuvé par:', 100, finalY + 15);
    doc.text('Reçu par:', 140, finalY + 15);
    doc.save(`Fiche_Produit_${this.produit.nom}.pdf`);
  }
  getDisplayedDescription() {
    const lastAction = (this.getLastStockAction() || '').toLowerCase();
    // console.log('Action en minuscule :', lastAction);
    console.log('descriptionAjout:', this.stock?.descriptionAjout, 'descriptionRetire:', this.stock?.descriptionRetire);
    if (lastAction.includes('ajout') && this.stock?.descriptionAjout) {
      return this.stock.descriptionAjout;
    } else if ((lastAction.includes('retire') || lastAction.includes('reduction')) && this.stock?.descriptionRetire) {
      return this.stock.descriptionRetire;
    }
    return 'Aucune description...';
  }
  // Méthode pour inverser l'état d'affichage
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
  static {
    this.ɵfac = function DetailStockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_4__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DetailStockComponent,
      selectors: [["app-detail-stock"]],
      hostBindings: function DetailStockComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailStockComponent_click_HostBindingHandler($event) {
            return ctx.onClickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
        }
      },
      decls: 103,
      vars: 23,
      consts: [["openIcon", ""], ["allBoutiques", ""], [1, "container_global"], [1, "content_detail_stock"], [1, "modal-body"], [1, "content_retour_icon"], ["routerLink", "/stocks", 1, "retour_icon"], [1, "ri-arrow-left-fill"], [1, "icon_export"], [1, "export-container", 2, "display", "flex", "align-items", "center"], [1, "iconDrop", 2, "margin-right", "20px", 3, "click"], ["class", "ri-chat-check-line", "title", "Afficher la description", 4, "ngIf", "ngIfElse"], [1, "iconDrop"], [1, "ri-printer-cloud-line", 3, "click"], ["class", "export-dropdown", 4, "ngIf"], [1, "iconDrop", 2, "margin-left", "20px"], [1, "ri-history-line"], [1, "container_imprimate"], [1, "content_imprimate"], [1, "codeProduit"], [1, "codeId", 2, "letter-spacing", "2px"], ["class", "description_detail", 4, "ngIf"], [1, "info_content"], [1, "info"], [1, "info_title"], [4, "ngIf", "ngIfElse"], [1, "info_value"], [2, "color", "#9b9b9b"], [1, "info_value_position"], [1, "containerTable"], [1, "table_title"], [1, "titleTableProduit"], [1, "title_table_name"], [1, "title_table_contenu"], [1, "title_table_contenu", 2, "color", "#0672E4"], [1, "title_table_contenu4", 2, "color", "#ff0000"], [1, "champ_input", 2, "margin-right", "10px"], ["type", "text", "readonly", "", 1, "input_table1", 3, "value"], [1, "champ_input", 2, "margin-right", "15px"], ["type", "text", "readonly", "", 1, "input_table", 3, "value"], ["type", "text", "readonly", "", 1, "input_table", 2, "color", "#0672E4", 3, "value"], [1, "champ_input", "i4"], ["type", "text", "readonly", "", 1, "input_table", 2, "color", "#ff0000", 3, "value"], [1, "container_signature"], [1, "content_signature"], [1, "signature"], [1, "approuve"], [1, "recu"], ["title", "Afficher la description", 1, "ri-chat-check-line"], ["title", "Fermer la description", 1, "ri-chat-off-line"], [1, "export-dropdown"], [1, "export-option", 3, "click"], [1, "export-option"], [1, "description_detail"], ["readonly", "", 3, "value"], [1, "info_value", 2, "color", "#0672E4"]],
      template: function DetailStockComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8)(7, "div", 9)(8, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailStockComponent_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.toggleDescription());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DetailStockComponent_i_9_Template, 1, 0, "i", 11)(10, DetailStockComponent_ng_template_10_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12)(13, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailStockComponent_Template_i_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.toggleExportDropdown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DetailStockComponent_div_14_Template, 5, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, DetailStockComponent_div_22_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 22)(24, "div", 23)(25, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Boutique :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DetailStockComponent_div_27_Template, 3, 1, "div", 25)(28, DetailStockComponent_ng_template_28_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 23)(31, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Date de creation :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 23)(37, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Cr\u00E9\u00E9 par :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 23)(42, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Email :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 23)(47, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Derni\u00E8re activit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 23)(50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Type de mouvement : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 23)(55, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 29)(59, "div", 30)(60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "table")(63, "thead")(64, "tr", 31)(65, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Mes produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Stock actuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Quantit\u00E9 \u00E0 ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Co\u00FBt du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Quantit\u00E9 \u00E0 retirer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "tbody")(76, "tr")(77, "td")(78, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "td")(81, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "td")(84, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "td")(87, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "td")(90, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 43)(93, "div", 44)(94, "div", 45)(95, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Signature");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 46)(98, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Approuv\u00E9 par");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 47)(101, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Re\u00E7u par");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const openIcon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
          const allBoutiques_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showDescription)("ngIfElse", openIcon_r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showExportDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.produit == null ? null : ctx.produit.nom, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedBoutiqueId)("ngIfElse", allBoutiques_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](35, 17, ctx.produit == null ? null : ctx.produit.createdAt, "dd-MM-yyyy '\u00E0' HH:mm"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.nomComplet);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getLastStockAction());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](57, 20, ctx.stock == null ? null : ctx.stock.lastUpdated, "dd-MM-yyyy '\u00E0' HH:mm"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.produit == null ? null : ctx.produit.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.selectedBoutiqueId ? (ctx.produit == null ? null : ctx.produit.quantite) || 0 : ctx.totalQuantity);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.stock == null ? null : ctx.stock.quantiteAjoute);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.produit == null ? null : ctx.produit.prixVente);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.stock == null ? null : ctx.stock.quantiteRetirer);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: [".content_detail_stock[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 85vh;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content_retour_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid rgba(60, 60, 60, 0.1607843137);\n}\n\n.retour_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.description_detail[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.description_detail[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  padding: 10px 20px 12px 8px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 13px;\n  resize: none;\n}\n\n.export-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.export-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 180px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.389);\n  z-index: 1;\n  top: 100%;\n  left: 0;\n  border-radius: 5px;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.iconDrop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.container_imprimate[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.codeProduit[_ngcontent-%COMP%]   .codeId[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.personne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.info_email[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.info_title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.info[_ngcontent-%COMP%]   .info_value[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.info[_ngcontent-%COMP%]   .info_value_position[_ngcontent-%COMP%] {\n  position: relative;\n  top: -10px;\n  font-size: 9px;\n  letter-spacing: 1px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.title_table_contenu4[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 0px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n  margin-top: 0;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.table_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.input_table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n  text-align: right;\n  cursor: pointer;\n}\n\n.input_table1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n  text-align: left;\n}\n\n.title_table_name[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.title_table_contenu[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 18px;\n}\n\n.container_signature[_ngcontent-%COMP%] {\n  margin: 55px 0;\n}\n\n.content_signature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.approuve[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.recu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.blue-text[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdURBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBT0E7RUFDSSxZQUFBO0FBSko7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUpGOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSx5QkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVVBO0VBQ0ksWUFBQTtBQVBKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7QUFSSjs7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0FBUko7O0FBV0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBV0E7RUFDSSx5QkFBQTtBQVJKOztBQVdBO0VBQ0kseUJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7QUFUSjs7QUFZQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtBQVRKOztBQVlBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFiSjs7QUFpQkE7RUFDSSxVQUFBO0FBZEo7O0FBcUJBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQWxCSjs7QUF3QkE7RUFDSSxjQUFBO0FBckJKOztBQXdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBckJKOztBQXlCQTs7O0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FBdEJKOztBQTBCQTtFQUNJLGNBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsY0FBQTtBQXZCSiIsImZpbGUiOiJkZXRhaWwtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9kZXRhaWxfc3RvY2sge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50X3JldG91cl9pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbn1cblxuLnJldG91cl9pY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIC5jb250ZW50X2ltcHJpbWF0ZSB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyB9XG5cbi5kZXNjcmlwdGlvbl9kZXRhaWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmRlc2NyaXB0aW9uX2RldGFpbCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTJweCA4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgZm9udC1zaXplOiAxM3B4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi8vIGRyb3AgZG9tdyBcblxuLmV4cG9ydC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuICBcbi5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biAuZXhwb3J0LW9wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbiAgXG4uaWNvbkRyb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25Ecm9wIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIENvbnRhaW5lciBwb3VyIGxhIHBhZ2UgaW1wcmltYXRlXG4uY29udGFpbmVyX2ltcHJpbWF0ZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4vLyBjb2RlIGRlIHByb2R1aXRcbi5jb2RlUHJvZHVpdCAuY29kZUlkIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wZXJzb25uZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mb19lbWFpbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmluZm9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbmZvIC5pbmZvX3ZhbHVlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pbmZvIC5pbmZvX3ZhbHVlX3Bvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbiAgXG4udGl0bGVfdGFibGVfY29udGVudTQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJsZV90aXRsZSBwIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmlucHV0X3RhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgLy8gbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnB1dF90YWJsZTEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAvLyBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLnRpdGxlX3RhYmxlX25hbWUge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi8vIC50aXRsZV90YWJsZV9jb250ZW51IHtcblxuLy8gfVxuXG4udGl0bGVfdGFibGVfY29udGVudSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59XG5cbi8vLy8vLy8vLy8vLyBDT05UQUlORVIgU0lHTkFUVVJFXG4vLy8gXG5cbi5jb250YWluZXJfc2lnbmF0dXJlIHtcbiAgICBtYXJnaW46IDU1cHggMDtcbn1cblxuLmNvbnRlbnRfc2lnbmF0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnNpZ25hdHVyZSBwLFxuLmFwcHJvdXZlIHAsXG4ucmVjdSBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibHVlLXRleHQge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICB9XG4gIFxuICAucmVkLXRleHQge1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICB9XG4gIFxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuXG4vLyB9XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9kZXRhaWwtc3RvY2svZGV0YWlsLXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1REFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFPQTtFQUNJLFlBQUE7QUFKSjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSkY7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTko7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBV0E7RUFDSSxlQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7QUFSSjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXQTtFQUNJLHlCQUFBO0FBUko7O0FBV0E7RUFDSSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVhKOztBQWNBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWlCQTtFQUNJLFVBQUE7QUFkSjs7QUFxQkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBbEJKOztBQXdCQTtFQUNJLGNBQUE7QUFyQko7O0FBd0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFyQko7O0FBeUJBOzs7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Qko7O0FBMEJBO0VBQ0ksY0FBQTtBQXZCSjs7QUEwQkU7RUFDRSxjQUFBO0FBdkJKO0FBQ0Esd3dPQUF3d08iLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9kZXRhaWxfc3RvY2sge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50X3JldG91cl9pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbn1cblxuLnJldG91cl9pY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIC5jb250ZW50X2ltcHJpbWF0ZSB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyB9XG5cbi5kZXNjcmlwdGlvbl9kZXRhaWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmRlc2NyaXB0aW9uX2RldGFpbCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTJweCA4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgZm9udC1zaXplOiAxM3B4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi8vIGRyb3AgZG9tdyBcblxuLmV4cG9ydC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuICBcbi5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biAuZXhwb3J0LW9wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbiAgXG4uaWNvbkRyb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25Ecm9wIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIENvbnRhaW5lciBwb3VyIGxhIHBhZ2UgaW1wcmltYXRlXG4uY29udGFpbmVyX2ltcHJpbWF0ZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4vLyBjb2RlIGRlIHByb2R1aXRcbi5jb2RlUHJvZHVpdCAuY29kZUlkIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wZXJzb25uZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mb19lbWFpbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmluZm9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbmZvIC5pbmZvX3ZhbHVlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pbmZvIC5pbmZvX3ZhbHVlX3Bvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbiAgXG4udGl0bGVfdGFibGVfY29udGVudTQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJsZV90aXRsZSBwIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmlucHV0X3RhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgLy8gbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnB1dF90YWJsZTEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAvLyBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLnRpdGxlX3RhYmxlX25hbWUge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi8vIC50aXRsZV90YWJsZV9jb250ZW51IHtcblxuLy8gfVxuXG4udGl0bGVfdGFibGVfY29udGVudSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59XG5cbi8vLy8vLy8vLy8vLyBDT05UQUlORVIgU0lHTkFUVVJFXG4vLy8gXG5cbi5jb250YWluZXJfc2lnbmF0dXJlIHtcbiAgICBtYXJnaW46IDU1cHggMDtcbn1cblxuLmNvbnRlbnRfc2lnbmF0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnNpZ25hdHVyZSBwLFxuLmFwcHJvdXZlIHAsXG4ucmVjdSBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibHVlLXRleHQge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICB9XG4gIFxuICAucmVkLXRleHQge1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICB9XG4gIFxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuXG4vLyB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_detail-stock_detail-stock_component_ts.js.map