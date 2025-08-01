// commande-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommandeStateService {
  private commandesMap = new Map<string, Map<number, number>>();
  private commandesIds: string[] = ['001']; // Garder un tableau séparé pour l'ordre
  private activeCommandeId = new BehaviorSubject<string>('001');
  
  activeCommandeId$ = this.activeCommandeId.asObservable();

  constructor() {
    this.commandesMap.set('001', new Map<number, number>());
  }

  setActiveCommande(id: string) {
    if (!this.commandesMap.has(id)) {
      this.commandesMap.set(id, new Map<number, number>());
      this.commandesIds.push(id);
    }
    this.activeCommandeId.next(id);
  }

  getActiveCart() {
    const activeId = this.activeCommandeId.getValue();
    return this.commandesMap.get(activeId) || new Map<number, number>();
  }

  updateActiveCart(cart: Map<number, number>) {
    const activeId = this.activeCommandeId.getValue();
    this.commandesMap.set(activeId, new Map(cart));
  }

  getAllCommandesIds() {
    return [...this.commandesIds]; // Retourne une copie du tableau
  }

  addNewCommande() {
    const newId = (this.commandesIds.length + 1).toString().padStart(3, '0');
    this.commandesMap.set(newId, new Map<number, number>());
    this.commandesIds.push(newId);
    return newId;
  }
}