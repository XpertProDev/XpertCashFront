import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../SERVICES/produit.service';
import { SharedDataService } from '../SERVICES/shared-data.service';
import { UsersService } from '../SERVICES/users.service';

@Component({
  selector: 'app-add-stock-ajustement',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-stock-ajustement.component.html',
  styleUrl: './add-stock-ajustement.component.scss'
})
export class AddStockAjustementComponent {

  // Nom boutique 
  boutiqueName: string = '';
  selectedAction: string = 'ajouter';

  // Contructor
  constructor(
      private sharedDataService: SharedDataService,
      private produitService: ProduitService,
      private fb: FormBuilder,
      private router: Router,
      private usersService: UsersService,
  ) {}

  ngOnInit(): void  {
    this.getBoutiqueName();
    this.getPartageInfoUser();
  }

  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
        if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
          console.log(userInfo.boutiques[0]);
  
          this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
          this.boutiqueName = 'Aucune boutique';
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }

  getPartageInfoUser() {
     // Partage de donner de user
     this.sharedDataService.boutiqueName$.subscribe(name => {
      console.log("AddProduitComponent - Nom boutique récupéré :", name);
      this.boutiqueName = name;
    });
  }
}
