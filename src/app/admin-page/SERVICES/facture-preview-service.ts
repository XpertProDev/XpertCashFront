// src/app/services/facture-preview.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FactureProForma } from '../MODELS/FactureProForma.model';

@Injectable({ providedIn: 'root' })
export class FacturePreviewService {
  private previewSubject = new BehaviorSubject<FactureProForma | null>(null);

  setPreview(data: FactureProForma) {
    this.previewSubject.next(data);
  }

  getPreview(): Observable<FactureProForma | null> {
    return this.previewSubject.asObservable();
  }
}
