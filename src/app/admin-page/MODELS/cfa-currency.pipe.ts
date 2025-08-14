// creez un fichier : cfa-currency.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfaCurrency'
})
export class CfaCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || isNaN(value)) {
      return 'N/A';
    }
    const hasDecimals = value % 1 !== 0;
      const formattedValue = value
      .toFixed(hasDecimals ? 2 : 0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${formattedValue} FCFA`;
  }
}