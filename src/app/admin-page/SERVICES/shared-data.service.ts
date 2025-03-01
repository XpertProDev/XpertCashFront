import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class SharedDataService {

    private initialBoutiqueName = localStorage.getItem('boutiqueName') || '';
    private boutiqueNameSource = new BehaviorSubject<string>(this.initialBoutiqueName);
    boutiqueName$ = this.boutiqueNameSource.asObservable();

    setBoutiqueName(name: string): void {
        localStorage.setItem('boutiqueName', name);
        this.boutiqueNameSource.next(name);
        console.log("SharedDataService - Boutique mise à jour :", name);
    }

    // private boutiqueNameSource = new BehaviorSubject<string>('');
    // boutiqueName$ = this.boutiqueNameSource.asObservable();
  
    // setBoutiqueName(name: string): void {
    //   this.boutiqueNameSource.next(name);
    //   console.log("SharedDataService - Boutique mise à jour :", name);
    // }
}