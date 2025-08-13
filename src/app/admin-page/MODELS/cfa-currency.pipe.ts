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
    
    // Formater le nombre avec séparateurs de milliers
    const formattedValue = new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
    
    return `${formattedValue} FCFA`;
  }
}