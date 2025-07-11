import { Directive, HostListener, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberFormatDirective),
    multi: true
  }]
})
export class NumberFormatDirective implements ControlValueAccessor {
  private onChange!: (value: number|null) => void;
  private onTouched!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Quand Angular écrit dans le modèle (ex. reset du form)
  writeValue(value: number|null): void {
    const formatted = this.format(value);
    this.renderer.setProperty(this.el.nativeElement, 'value', formatted);
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    // 1) Nettoyage : chiffres et séparateurs
    let raw = value.replace(/[^\d.,]/g, '').replace(',', '.');
    // 2) Un seul point
    const parts = raw.split('.');
    if (parts.length > 2) raw = parts[0] + '.' + parts.slice(1).join('');
    // 3) Parse
    const num = parseFloat(raw);
    // 4) Émettre la valeur float (ou null)
    this.onChange(!isNaN(num) ? num : null);
    // 5) Mettre à jour l’affichage formaté
    const [intP, fracP] = raw.split('.');
    const fmtInt = intP.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const display = fracP != null ? `${fmtInt}.${fracP}` : fmtInt;
    this.renderer.setProperty(this.el.nativeElement, 'value', display);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  private format(value: number|null): string {
    if (value == null || isNaN(value)) return '';
    const s = value.toString().split('.');
    s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return s[1] ? `${s[0]}.${s[1]}` : s[0];
  }
}
