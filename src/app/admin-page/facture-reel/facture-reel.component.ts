import { Component, OnInit } from '@angular/core';
import { FactureReelService } from '../SERVICES/facturereel-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-facture-reel',
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  templateUrl: './facture-reel.component.html',
  styleUrls: ['./facture-reel.component.scss']
})
export class FactureReelComponent implements OnInit {
  entrepriseId: number = 0;
  factureReel: any[] = [];

  constructor(private factureReelService: FactureReelService) {}

  ngOnInit(): void {
    this.getAllFactureReelOfEntreprise(this.entrepriseId);
  }

  getAllFactureReelOfEntreprise(entrepriseId: number): void {
    this.factureReelService.getAlFactproreelOfEntreprise(entrepriseId).subscribe(
      (response: any[]) => {
        this.factureReel = response;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des factures réelles:', error);
      }
    );
  }
}
