import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Fournisseurs } from '../../MODELS/fournisseurs-model';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from '../../SERVICES/fournisseur-service';

@Component({
  selector: 'app-detail-edit-fournisseur',
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  templateUrl: './detail-edit-fournisseur.component.html',
  styleUrl: './detail-edit-fournisseur.component.scss'
})
export class DetailEditFournisseurComponent {

  fournisseur!: Fournisseurs;

    constructor(
      private route: ActivatedRoute,
      private fournisseurService: FournisseurService
    ) {}
  
    ngOnInit(): void {
      this.loadFournisseur();
    }
  
    private loadFournisseur(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if (!id) {
        console.error('ID du fournisseur non valide');
        return;
      }
  
      this.fournisseurService.getFournisseurById(id).subscribe({
        next: (data) => this.fournisseur = data,
        error: (err) => console.error('Erreur de chargement du fournisseur', err)
      });
    }

}
 