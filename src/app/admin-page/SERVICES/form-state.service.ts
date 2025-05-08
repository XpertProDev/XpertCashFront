// form-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormStateService {
  private formState: any;

  saveState(state: any) {
    this.formState = { ...state }; // Clonage profond si nécessaire
  }

  getState() {
    return this.formState;
  }

  clearState() {
    this.formState = null;
  }
}