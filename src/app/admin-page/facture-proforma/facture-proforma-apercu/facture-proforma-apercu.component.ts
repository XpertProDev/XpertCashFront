import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';
import { FormStateService } from '../../SERVICES/form-state.service';

@Component({
  selector: 'app-facture-proforma-apercu',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe],
  templateUrl: './facture-proforma-apercu.component.html',
  styleUrls: ['./facture-proforma-apercu.component.scss']
})
export class FactureProformaApercuComponent implements OnInit {
  facture: FactureProForma | null = null;

  constructor(
    private previewService: FacturePreviewService,
    private factureService: FactureProFormaService, // Utiliser le bon nom
    private formStateService: FormStateService, // Ajouter le service
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getFacturePreview();
  }

  getFacturePreview () {
    this.previewService.getPreview().subscribe(data => {
      if (!data) {
        // Si pas de données, on revient en arrière
        this.router.navigate(['/addfacture-proforma']);
      } else {
        this.facture = data;
      }
    });
  }

  onCreate(): void {
    if (!this.facture) return;

    // Préparer le payload comme dans AddfactureProformaComponent
    const dto = {
      description: this.facture.description,
      client: this.facture.client ? { id: this.facture.client.id } : undefined,
      entrepriseClient: this.facture.entrepriseClient
        ? { id: this.facture.entrepriseClient.id }
        : undefined,
      lignesFacture: this.facture.lignesFacture.map(l => ({
        produit: { id: l.produit.id },
        quantite: l.quantite,
        ligneDescription: l.ligneDescription,
        prixUnitaire: l.prixUnitaire
      }))
    };

    this.factureService.creerFactureProforma(
      dto, // Utiliser le dto créé
      this.facture.remise ?? undefined, // Prendre la remise depuis la preview
      this.facture.tva, // Prendre la TVA depuis la preview
      !!this.facture.remise || this.facture.tva
    ).subscribe({
      next: (res) => {
        this.formStateService.clearState();
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => console.error('Erreur création facture :', err)
    });
  }

  navigateBack() {
    this.router.navigate(['/addfacture-proforma']);
  }

  
}