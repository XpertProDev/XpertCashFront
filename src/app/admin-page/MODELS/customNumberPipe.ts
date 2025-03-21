import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    // Remplacer les milliers par des points
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
