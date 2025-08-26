import { Injectable } from '@angular/core';

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

  get display(): string {
    return this.state.display;
  }

  /** Public single entry point for UI */
  handleKey(key: string) {
    // normalize
    if (!key) return;
    switch (key) {
      // digits
      case '00': return this.inputDigit('00');
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9':
        return this.inputDigit(key);
      case '.': return this.inputDot();

      // operators
      case '+': case '−': case '-': case '×': case '*': case '÷': case '/':
      case '=':
        return this.performOperator(key === '*' ? '×' : key === '/' ? '÷' : key);

      // functions
      case 'ON/AC': return this.allClear();
      case 'C.CE': return this.clearEntry();
      case '▶': return this.backspace();
      case '+/-': return this.toggleSign();
      case '√': return this.sqrt();
      case '%': return this.percent();
      case 'M+': return this.memoryAdd();
      case 'M-': return this.memorySub();
      case 'MC': return this.memoryClear();
      case 'MR': return this.memoryRecall();
      case 'MRC': return this.memoryRecallClearToggle();
      case 'GT': return this.getGrandTotal();
      case 'MU': return this.placeholderMU();
      case 'Ex': return this.exp(); // exponential (e^x)
      case '=': return this.performOperator('=');
      default:
        return; // ignore unknown
    }
  }

  private inputDigit(d: string) {
    if (this.state.waitingForOperand) {
      // start new entry
      this.state.display = (d === '00' ? '0' : d);
      this.state.waitingForOperand = false;
    } else {
      if (d === '00') {
        if (this.state.display === '0') {
          // keep '0'
        } else {
          this.state.display = this.state.display + '00';
        }
      } else {
        this.state.display = (this.state.display === '0') ? d : this.state.display + d;
      }
    }
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
  }

  private toggleSign() {
    if (this.state.display === '0') return;
    this.state.display = this.state.display.startsWith('-')
      ? this.state.display.slice(1)
      : '-' + this.state.display;
    this.state.waitingForOperand = false;
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

  private calculate(a: number, b: number, operator: string): number {
    switch (operator) {
      case '+': return a + b;
      case '−': case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
      default: return b;
    }
  }

  private percent() {
    const current = parseFloat(this.state.display);
    if (this.state.operand != null) {
      const res = this.state.operand * current / 100;
      this.state.display = this.formatResult(res);
    } else {
      this.state.display = this.formatResult(current / 100);
    }
    this.state.waitingForOperand = true;
  }

  private sqrt() {
    const v = parseFloat(this.state.display);
    if (v < 0) {
      this.state.display = 'Erreur';
    } else {
      this.state.display = this.formatResult(Math.sqrt(v));
      this.state.waitingForOperand = true;
    }
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

  // Memory functions
  private memoryAdd() {
    this.state.memory += parseFloat(this.state.display);
    this.state.lastMemoryRecall = false;
  }

  private memorySub() {
    this.state.memory -= parseFloat(this.state.display);
    this.state.lastMemoryRecall = false;
  }

  private memoryRecall() {
    this.state.display = this.formatResult(this.state.memory);
    this.state.lastMemoryRecall = true;
    this.state.waitingForOperand = true;
  }

  private memoryClear() {
    this.state.memory = 0;
    this.state.lastMemoryRecall = false;
  }

  /**
   * MRC: si précédemment on a déjà fait MR -> MC (double usage).
   * Sinon MR.
   */
  private memoryRecallClearToggle() {
    if (this.state.lastMemoryRecall) {
      this.memoryClear();
    } else {
      this.memoryRecall();
    }
  }

  private getGrandTotal() {
    // affiche l'accumulateur GT (ne le remet pas à zéro automatiquement)
    this.state.display = this.formatResult(this.state.gtAccumulator);
    this.state.waitingForOperand = true;
  }

  /** small helper to keep floats readable */
  private formatResult(value: number): string {
    if (!isFinite(value)) return 'Erreur';
    // limite raisonnable de précision
    const s = Number.parseFloat(String(value)).toPrecision(12);
    // retire les zéros superflus
    return parseFloat(s).toString();
  }
}
