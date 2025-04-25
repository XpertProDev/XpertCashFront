export interface LigneFactureProforma {
  id: number;
  produit: {
    id: number;
    nom: string;
    prixUnitaire: number;
  };
  description?: string;
  quantite: number;
  prixUnitaire: number;
}

export interface FactureProForma {
    id: number;
    numeroFacture: string;
    dateCreation: string;
    description: string;
    totalHT: number;
    remise?: number;
    tva: boolean;
    totalFacture: number;
    client?: {
      id: number;
      nomComplet: string;
      email?: string;
      adresse?: string;
      telephone?: string;
    };
    entrepriseClient?: {
      id: number;
      nom: string;
      email?: string;
      adresse?: string;
      telephone?: string;
    };
    lignesFacture: LigneFactureProforma[];
}