import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enLettres' })
export class EnLettresPipe implements PipeTransform {
  private unite = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
  private dizaine = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
  private dizaineSpecial = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];

  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    const n = Math.floor(value);
    const words = this.numberToWords(n) + ' Francs CFA';
    // Mettre en majuscule la première lettre
    return words.charAt(0).toUpperCase() + words.slice(1);
  }

  private numberToWords(n: number): string {
    if (n < 10) {
      return this.unite[n];
    }
    if (n < 17) {
      return this.dizaineSpecial[n - 10];
    }
    if (n < 20) {
      return 'dix-' + this.unite[n - 10];
    }
    if (n < 70) {
      const d = Math.floor(n / 10);
      const reste = n % 10;
      return this.dizaine[d] + (reste ? '-' + this.unite[reste] : '');
    }
    if (n < 80) {
      return 'soixante-' + this.numberToWords(n - 60);
    }
    if (n < 100) {
      return 'quatre-vingt' + (n % 20 ? '-' + this.numberToWords(n % 20) : '');
    }
    if (n < 1000) {
      const c = Math.floor(n / 100);
      const reste = n % 100;
      return (c > 1 ? this.unite[c] + '-cent' : 'cent') + (reste ? '-' + this.numberToWords(reste) : '');
    }
    if (n < 1000000) {
      const m = Math.floor(n / 1000);
      const reste = n % 1000;
      return (m > 1 ? this.numberToWords(m) + ' mille' : 'mille') + (reste ? ' ' + this.numberToWords(reste) : '');
    }
    if (n < 1000000000) {
        const millions = Math.floor(n / 1000000);
        const reste = n % 1000000;
        return (millions > 1 ? this.numberToWords(millions) + ' millions' : 'un million') +
          (reste ? ' ' + this.numberToWords(reste) : '');
    }
    return 'nombre trop grand';
  }
}
