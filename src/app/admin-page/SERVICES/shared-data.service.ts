import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // Récupérer le nom de la boutique depuis le localStorage ou utiliser "Boutique 1" par défaut
  private initialBoutiqueName = localStorage.getItem('boutiqueName') || 'Boutique 1';
  private boutiqueNameSource = new BehaviorSubject<string>(this.initialBoutiqueName);
  boutiqueName$ = this.boutiqueNameSource.asObservable();

  // Récupérer l'ID de la boutique depuis le localStorage ou utiliser 1 par défaut
  private initialBoutiqueId = localStorage.getItem('boutiqueId') ? Number(localStorage.getItem('boutiqueId')) : 1;
  private boutiqueIdSource = new BehaviorSubject<number>(this.initialBoutiqueId);
  boutiqueId$ = this.boutiqueIdSource.asObservable();

  setBoutiqueName(name: string): void {
    localStorage.setItem('boutiqueName', name);
    this.boutiqueNameSource.next(name);
    console.log("SharedDataService - Boutique (name) mise à jour :", name);
  }

  setBoutiqueId(id: number): void {
    localStorage.setItem('boutiqueId', id.toString());
    this.boutiqueIdSource.next(id);
    console.log("SharedDataService - Boutique (ID) mise à jour :", id);
  }
}
