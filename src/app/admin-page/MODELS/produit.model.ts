export class Produit {
  id?: number;
  codeProduit?: string;
  nomProduit: string;
  description: string;
  prix: number;
  photo?: string;
  prixAchat: number;
  quantite: number;
  alertSeuil: number;
  createdAt?: Date;
  uniteMesure: { nomUnite: string };
  categoryProduit: { id: number; nomCategory?: string };

  constructor(
    id?: number,
    codeProduit?: string,
    nomProduit?: string,
    description?: string,
    prix?: number,
    photo?: string,
    prixAchat?: number,
    quantite?: number,
    alertSeuil?: number,
    createdAt?: Date,
    uniteMesure?: { nomUnite: string },
    categoryProduit?: { id: number; nomCategory?: string }
  ) {
    this.id = id;
    this.codeProduit = codeProduit;
    this.nomProduit = nomProduit || '';
    this.description = description || '';
    this.prix = prix || 0;
    this.photo = photo;
    this.prixAchat = prixAchat || 0;
    this.quantite = quantite || 0;
    this.alertSeuil = alertSeuil || 0;
    this.createdAt = createdAt;
    this.uniteMesure = uniteMesure || { nomUnite: '' };
    this.categoryProduit = categoryProduit || { id: 0, nomCategory: '' };
  }
}
