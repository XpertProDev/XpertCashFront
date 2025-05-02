// fournisseurs.component.ts
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ProduitService } from '../SERVICES/produit.service';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { StockService } from '../SERVICES/stocks.service';
import { TransfertService } from '../SERVICES/transfert-service';
import { Fournisseurs } from '../MODELS/fournisseurs-model';

@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  
  fournisseurs: Fournisseurs[] = [];


    constructor(
        private produitService: ProduitService,
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService,
        private stockService: StockService,
        private cdRef: ChangeDetectorRef,
        private transfertService: TransfertService,
    ) {}
    

  ngOnInit(): void  {;
    this.loadFournisseurs();
  }

   loadFournisseurs(): void {
      this.produitService.getFournisseurs().subscribe({
        next: (fournisseurs: Fournisseurs[]) => {
          this.fournisseurs = fournisseurs;
          console.log('Fournisseurs:', this.fournisseurs);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des fournisseurs", err);
          this.fournisseurs = [];
        }
      });
    }
  
  
}