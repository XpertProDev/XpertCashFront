// produit.model.ts

export class Produit {
  category: any;
  message(arg0: string, message: any, arg2: string) {
    throw new Error('Method not implemented.');
  }
  id?: number;
  codeProduit?: string;
  nomProduit?: string;
  description?: string;
  prix?: number;
  photo?: string;
  prixAchat?: number;
  quantite?: number;
  alertSeuil?: number;
  createdAt?: Date;
  // Ajoutez ces propriétés pour correspondre au backend
  uniteMesure?: UniteMesure;
  categoryProduit?: CategoryProduit;

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
