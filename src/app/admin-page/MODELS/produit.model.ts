// produit.model.ts

export class Produit {
  id?: number;
  codeProduit?: string;
  nomProduit?: string;
  description?: string;
  prix?: number;
  photo?: string;
  prixAchat?: number;
  quantite?: number;
  uniteMesure?: UniteMesure;
  alertSeuil?: number;
  createdAt?: Date;
  category?: CategoryProduit;

  constructor(init?: Partial<Produit>) {
    Object.assign(this, init);
  }
}

export interface UniteMesure {
  id?: number;
  nomUnite: string;
}

export interface CategoryProduit {
  id: number;
  nomCategory: string;
}

