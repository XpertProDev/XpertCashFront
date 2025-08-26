import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private memory: number = 0;
  private currentValue: number = 0;
  private previousValue: number = 0;
  private operation: string = '';
  private waitingForNewValue: boolean = false;

  // Méthodes pour les opérations de base
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division par zéro impossible');
    }
    return a / b;
  }

  // Fonctions spéciales
  squareRoot(value: number): number {
    if (value < 0) {
      throw new Error('Racine carrée d\'un nombre négatif impossible');
    }
    return Math.sqrt(value);
  }

  percentage(value: number, base: number): number {
    return (base * value) / 100;
  }

  toggleSign(value: number): number {
    return -value;
  }

  // Fonctions mémoire
  memoryClear(): void {
    this.memory = 0;
  }

  memoryRecall(): number {
    return this.memory;
  }

  memoryAdd(value: number): void {
    this.memory += value;
  }

  memorySubtract(value: number): void {
    this.memory -= value;
  }

  // Calcul des opérations
  calculate(previousValue: number, currentValue: number, operation: string): number {
    switch (operation) {
      case '+':
        return this.add(previousValue, currentValue);
      case '-':
        return this.subtract(previousValue, currentValue);
      case '×':
        return this.multiply(previousValue, currentValue);
      case '÷':
        return this.divide(previousValue, currentValue);
      default:
        return currentValue;
    }
  }

  // Formatage du nombre pour l'affichage
  formatDisplay(value: number): string {
    // Limite à 12 chiffres comme sur la vraie calculatrice
    const str = value.toString();
    if (str.length > 12) {
      // Si le nombre est trop grand, utiliser la notation scientifique
      return value.toExponential(5);
    }
    return str;
  }
}