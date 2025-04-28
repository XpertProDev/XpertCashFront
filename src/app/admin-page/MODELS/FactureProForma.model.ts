// Dans ton modèle FactureProForma
export interface LigneFactureProforma {
  id?: number; // Rend l'id optionnel pour les nouvelles lignes
  produit: {
    id: number;
    nom?: string; // Optionnel selon tes besoins
    prixUnitaire?: number;
  };
  // description?: string;
  quantite: number;
  prixUnitaire: number; // Obligatoire
  montantTotal?: number;
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
    statut?: string; // Ajouté si nécessaire
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