// commande-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Commande {
  id: string;
  cart: Map<number, number>;
  createdAt: Date;
  totalItems?: number;
  totalAmount?: number;
}

@Injectable({ providedIn: 'root' })
export class CommandeStateService {
  // Correction: Changer le type de commandesMap
  private commandesMap = new Map<string, Commande>();
  private commandesIds: string[] = ['001'];
  private activeCommandeId = new BehaviorSubject<string>('001');
  
  activeCommandeId$ = this.activeCommandeId.asObservable();

  private commandesIdsSubject = new BehaviorSubject<string[]>(this.commandesIds);
  commandesIds$ = this.commandesIdsSubject.asObservable();

  constructor() {
    this.commandesMap.set('001', { 
      id: '001', 
      cart: new Map<number, number>(),
      createdAt: new Date()
    });
  }

  getCommandeDetails(id: string): Commande | undefined {
    return this.commandesMap.get(id);
  }

  updateCommandeTotals(id: string, totalItems: number, totalAmount: number) {
    const commande = this.commandesMap.get(id);
    if (commande) {
      commande.totalItems = totalItems;
      commande.totalAmount = totalAmount;
      this.commandesMap.set(id, commande);
    }
  }

  setActiveCommande(id: string) {
    if (!this.commandesMap.has(id)) {
      this.commandesMap.set(id, { 
        id, 
        cart: new Map<number, number>(),
        createdAt: new Date()
      });
      this.commandesIds.push(id);
    }
    this.activeCommandeId.next(id);
  }

  // Correction: Retourner le cart de la commande
  getActiveCart() {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    return commande ? commande.cart : new Map<number, number>();
  }

  updateActiveCart(cart: Map<number, number>) {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    if (commande) {
      commande.cart = new Map(cart);
      this.commandesMap.set(activeId, commande);
    }
  }

  getAllCommandesIds() {
    return [...this.commandesIds];
  }

  addNewCommande() {
    const newId = (this.commandesIds.length + 1).toString().padStart(3, '0');
    const newCommande: Commande = {
      id: newId,
      cart: new Map<number, number>(),
      createdAt: new Date()
    };
    this.commandesMap.set(newId, newCommande);
    this.commandesIds.push(newId);
    this.commandesIdsSubject.next([...this.commandesIds]); // Notifier du changement
    return newId;
  }

  // Ajout de la méthode removeCommande
  removeCommande(id: string): void {
    if (id === '001') {
      // Ne pas supprimer la commande par défaut
      return;
    }
    this.commandesMap.delete(id);
    const index = this.commandesIds.indexOf(id);
    if (index !== -1) {
      this.commandesIds.splice(index, 1);
    }
    // Si on supprime la commande active, on active la première commande
    if (this.activeCommandeId.getValue() === id) {
      this.activeCommandeId.next(this.commandesIds[0] || '001');
    }
    this.commandesIdsSubject.next([...this.commandesIds]);
  }
  
  // Ajout d'une méthode pour obtenir l'ID actif
  getActiveCommandeId(): string {
    return this.activeCommandeId.getValue();
  }
}