"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["default-src_app_POS_pos-accueil_view-state_service_ts-src_app_admin-page_MODELS_cfa-currency_-059e64"],{

/***/ 80145:
/*!*******************************************************!*\
  !*** ./src/app/POS/pos-accueil/view-state.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewStateService: () => (/* binding */ ViewStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ViewStateService {
  constructor() {
    this.isListViewSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.isListView$ = this.isListViewSubject.asObservable();
  }
  setViewPreference(isList) {
    this.isListViewSubject.next(isList);
    localStorage.setItem('viewPreference', isList ? 'list' : 'grid');
  }
  static {
    this.ɵfac = function ViewStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ViewStateService,
      factory: ViewStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41731:
/*!********************************************************!*\
  !*** ./src/app/admin-page/MODELS/cfa-currency.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CfaCurrencyPipe: () => (/* binding */ CfaCurrencyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CfaCurrencyPipe {
  transform(value) {
    if (value === null || value === undefined || isNaN(value)) {
      return 'N/A';
    }
    const hasDecimals = value % 1 !== 0;
    const formattedValue = value.toFixed(hasDecimals ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedValue} FCFA`;
  }
  static {
    this.ɵfac = function CfaCurrencyPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CfaCurrencyPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "cfaCurrency",
      type: CfaCurrencyPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 37788:
/*!*****************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/boutique-state.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueStateService: () => (/* binding */ BoutiqueStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class BoutiqueStateService {
  constructor() {
    this.STORAGE_KEY = 'selectedBoutiqueId';
    // initialisation avec la valeur sessionStorage (ou migration depuis localStorage)
    this.selectedBoutiqueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadInitial());
    this.selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();
    // rien d'autre à faire ici (loadInitial a déjà effectué la migration si nécessaire)
  }
  /** Charge la valeur initiale depuis sessionStorage.
   *  Si une valeur existe dans localStorage (ancienne app), on la migre vers sessionStorage. */
  loadInitial() {
    // migration depuis localStorage (si nécessaire)
    const legacy = localStorage.getItem(this.STORAGE_KEY);
    if (legacy !== null) {
      try {
        // transférer dans sessionStorage puis supprimer l'ancien
        sessionStorage.setItem(this.STORAGE_KEY, legacy);
      } catch (e) {
        console.warn('Impossible de migrer la boutique depuis localStorage', e);
      }
      localStorage.removeItem(this.STORAGE_KEY);
    }
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  setSelectedBoutique(boutiqueId) {
    if (boutiqueId !== null) {
      sessionStorage.setItem(this.STORAGE_KEY, boutiqueId.toString());
    } else {
      sessionStorage.removeItem(this.STORAGE_KEY);
    }
    this.selectedBoutiqueSubject.next(boutiqueId);
  }
  /** retourne la valeur actuelle (ou null si aucune) */
  getCurrentValue() {
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  static {
    this.ɵfac = function BoutiqueStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoutiqueStateService,
      factory: BoutiqueStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 90612:
/*!******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/SearchService.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class SearchService {
  constructor() {
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.search$ = this.searchSubject.asObservable();
  }
  setSearch(term) {
    this.searchSubject.next(term);
  }
  static {
    this.ɵfac = function SearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 68420:
/*!************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/VenteService/calculator.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculatorService: () => (/* binding */ CalculatorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class CalculatorService {
  constructor() {
    this.state = this.createInitialState();
    this._solarDisplay = '0000';
    // private _isActive = new BehaviorSubject<boolean>(true);
    this._isActive = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isActive$ = this._isActive.asObservable();
  }
  createInitialState() {
    return {
      display: '0',
      operand: null,
      operator: null,
      waitingForOperand: false,
      memory: 0,
      gtAccumulator: 0,
      lastMemoryRecall: false
    };
  }
  /** getters exposés */
  get display() {
    return this.state.display;
  }
  get solarDisplay() {
    return this._solarDisplay;
  }
  /** Gère l'état actif de la calculatrice pour la capture clavier */
  setActive(isActive) {
    this._isActive.next(isActive);
  }
  /** Public single entry point for UI */
  handleKey(key) {
    if (!key) return;
    // digits
    if (/^[0-9]|^00$/.test(key)) {
      this.inputDigit(key);
      return;
    }
    switch (key) {
      case '.':
        this.inputDot();
        return;
      case '+':
      case '−':
      case '-':
      case '×':
      case '*':
      case '÷':
      case '/':
        this.onOperator(key === '*' ? '×' : key === '/' ? '÷' : key === '-' ? '−' : key);
        return;
      case '=':
        this.onEquals();
        return;
      case 'ON/AC':
        this.allClear();
        return;
      case 'C.CE':
        this.clearEntry();
        return;
      case '▶':
        this.backspace();
        return;
      case '+/-':
        this.toggleSign();
        return;
      case '√':
        this.sqrt();
        return;
      case '%':
        this.percent();
        return;
      case 'M+':
        this.memoryAdd();
        return;
      case 'M-':
        this.memorySub();
        return;
      case 'MC':
        this.memoryClear();
        return;
      case 'MR':
        this.memoryRecall();
        return;
      case 'MRC':
        this.memoryRecallClearToggle();
        return;
      case 'GT':
        this.getGrandTotal();
        return;
      case '00':
        this.inputDigit('00');
        return;
      // autres touches laissées en placeholder
      default:
        return;
    }
  }
  inputDigit(d) {
    if (this.state.waitingForOperand) {
      // démarrer une nouvelle saisie : le digit remplace l'affichage
      this.state.display = d === '00' ? '0' : d;
      this.state.waitingForOperand = false;
      return;
    }
    if (d === '00') {
      if (this.state.display === '0') return;
      this.state.display = this.state.display + '00';
      return;
    }
    this.state.display = this.state.display === '0' ? d : this.state.display + d;
  }
  inputDot() {
    if (this.state.waitingForOperand) {
      this.state.display = '0.';
      this.state.waitingForOperand = false;
      return;
    }
    if (!this.state.display.includes('.')) {
      this.state.display = this.state.display + '.';
    }
  }
  clearEntry() {
    this.state.display = '0';
    this.state.waitingForOperand = true;
  }
  allClear() {
    this.state = this.createInitialState();
    this._solarDisplay = '0000';
  }
  toggleSign() {
    if (this.state.display === '0') return;
    this.state.display = this.state.display.startsWith('-') ? this.state.display.slice(1) : '-' + this.state.display;
  }
  backspace() {
    if (this.state.waitingForOperand) return;
    const s = this.state.display;
    if (s.length <= 1 || s.length === 2 && s.startsWith('-')) {
      this.state.display = '0';
    } else {
      this.state.display = s.slice(0, -1);
    }
  }
  performOperator(op) {
    const inputValue = parseFloat(this.state.display);
    if (this.state.operand == null) {
      this.state.operand = inputValue;
    } else if (this.state.operator) {
      const result = this.calculate(this.state.operand, inputValue, this.state.operator);
      this.state.display = this.formatResult(result);
      this.state.operand = result;
      // if user pressed '=' accumulate result to GT
      if (op === '=' || this.state.operator === '=') {
        this.state.gtAccumulator += result;
      }
    }
    // If op is '=' we clear the operator, otherwise set it
    this.state.operator = op === '=' ? null : op;
    this.state.waitingForOperand = true;
  }
  calculate(a, b, op) {
    switch (op) {
      case '+':
        return a + b;
      case '−':
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b === 0 ? NaN : a / b;
      default:
        return b;
    }
  }
  percent() {
    const cur = parseFloat(this.state.display);
    if (this.state.operand != null) {
      const res = this.state.operand * cur / 100;
      this.state.display = this.formatResult(res);
      this.state.waitingForOperand = true;
    } else {
      this.state.display = this.formatResult(cur / 100);
      this.state.waitingForOperand = true;
    }
  }
  sqrt() {
    const v = parseFloat(this.state.display);
    if (v < 0) {
      this.state.display = 'Erreur';
      return;
    }
    this.state.display = this.formatResult(Math.sqrt(v));
    this.state.waitingForOperand = true;
  }
  // simple exponential e^x
  exp() {
    const v = parseFloat(this.state.display);
    this.state.display = this.formatResult(Math.exp(v));
    this.state.waitingForOperand = true;
  }
  // MU: placeholder behaviour — par défaut rien; tu peux remplacer par ta logique commerciale
  placeholderMU() {
    // Exemple : MU peut calculer prix de vente à partir d'un coût + marge.
    // Ici on n'implémente pas de logique métier par défaut.
    // Laisser tel quel pour éviter comportement inattendu.
    return;
  }
  /** Lorsqu'on appuie sur un opérateur (ex: + - × ÷) :
   *  - on stocke la valeur courante dans operand
   *  - on place cette valeur dans le solarDisplay
   *  - on remet l'affichage principal à 0 (prêt pour la saisie suivante)
   */
  onOperator(op) {
    const cur = parseFloat(this.state.display);
    // si operand n'existe pas => stocke la valeur
    if (this.state.operand == null) {
      this.state.operand = isNaN(cur) ? 0 : cur;
    } else if (!this.state.waitingForOperand && this.state.operator) {
      // si on avait déjà un opérateur et qu'on a saisi un nouveau nombre,
      // on peut faire un calcul intermédiaire (chaînage) et stocker le résultat
      const result = this.calculate(this.state.operand, cur, this.state.operator);
      this.state.operand = result;
    }
    // afficher dans solar la valeur stockée (ex: 300)
    this._solarDisplay = this.formatResult(this.state.operand ?? 0);
    // mettre en attente pour remplacer l'écran principal par la prochaine saisie
    this.state.display = '0';
    this.state.waitingForOperand = true;
    this.state.operator = op;
  }
  /** = : calcule operand operator currentDisplay et affiche le total */
  onEquals() {
    const cur = parseFloat(this.state.display);
    if (this.state.operand == null || !this.state.operator) {
      // rien à calculer
      return;
    }
    const result = this.calculate(this.state.operand, cur, this.state.operator);
    // solar : montrer l'expression (ex: "300 + 50 =")
    this._solarDisplay = `${this.formatResult(this.state.operand)} ${this.state.operator} ${this.formatResult(cur)} =`;
    // afficher le résultat
    this.state.display = this.formatResult(result);
    // reset opérateur mais on peut garder operand si on veut réutiliser
    this.state.operand = result;
    this.state.operator = null;
    this.state.waitingForOperand = true;
  }
  // Memory & GT (identiques à l'implémentation précédente)
  memoryAdd() {
    this.state.memory += parseFloat(this.state.display);
    this.state.lastMemoryRecall = false;
  }
  memorySub() {
    this.state.memory -= parseFloat(this.state.display);
    this.state.lastMemoryRecall = false;
  }
  memoryClear() {
    this.state.memory = 0;
    this.state.lastMemoryRecall = false;
  }
  memoryRecall() {
    this.state.display = this.formatResult(this.state.memory);
    this.state.lastMemoryRecall = true;
    this.state.waitingForOperand = true;
  }
  memoryRecallClearToggle() {
    if (this.state.lastMemoryRecall) {
      this.memoryClear();
    } else {
      this.memoryRecall();
    }
  }
  getGrandTotal() {
    this.state.display = this.formatResult(this.state.gtAccumulator);
    this.state.waitingForOperand = true;
  }
  formatResult(value) {
    if (!isFinite(value)) return 'Erreur';
    const s = Number.parseFloat(String(value)).toPrecision(12);
    return parseFloat(s).toString();
  }
  handleComputerKeyboard(event) {
    if (!this._isActive.value) return;
    // Ne fait rien si la calculatrice n'est pas active
    // if (!this._isActive.value) {
    //   return;
    // }
    const key = event.key;
    // Mapper les touches du clavier aux touches de la calculatrice
    const keyMap = {
      'Enter': '=',
      'Escape': 'ON/AC',
      'Backspace': '▶',
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '.': '.',
      '%': '%'
    };
    // Gestion des chiffres
    if (/^[0-9]$/.test(key)) {
      this.inputDigit(key);
      return;
    }
    // Gestion des touches spéciales mappées
    if (keyMap[key]) {
      this.handleKey(keyMap[key]);
      event.preventDefault();
      return;
    }
    // Gestion de la touche 00
    if (key === '0' && event.shiftKey) {
      this.inputDigit('00');
      event.preventDefault();
    }
  }
  static {
    this.ɵfac = function CalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CalculatorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalculatorService,
      factory: CalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 36406:
/*!*********************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/VenteService/scanner.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerService: () => (/* binding */ ScannerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ScannerService {
  constructor() {
    this.scanSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.scanningSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.barcode = '';
    this.isEnabled = true;
    this.isUserTyping = false;
    this.lastKeyTime = 0;
    this.SCAN_TIMEOUT = 100; // 150ms pour détecter la fin du scan
    this.isScanning = false;
    this.setupScannerListener();
  }
  setupScannerListener() {
    // Utiliser un listener global pour capturer tous les événements clavier
    document.addEventListener('keydown', event => {
      this.handleKeyEvent(event);
    }, true); // true = capture phase pour intercepter avant les autres handlers
  }
  handleKeyEvent(event) {
    if (!this.isEnabled || this.isScanning) return; // Empêcher les nouveaux scans pendant le traitement
    // if (!this.isEnabled) return;
    const now = Date.now();
    const timeSinceLastKey = now - this.lastKeyTime;
    this.lastKeyTime = now;
    // Ignorer si on est dans un champ de saisie
    const target = event.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      console.log('Scanner: Ignoré - dans un champ de saisie');
      return;
    }
    // Si l'utilisateur tape normalement (délai > 200ms entre touches)
    if (timeSinceLastKey > 200) {
      console.log('Scanner: Ignoré - utilisateur tape normalement');
      this.resetScan();
      return;
    }
    // Scanner détecté (délai < 100ms entre touches)
    if (timeSinceLastKey < this.SCAN_TIMEOUT) {
      console.log('Scanner: Événement de scan détecté, délai:', timeSinceLastKey, 'ms');
      const key = this.mapAzertyKey(event.key); // Mapper les touches AZERTY
      if (key === 'Enter') {
        if (this.barcode.length >= 3) {
          console.log('Scanner: Code complet détecté:', this.barcode);
          this.isScanning = true; // Marquer le scan comme en cours
          this.scanningSubject.next(true);
          this.scanSubject.next(this.barcode);
          setTimeout(() => {
            this.scanningSubject.next(false);
            this.isScanning = false; // Réactiver après le traitement
            this.resetScan();
          }, 100);
        } else if (this.isScanning) {
          console.log('Scanner: Scan déjà en cours, ignoré');
        } else {
          console.log('Scanner: Code trop court:', this.barcode);
        }
        this.resetScan();
      } else if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
        this.barcode += key;
        console.log('Scanner: Caractère ajouté:', key, 'Buffer:', this.barcode);
        // Réinitialiser le timer
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          console.log('Scanner: Timeout, reset buffer');
          this.resetScan();
        }, 500); // 500ms pour détecter la fin du scan
      }
    }
  }
  // Mapper les touches AZERTY vers QWERTY
  mapAzertyKey(key) {
    const azertyMap = {
      '&': '1',
      'é': '2',
      '"': '3',
      "'": '4',
      '(': '5',
      '-': '6',
      'è': '7',
      '_': '8',
      'ç': '9',
      'à': '0',
      'ù': '0',
      '²': '2',
      '°': '0'
    };
    return azertyMap[key] || key;
  }
  // Réinitialiser l'état du scan
  resetScan() {
    this.barcode = '';
    clearTimeout(this.timer);
    this.isScanning = false;
  }
  getScanObservable() {
    return this.scanSubject.asObservable();
  }
  getScanningObservable() {
    return this.scanningSubject.asObservable();
  }
  setUserTyping(typing) {
    this.isUserTyping = typing;
    console.log('Scanner: User typing:', typing);
  }
  enableScanner() {
    this.isEnabled = true;
    console.log('Scanner: Activé');
  }
  disableScanner() {
    this.isEnabled = false;
    console.log('Scanner: Désactivé');
  }
  // Méthode de test pour simuler un scan
  simulateScan(code) {
    console.log('Scanner: Simulation de scan avec:', code);
    this.scanSubject.next(code);
  }
  destroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    console.log('Scanner: Service détruit');
  }
  static {
    this.ɵfac = function ScannerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScannerService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ScannerService,
      factory: ScannerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 17022:
/*!***************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/commande-state.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandeStateService: () => (/* binding */ CommandeStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);


class CommandeStateService {
  constructor() {
    // Correction: Changer le type de commandesMap
    this.commandesMap = new Map();
    this.commandesIds = ['001'];
    this.activeCommandeId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('001');
    this.activeCommandeId$ = this.activeCommandeId.asObservable();
    this.commandesIdsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.commandesIds);
    this.commandesIds$ = this.commandesIdsSubject.asObservable();
    this.commandeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.commandeUpdated$ = this.commandeUpdated.asObservable();
    this.commandesMap.set('001', {
      id: '001',
      cart: new Map(),
      createdAt: new Date()
    });
  }
  getCommandeDetails(id) {
    return this.commandesMap.get(id);
  }
  updateCommandeTotals(id, totalItems, totalAmount) {
    const commande = this.commandesMap.get(id);
    if (commande) {
      commande.totalItems = totalItems;
      commande.totalAmount = totalAmount;
      this.commandesMap.set(id, commande);
    }
  }
  setActiveCommande(id) {
    if (!this.commandesMap.has(id)) {
      this.commandesMap.set(id, {
        id,
        cart: new Map(),
        createdAt: new Date()
      });
      this.commandesIds.push(id);
    }
    this.activeCommandeId.next(id);
  }
  // Correction: Retourner le cart de la commande
  getActiveCart() {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    return commande ? commande.cart : new Map();
  }
  updateActiveCart(cart) {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    if (commande) {
      commande.cart = new Map(cart);
      this.commandesMap.set(activeId, commande);
    }
  }
  getAllCommandesIds() {
    return [...this.commandesIds];
  }
  addNewCommande() {
    const newId = (this.commandesIds.length + 1).toString().padStart(3, '0');
    const newCommande = {
      id: newId,
      cart: new Map(),
      createdAt: new Date()
    };
    this.commandesMap.set(newId, newCommande);
    this.commandesIds.push(newId);
    this.commandesIdsSubject.next([...this.commandesIds]); // Notifier du changement
    return newId;
  }
  // Ajout de la méthode removeCommande
  removeCommande(id) {
    if (id === '001') {
      // Ne pas supprimer la commande par défaut
      return;
    }
    this.commandesMap.delete(id);
    this.commandeUpdated.next();
    const index = this.commandesIds.indexOf(id);
    if (index !== -1) {
      this.commandesIds.splice(index, 1);
    }
    // Si on supprime la commande active, on active la première commande
    if (this.activeCommandeId.getValue() === id) {
      this.activeCommandeId.next(this.commandesIds[0] || '001');
    }
    this.commandesIdsSubject.next([...this.commandesIds]);
  }
  // Ajout d'une méthode pour obtenir l'ID actif
  getActiveCommandeId() {
    return this.activeCommandeId.getValue();
  }
  static {
    this.ɵfac = function CommandeStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommandeStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CommandeStateService,
      factory: CommandeStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_POS_pos-accueil_view-state_service_ts-src_app_admin-page_MODELS_cfa-currency_-059e64.js.map