import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VenteResponse } from 'src/app/admin-page/MODELS/VenteModel/vente-model';
import { VenteService } from 'src/app/admin-page/SERVICES/VenteService/vente-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pos-paiement',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './pos-paiement.component.html',
  styleUrl: './pos-paiement.component.scss'
})
export class PosPaiementComponent {
  private imgUrl = environment.imgUrl;
  vente?: VenteResponse | null = null;
  paymentAmount: number = 0;
  changeDue: number = 0;
  paymentMethod: string = 'Espèces';
  loading = false;
  errorMessage: string | null = null;

  @ViewChild('receipt', { static: false }) receiptEl?: ElementRef;

  constructor(
    private router: Router,
    private venteService: VenteService
  ) {}

  ngOnInit(): void {
    // 1) Try to get the sale from navigation state
    const state = (history && history.state) ? history.state : {};
    if (state && state.vente) {
      this.vente = state.vente as VenteResponse;
      this.paymentAmount = state.paymentAmount ?? (this.vente?.montantPaye ?? 0);
      this.changeDue = state.changeDue ?? (this.paymentAmount - (this.vente?.montantTotal ?? 0));
      this.paymentMethod = state.paymentMethod ?? (this.vente?.modePaiement ?? this.paymentMethod);
      return;
    }

    // 2) Fallback: if no vente object in state but maybe venteId passed
    if (state && state.venteId) {
      this.loadVenteById(state.venteId);
      return;
    }

    // 3) Nothing in history state — redirect to accueil vente
    // (préserve l'expérience au cas où l'utilisateur a ouvert la page directement)
    // tu peux aussi afficher un message
    // this.router.navigate(['/pos-accueil']);
  }

  private loadVenteById(id: number) {
    this.loading = true;
    this.venteService.getVenteById(id).subscribe({
      next: (res) => {
        this.vente = res;
        this.paymentAmount = res.montantPaye ?? res.montantTotal ?? 0;
        this.changeDue = this.paymentAmount - (res.montantTotal ?? 0);
        this.paymentMethod = res.modePaiement ?? this.paymentMethod;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Erreur chargement vente', err);
        this.errorMessage = err?.error?.message || err?.message || 'Erreur chargement vente';
        this.loading = false;
      }
    });
  }

  // Impression : cloner le contenu et ouvrir une nouvelle fenêtre propre
  printReceipt() {
    if (!this.receiptEl) {
      window.print();
      return;
    }

    const receiptHtml = this.receiptEl.nativeElement.innerHTML;
    const win = window.open('', '_blank', 'width=800,height=900');
    if (!win) {
      alert('Impossible d\'ouvrir la fenêtre d\'impression — autorisez les popups.');
      return;
    }

    // Basic inline styles — adapte si tu veux exporter ton CSS complet
    const styles = `
      <style>
        body { font-family: Arial, sans-serif; padding: 16px; color: #111; }
        .receipt { max-width: 720px; margin: 0 auto; }
        .receipt-header { display:flex; align-items:center; gap:12px; }
        .receipt-header .logo { width:80px; height:auto; }
        .items-list { list-style:none; padding:0; margin:12px 0; }
        .items-list .item { display:flex; justify-content:space-between; gap:12px; padding:8px 0; border-bottom: 1px dashed #e0e0e0; }
        .items-list .desc { flex:1; margin-left:8px; }
        .totals .line { display:flex; justify-content:space-between; padding:6px 0; }
        .totals .total-line { font-weight:700; font-size:1.05rem; }
        .payments-breakdown .line { display:flex; justify-content:space-between; padding:4px 0; }
      </style>
    `;

    win.document.open();
    win.document.write('<html><head><title>Reçu</title>' + styles + '</head><body>');
    win.document.write('<div class="receipt">');
    win.document.write(receiptHtml);
    win.document.write('</div>');
    win.document.write('</body></html>');
    win.document.close();

    // Delay un petit peu pour laisser le newWindow render les styles
    setTimeout(() => {
      win.focus();
      win.print();
      // Optionnel : fermer la fenêtre après impression
      // win.close();
    }, 300);
  }

  // Retourner à l'accueil POS / nouvelle commande
  newOrder() {
    // Navigate back to the POS page (ajuste la route si nécessaire)
    this.router.navigate(['/pos-accueil']);
  }

  // Modifier le paiement: renvoyer vers la page de vente en gardant le state
  modifyPayment() {
    // Si tu veux renvoyer les infos actuelles pour éditer, tu peux passer state
    this.router.navigate(['/pos-accueil'], { state: { editVente: this.vente } });
  }

  // Utility pour afficher une ligne produit (sécurité si vente undefined)
  getLignes() {
    return this.vente?.lignes ?? [];
  }
}
