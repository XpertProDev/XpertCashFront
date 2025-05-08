// form-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormStateService {
  private formState: any;

  saveState(state: any) {
    this.formState = state;
  }

  getState() {
    return this.formState;
  }

  clearState() {
    this.formState = null;
  }
}