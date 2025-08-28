import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CalcState {
  display: string;
  operand: number | null;
  operator: string | null;
  waitingForOperand: boolean;
  memory: number;
  gtAccumulator: number;
  lastMemoryRecall: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private state: CalcState = this.createInitialState();
  private _solarDisplay: string = '0000';
  private _isActive = new BehaviorSubject<boolean>(true);
  public isActive$ = this._isActive.asObservable();

  private createInitialState(): CalcState {
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
  get display(): string { return this.state.display; }
  get solarDisplay(): string { return this._solarDisplay; }

  /** Gère l'état actif de la calculatrice pour la capture clavier */
  setActive(isActive: boolean) {
    this._isActive.next(isActive);
  }

  /** Public single entry point for UI */
  handleKey(key: string) {
      if (!key) return;
      // digits
      if (/^[0-9]|^00$/.test(key)) { this.inputDigit(key); return; }
      switch (key) {
      case '.': this.inputDot(); return;
      case '+': case '−': case '-': case '×': case '*': case '÷': case '/':
          this.onOperator((key === '*' ? '×' : key === '/' ? '÷' : (key === '-' ? '−' : key)));
          return;
      case '=': this.onEquals(); return;
      case 'ON/AC': this.allClear(); return;
      case 'C.CE': this.clearEntry(); return;
      case '▶': this.backspace(); return;
      case '+/-': this.toggleSign(); return;
      case '√': this.sqrt(); return;
      case '%': this.percent(); return;
      case 'M+': this.memoryAdd(); return;
      case 'M-': this.memorySub(); return;
      case 'MC': this.memoryClear(); return;
      case 'MR': this.memoryRecall(); return;
      case 'MRC': this.memoryRecallClearToggle(); return;
      case 'GT': this.getGrandTotal(); return;
      case '00': this.inputDigit('00'); return;
      // autres touches laissées en placeholder
      default: return;
      }
  }

  private inputDigit(d: string) {
    if (this.state.waitingForOperand) {
      // démarrer une nouvelle saisie : le digit remplace l'affichage
      this.state.display = (d === '00' ? '0' : d);
      this.state.waitingForOperand = false;
      return;
    }
    if (d === '00') {
      if (this.state.display === '0') return;
      this.state.display = this.state.display + '00';
      return;
    }
    this.state.display = (this.state.display === '0') ? d : this.state.display + d;
  }

  private inputDot() {
    if (this.state.waitingForOperand) {
      this.state.display = '0.';
      this.state.waitingForOperand = false;
      return;
    }
    if (!this.state.display.includes('.')) {
      this.state.display = this.state.display + '.';
    }
  }

  private clearEntry() {
    this.state.display = '0';
    this.state.waitingForOperand = true;
  }

  private allClear() {
    this.state = this.createInitialState();
    this._solarDisplay = '0000';
  }

  private toggleSign() {
    if (this.state.display === '0') return;
    this.state.display = this.state.display.startsWith('-') ? this.state.display.slice(1) : '-' + this.state.display;
  }

  private backspace() {
    if (this.state.waitingForOperand) return;
    const s = this.state.display;
    if (s.length <= 1 || (s.length === 2 && s.startsWith('-'))) {
      this.state.display = '0';
    } else {
      this.state.display = s.slice(0, -1);
    }
  }

  private performOperator(op: string) {
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
    this.state.operator = (op === '=' ? null : op);
    this.state.waitingForOperand = true;
  }

  private calculate(a: number, b: number, op: string): number {
    switch (op) {
      case '+': return a + b;
      case '−': case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
      default: return b;
    }
  }

private percent() {
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

private sqrt() {
    const v = parseFloat(this.state.display);
    if (v < 0) { this.state.display = 'Erreur'; return; }
    this.state.display = this.formatResult(Math.sqrt(v));
    this.state.waitingForOperand = true;
  }

  // simple exponential e^x
  private exp() {
    const v = parseFloat(this.state.display);
    this.state.display = this.formatResult(Math.exp(v));
    this.state.waitingForOperand = true;
  }

  // MU: placeholder behaviour — par défaut rien; tu peux remplacer par ta logique commerciale
  private placeholderMU() {
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
  private onOperator(op: string) {
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
  private onEquals() {
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
  private memoryAdd() { this.state.memory += parseFloat(this.state.display); this.state.lastMemoryRecall = false; }
  private memorySub() { this.state.memory -= parseFloat(this.state.display); this.state.lastMemoryRecall = false; }
  private memoryClear() { this.state.memory = 0; this.state.lastMemoryRecall = false; }
  private memoryRecall() { this.state.display = this.formatResult(this.state.memory); this.state.lastMemoryRecall = true; this.state.waitingForOperand = true; }
  private memoryRecallClearToggle() { if (this.state.lastMemoryRecall) { this.memoryClear(); } else { this.memoryRecall(); } }
  private getGrandTotal() { this.state.display = this.formatResult(this.state.gtAccumulator); this.state.waitingForOperand = true; }

  private formatResult(value: number): string {
      if (!isFinite(value)) return 'Erreur';
      const s = Number.parseFloat(String(value)).toPrecision(12);
      return parseFloat(s).toString();
  }
  
  public handleComputerKeyboard(event: KeyboardEvent): void {
    // Ne fait rien si la calculatrice n'est pas active
    if (!this._isActive.value) {
      return;
    }

    const key = event.key;
    
    // Mapper les touches du clavier aux touches de la calculatrice
    const keyMap: {[key: string]: string} = {
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

}
