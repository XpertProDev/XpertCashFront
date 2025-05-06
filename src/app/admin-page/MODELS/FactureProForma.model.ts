export enum StatutFactureProForma {
  BROUILLON = 'BROUILLON',
  APPROBATION = 'APPROBATION',
  APPROUVE = 'APPROUVE',
  ENVOYE = 'ENVOYE',
  VALIDE   = 'VALIDE'
}

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

export interface UpdateFactureProFormaDTO {
  client?: { id: number } | null;
  description?: string;
  lignesFacture?: {
    id?: number;
    produit: { id: number };
    quantite: number;
    prixUnitaire: number;
  }[];
  // Ajouter d'autres champs optionnels si besoin
}


export interface FactureProForma {
    id: number;
    numeroFacture: string;
    dateCreation: string;
    dateApprobation?: string;
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