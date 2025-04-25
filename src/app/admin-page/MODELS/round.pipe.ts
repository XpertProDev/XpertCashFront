import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
    transform(value: number, decimals: number = 2, mode: 'round'|'floor'|'ceil' = 'round'): number {
        const factor = Math.pow(10, decimals);
        
        switch(mode) {
          case 'round': return Math.round(value * factor) / factor;
          case 'floor': return Math.floor(value * factor) / factor;
          case 'ceil': return Math.ceil(value * factor) / factor;
          default: return value;
        }
    }
}