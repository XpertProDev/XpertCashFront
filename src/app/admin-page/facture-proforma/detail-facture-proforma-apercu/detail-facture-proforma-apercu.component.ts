import { Component, OnInit } from '@angular/core';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { UsersService } from '../../SERVICES/users.service';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-facture-proforma-apercu',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe],
  templateUrl: './detail-facture-proforma-apercu.component.html',
  styleUrl: './detail-facture-proforma-apercu.component.scss'
})
export class DetailFactureProformaApercuComponent implements OnInit {
  facture: FactureProForma | null = null;

  nom: string | null = null;
  siege!: string;
  email!: string;
  logo: string | null = null;
  secteur!: string;
  telephone!: string;
  adresse!: string;
  nif!: string;
  banque!: string;
  nina!: string;
  pays!: string;
  rccm!: string;
  siteWeb!: string;
  signataire!: string;
  signataireNom!: string;
  tauxTva!: number;

  signaturNum: string | null = null;
  cachetNum: string | null = null;

  private apiUrl = environment.imgUrl;
  fallbackLogo = `${this.apiUrl}/defaultLogo/Votre.png`;


  constructor(
    private previewService: FacturePreviewService,
    public router: Router,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    this.getFacturePreview();
    this.getUserEntrepriseInfo();
  }

  getFacturePreview() {
    this.previewService.getPreview().subscribe(data => {
      if (!data) {
        this.router.navigate(['/facture-proforma']);
      } else {
        this.facture = data;
      }
    });
  }

  navigateBack() {
    if (this.facture?.id) {
      this.router.navigate(['/facture-proforma-details', this.facture.id]);
    } else {
      console.error('ID de la facture non disponible');
      // Optionnel : Naviguer vers une page par défaut, par exemple :
      this.router.navigate(['/facture-proforma']);
    }
  }

  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = `${this.apiUrl}${entreprise.logo}`;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;
        this.siteWeb = entreprise.siteWeb;
        this.signataire = entreprise.signataire;
        this.signataireNom = entreprise.signataireNom;
        this.tauxTva = entreprise.tauxTva;
        
        this.signaturNum = entreprise.signaturNum ? `${this.apiUrl}${entreprise.signaturNum}` : 'assets/img/sinum.png';
        this.cachetNum = entreprise.cachetNum ? `${this.apiUrl}${entreprise.cachetNum}` : 'assets/img/tampon.png';
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  getLegalInfo(): string {
    const parts = [];
    
    if (this.nina) {
      parts.push(`NINA : ${this.nina}`);
    }
    
    if (this.rccm) {
      parts.push(`RCCM : ${this.rccm}`);
    }
    
    if (this.nif) {
      parts.push(`NIF : ${this.nif}`);
    }
    
    if (this.banque) {
      parts.push(`Banque : ${this.banque}`);
    }
    
    return parts.join(' ; ');
  }

  getAddressInfo(): string {
    const adresse = this.adresse;
    const siege = this.siege;
    const pays = this.pays;
    
    if (adresse && siege && pays) {
      return `Adresse : ${adresse} / ${siege}-${pays}`;
    } else if (adresse && siege) {
      return `Adresse : ${adresse} / ${siege}`;
    } else if (adresse && pays) {
      return `Adresse : ${adresse} / ${pays}`;
    } else if (siege && pays) {
      return `Adresse : ${siege} / ${pays}`;
    } else if (adresse) {
      return `Adresse : ${adresse}`;
    } else if (siege) {
      return `Adresse : ${siege}`;
    } else if (pays) {
      return `Adresse : ${pays}`;
    }
    
    return '';
  }

  private getImageFromUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }

  async download() {

    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    // 2. Logo
    try {
      if (this.logo) {
        const imgData = this.logo.startsWith('data:image/') ? this.logo : await this.getImageFromUrl(this.logo);
        const formatMatch = imgData.match(/^data:image\/(png|jpeg|gif);/);
        const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
        doc.addImage(imgData, format, 15, 10, 47, 17);
      }
    } catch (imgErr) {
      // Logo non chargé, on continue
    }

    // 3. Infos société à droite du logo
    const infoX = 70;
    const infoY_Start = 12;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(this.nom || 'Nom Entreprise', infoX, infoY_Start);
    doc.setFont('helvetica', 'normal');
    doc.text(`Secteur : ${this.secteur || ''}`, infoX, infoY_Start + 5);
    const emailText = `Email : ${this.email || ''}`;
    doc.text(emailText, infoX, infoY_Start + 10);
    const emailWidth = doc.getTextWidth(emailText);
    doc.text(`Téléphone : ${this.telephone || ''}`, infoX + emailWidth + 5, infoY_Start + 10);

    // 4. Double ligne
    const lastInfoY = infoY_Start + 10;
    const gapBelowInfo = 7;
    const sepY = lastInfoY + gapBelowInfo;
    doc.setDrawColor(200);
    doc.line(15, sepY, 195, sepY);
    doc.line(15, sepY + 1.5, 195, sepY + 1.5);

    // 5. Titre principal
    const gapBelowSep = 8;
    const titleY = sepY + gapBelowSep;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(85, 85, 85);
    doc.text(`FACTURE PROFORMA ${this.facture?.numeroFacture}`, 105, titleY, { align: 'center' });
    doc.setDrawColor(0);
    const titleLineWidth = 90;
    const titleLineX = 105 - titleLineWidth / 2;
    // doc.line(titleLineX, titleY + 1.5, titleLineX + titleLineWidth, titleY + 1.5);

    // 6. Date à droite
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `${this.siege || ''}, le ${
        this.facture?.dateCreation
          ? new Date(this.facture?.dateCreation).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
          : ''
      }`,
      195,
      titleY + 10,
      { align: 'right' }
    );

    // 7. Bloc client/objet
    const clientObjectBlockY = titleY + 20;
    let currentY = clientObjectBlockY;
    const labelX = 15;
    if (this.facture) {
      const isClient = !!this.facture.client;
      const isEntreprise = !!this.facture.entrepriseClient;
      const label = isClient ? 'Doit :' : isEntreprise ? 'Doit :' : 'Doit :';
      const nom = isClient
        ? this.facture.client?.nomComplet ?? 'Non spécifié'
        : isEntreprise
          ? this.facture.entrepriseClient?.nom ?? 'Non spécifié'
          : 'Non spécifié';
      doc.setFont('helvetica', 'bold');
      doc.text(label, labelX, currentY);
      doc.setFont('helvetica', 'normal');
      doc.text(nom, labelX + doc.getTextWidth(label) + 2, currentY);
    }
    currentY += 7;
    doc.setFont('helvetica', 'bold');
    doc.text('Objet :', labelX, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(this.facture?.description || '', labelX + doc.getTextWidth('Object :') + 2, currentY);

    // 8. Tableau produits & totaux
    const tableStartY = currentY + 10;
    const customNumberPipe = new CustomNumberPipe();
    const tableData = this.facture?.lignesFacture.map(ligne => [
      ligne.produit.nom,
      ligne.ligneDescription,
      customNumberPipe.transform(ligne.prixUnitaire),
      ligne.quantite.toString(),
      customNumberPipe.transform(ligne.prixUnitaire * ligne.quantite)
    ]);
    // Ajout des totaux comme dans ton exemple
    tableData?.push([
      { content: 'Total HT', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
      { content: customNumberPipe.transform(this.facture?.totalHT || 0), styles: { halign: 'right' } }
    ] as any);

    // Remise
    if (this.facture?.remise && this.facture.remise > 0) {
      tableData?.push([
        { content: `Remise (${this.facture.remise}%)`, colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
        { content: customNumberPipe.transform(this.facture.totalHT * this.facture.remise / 100), styles: { halign: 'right' } }
      ] as any);
      tableData?.push([
        { content: 'Montant Commercial', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
        { content: customNumberPipe.transform(this.facture.totalHT - (this.facture.totalHT * this.facture.remise / 100)), styles: { halign: 'right' } }
      ] as any);
    }

    // TVA
    if (this.facture?.tva) {
      const tauxPourcent = Math.round((this.tauxTva ?? 0) * 100);
      tableData?.push([
        { content: `TVA (${tauxPourcent} %)`, colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
        { content: customNumberPipe.transform((this.facture.totalHT - (this.facture.totalHT * (this.facture.remise ?? 0) / 100)) * this.tauxTva), styles: { halign: 'right' } }
      ] as any);
      tableData?.push([
        { content: 'Montant TTC', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
        { content: customNumberPipe.transform(this.facture.totalFacture), styles: { fontStyle: 'normal', halign: 'right' } }
      ] as any);
    }

    (doc as any).autoTable({
      head: [['Désignation', 'Description', 'Prix Unitaire (FCFA)', 'Quantité', 'Montant (FCFA)']],
      body: tableData,
      startY: tableStartY,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 2, lineWidth: 0.1, lineColor: [221, 221, 221]},
      headStyles: { fillColor: [242, 242, 242], textColor: [0, 0, 0], fontSize: 8, halign: 'center', fontStyle: 'bold'},
      bodyStyles: { textColor: [0,0,0], fillColor: null },
      margin: { left: 15, right: 15 },
      columnStyles: {
        0: { halign: 'left', cellWidth: 30 },
        1: { halign: 'left', cellWidth: 60 },
        2: { halign: 'center', cellWidth: 33 },
        3: { halign: 'center', cellWidth: 20 },
        4: { halign: 'right', cellWidth: 35 },
      },
      tableStyle: { borderColor: [200, 200, 200], borderWidth: 0.1 }
    });

    // 9. Montant en lettres
    let y_after_table = (doc as any).lastAutoTable.finalY;
    let y_amount_in_words = y_after_table + 18;
    const libelle = 'Arrêté la présente facture à la somme de : ';
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(libelle, 15, y_amount_in_words);
    const libelleWidth = doc.getTextWidth(libelle);
    const startX = 15 + libelleWidth;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const enLettresPipe = new EnLettresPipe();
    const montantLettreRaw = enLettresPipe.transform(this.facture?.totalFacture || 0);
    const maxWidth = 195 - startX;
    const lines = doc.splitTextToSize(montantLettreRaw, maxWidth);
    doc.text(lines[0], startX, y_amount_in_words);
    let currentAmountInWordsY = y_amount_in_words;
    for (let i = 1; i < lines.length; i++) {
      currentAmountInWordsY += 6;
      doc.text(lines[i], 15, currentAmountInWordsY);
    }

    // 10. Signature centrée
    let y_signature_block = currentAmountInWordsY + 30;
    const min_y_signature = doc.internal.pageSize.height - 70;
    y_signature_block = Math.max(y_signature_block, min_y_signature);
    const blocCenterX = 180;
    doc.setFontSize(9);
    doc.setFont('helvetica');
    const signataire = this.signataire || 'Directeur';
    const signataireWidth = doc.getTextWidth(signataire);
    const signataireX = blocCenterX - signataireWidth / 2;
    doc.text(signataire, signataireX, y_signature_block);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const nom = this.signataireNom || 'Nom du signataire';
    const nomWidth = doc.getTextWidth(nom);
    const nomX = blocCenterX - nomWidth / 2;
    doc.text(nom, nomX, y_signature_block + 8);

    // 11. Footer
    const margin = 15;
    const pageWidth = doc.internal.pageSize.width;
    const x1 = margin;
    const x2 = pageWidth - margin;
    const pageHeight = doc.internal.pageSize.height;
    const footerYStart = pageHeight - 20;
    const separatorY = footerYStart - 5;
    doc.setLineWidth(0.2);
    doc.setDrawColor(150);
    doc.line(x1, separatorY, x2, separatorY);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);
    let currentFooterY = footerYStart;
    if (this.siteWeb) {
      doc.text(this.siteWeb, 105, currentFooterY, { align: 'center' });
      currentFooterY += 4;
    }
    const parts = [];
    if (this.nina) parts.push(`NINA : ${this.nina}`);
    if (this.rccm) parts.push(`RCCM : ${this.rccm}`);
    if (this.nif) parts.push(`NIF : ${this.nif}`);
    if (this.banque) parts.push(`Banque : ${this.banque}`);
    if (parts.length > 0) {
      doc.text(parts.join(' ; '), 105, currentFooterY, { align: 'center' });
      currentFooterY += 4;
    }
    let adresseLine = '';
    if (this.adresse && this.siege && this.pays) {
      adresseLine = `Adresse : ${this.adresse} / ${this.siege}-${this.pays}`;
    } else if (this.adresse && this.siege) {
      adresseLine = `Adresse : ${this.adresse} / ${this.siege}`;
    } else if (this.adresse && this.pays) {
      adresseLine = `Adresse : ${this.adresse} / ${this.pays}`;
    } else if (this.siege && this.pays) {
      adresseLine = `Adresse : ${this.siege} / ${this.pays}`;
    } else if (this.adresse) {
      adresseLine = `Adresse : ${this.adresse}`;
    } else if (this.siege) {
      adresseLine = `Adresse : ${this.siege}`;
    } else if (this.pays) {
      adresseLine = `Adresse : ${this.pays}`;
    }
    if (adresseLine) {
      doc.text(adresseLine, 105, currentFooterY, { align: 'center' });
      currentFooterY += 4;
    }
    doc.setTextColor(0);

    // 12. Téléchargement
    doc.save(`Facture_Proforma_${this.facture?.numeroFacture}.pdf`);
  }
}