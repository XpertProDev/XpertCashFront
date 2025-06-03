export interface FactureReelle {
  id: number;
  numeroFacture: string;
  dateCreation: string;
  totalFacture: number;
  remise: number;
  tva: boolean;
  statutPaiement: string;
  utilisateur?: { id: number; nom: string };
  entrepriseClient?: { id: number; nom: string };
  client?: { id: number; nomComplet: string };
  lignesFacture: LigneFacture[];
  description: string;
  totalHT: number;
}

export interface LigneFacture {
  produit: { id: number; nom: string; prixUnitaire?: number; };
  ligneDescription?: string;
  prixUnitaire: number;
  quantite: number;
  montantTotal?: number;
}
