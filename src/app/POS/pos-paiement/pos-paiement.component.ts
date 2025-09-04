import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VenteResponse } from 'src/app/admin-page/MODELS/VenteModel/vente-model';
import { EntrepriseService } from 'src/app/admin-page/SERVICES/entreprise-service';
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
  logo?: string | null = null;
  fallbackLogo = 'assets/logo/reçu.png';
  vente?: VenteResponse | null = null;
  paymentAmount: number = 0;
  changeDue: number = 0;
  paymentMethod: string = 'Espèces';
  loading = false;
  errorMessage: string | null = null;

  @ViewChild('receipt', { static: false }) receiptEl?: ElementRef;

  showModifyModal = false;
  tempPaymentAmount: number = 0;
  tempPaymentMethod: string = 'Espèces';

  constructor(
    private router: Router,
    private venteService: VenteService,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    // 1) Lecture rapide depuis localStorage si tu as déjà stocké l'entreprise
    const stored = localStorage.getItem('entreprise');
    if (stored) {
      try {
        const ent = JSON.parse(stored);
        // si ent.logo contient le path relatif côté backend, on le préfixe par imgUrl
        this.logo = ent.logo ? this.ensureAbsoluteLogoUrl(ent.logo) : null;
      } catch (e) {
        this.logo = null;
      }
    }

    // 2) Option robuste : demander l'info à l'API si non trouvée localement
    if (!this.logo) {
      this.entrepriseService.getEntrepriseInfo().subscribe({
        next: ent => {
          this.logo = ent.logo ? this.ensureAbsoluteLogoUrl(ent.logo) : null;
          // optional: sauvegarder pour réutiliser plus tard
          try { localStorage.setItem('entreprise', JSON.stringify(ent)); } catch {}
        },
        error: err => {
          console.warn('Impossible de charger info entreprise pour logo', err);
          this.logo = null;
        }
      });
    }

    // ton code existant: récupérer state vente, etc.
    const state = (history && history.state) ? history.state : {};
    if (state && state.vente) {
      this.vente = state.vente as VenteResponse;
      this.paymentAmount = state.paymentAmount ?? (this.vente?.montantPaye ?? 0);
      this.changeDue = state.changeDue ?? (this.paymentAmount - (this.vente?.montantTotal ?? 0));
      this.paymentMethod = state.paymentMethod ?? (this.vente?.modePaiement ?? this.paymentMethod);
      return;
    }
    if (state && state.venteId) {
      this.loadVenteById(state.venteId);
      return;
    }
  }

  // transforme un path relatif en url absolue si nécessaire
  private ensureAbsoluteLogoUrl(path: string): string {
    if (!path) return this.fallbackLogo;
    if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) {
      return path;
    }
    // si path contient déjà la base, évite la double concaténation
    if (this.imgUrl && path.startsWith(this.imgUrl)) return path;
    // s'assurer qu'il y a bien un slash
    const prefix = this.imgUrl.endsWith('/') ? this.imgUrl.slice(0, -1) : this.imgUrl;
    const suffix = path.startsWith('/') ? path : `/${path}`;
    return prefix + suffix;
  }

  // handler pour fallback si image ne se charge pas
  onLogoError() {
    this.logo = this.fallbackLogo;
  }

  private loadVenteById(id: number) {
    this.loading = true;
    this.venteService.getVenteById(id).subscribe({
      //console log des info dune vente
      
      next: (res) => {
        console.log('Réponse API:', res);
        this.vente = res;
        this.paymentAmount = res.montantPaye ?? res.montantTotal ?? 0;
        this.changeDue = this.paymentAmount - (res.montantTotal ?? 0);
        this.paymentMethod = res.modePaiement ?? this.paymentMethod;
        this.loading = false;
        console.log('Vente chargée:', res);
      },
      error: (err: any) => {
        console.error('Erreur chargement vente', err);
        this.errorMessage = err?.error?.message || err?.message || 'Erreur chargement vente';
        this.loading = false;
      }
    });
  }

  // Impression : cloner le contenu et ouvrir une nouvelle fenêtre propre
  impressionReceipt() {
    if (!this.receiptEl) return;

    // Récupérer la base URL pour les chemins absolus
    const baseUrl = window.location.origin;
    let printContent = this.receiptEl.nativeElement.innerHTML;
    
    // Corriger les chemins relatifs des assets
    printContent = printContent.replace(/src="assets\//g, `src="${baseUrl}/assets/`);

    const printWindow = window.open('', '_blank', 'left=0,top=0,width=380,height=500,toolbar=0,scrollbars=0,status=0');
    
    printWindow?.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Reçu de paiement</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body { 
            padding: 10px; 
            background: white;
          }
          .paiement_right {
            width: 100%
            display: flex !important;
            align-items: center !important;
            justify-content: center;
          }
          .receipt {
            width: 100% !important;
            min-width: 350px !important; /* Largeur augmentée */
            min-height: 0 !important;
            margin: 0 auto;
            padding: 15px !important;
            box-shadow: none !important;
          }
          .no-print { display: none !important; }
          .paleft { padding-left: 5px !important; }
          /* Centrage du header */
          .receipt-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 15px !important;
          }
          .receipt-header .logo {
            max-width: 100px !important; /* Taille originale */
            margin-bottom: 10px !important;
          }
          .ticket-info div {
            font-size: 10px !important;
            line-height: 1.4 !important; 
            margin-top: 4px !important; /* Espacement réduit */
          }
          
          .items-list { 
            margin-bottom: 10px !important; 
            width: 100%;
          }
          .item .qty {
              width: 8px !important;
            }
          .item {
            display: flex !important;
            align-items: flex-start !important;
            margin-bottom: 8px !important;
          }
          .divider {
            border-top: 1px dotted #000 !important;
            margin: 8px 0 !important;
          }
          .line span {
            font-size: 11px !important; /* Taille de police augmentée */
          }
          
          /* Centrage du footer */
          .receipt-footer { 
            position: relative !important; 
            bottom: 0 !important;
            margin-top: 20px !important;
            font-size: 10px !important;
            text-align: center !important;
            width: 100%;
          }
          
          .qty, .name, .total {
            font-size: 10px !important; /* Taille de police augmentée */
          }
          .unit-price {
            font-size: 10px !important; /* Taille de police augmentée */
          }
          
          @page { 
            size: auto; 
            margin: 0; 
          }
          @media print {
            body { padding: 0 !important; }
          }
        </style>
      </head>
      <body>
        ${printContent}
        <div class="no-print" style="text-align:center;margin-top:20px;">
          <button onclick="window.print()" style="padding:8px 16px;background:#1976D2;color:white;border:none;border-radius:4px;cursor:pointer;">
            Imprimer
          </button>
          <button onclick="window.close()" style="padding:8px 16px;margin-left:10px;background:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;">
            Fermer
          </button>
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() {
              window.close();
            }, 1000);
          };
        </script>
      </body>
      </html>
    `);
    printWindow?.document.close();
  }

  // Retourner à l'accueil POS / nouvelle commande
  newOrder() {
    // Navigate back to the POS page (ajuste la route si nécessaire)
    this.router.navigate(['/pos-accueil']);
  }

  // Utility pour afficher une ligne produit (sécurité si vente undefined)
  getLignes() {
    return this.vente?.lignes ?? [];
  }

  modifyPaymentRecu() {
    this.tempPaymentAmount = this.paymentAmount;
    this.tempPaymentMethod = this.paymentMethod;
    this.showModifyModal = true;
  }

  updatePayment() {
    this.paymentAmount = this.tempPaymentAmount;
    this.paymentMethod = this.tempPaymentMethod;
    
    // Calculer le changement ou le reste à payer
    const total = this.vente?.montantTotal ?? 0;
    this.changeDue = this.paymentAmount - total;

    //numeroFacture
    
    this.showModifyModal = false;
    
    // Réimprimer automatiquement
    setTimeout(() => {
      this.impressionReceipt();
    }, 100);
  }

  cancelModify() {
    this.showModifyModal = false;
  }

  calculateChange() {
    // Cette méthode est appelée automatiquement lors de la saisie
    const total = this.vente?.montantTotal ?? 0;
    this.changeDue = this.tempPaymentAmount - total;
  }

  // getPaymentStatus(): string {
  //   if (!this.vente) return '';
  //   return this.paymentAmount >= this.vente.montantTotal ? 'Monnaie' : 'Reste à payer';
  // }
  // 
  //
}
