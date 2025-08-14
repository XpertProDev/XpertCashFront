export interface VenteRequest {
  boutiqueId: number;
  produitsQuantites: { [produitId: string]: number };
  description?: string;
  clientNom?: string;    // Changé de nomClient à clientNom
  clientNumero?: string; // Changé de telClient à clientNumero
  modePaiement?: string;
  // montantPaye?: number;
  remises?: { [produitId: string]: number }; // Nouveau: remises par produit (%)
  remiseGlobale?: number; // Nouveau: remise globale (%)
}

export interface VenteResponse {
  venteId: number;
  boutiqueId?: number;
  vendeurId?: number;
  dateVente?: string;
  montantTotal?: number;
  description?: string;
  nomVendeur?: string;
  nomBoutique?: string;
  clientNom?: string;
  clientNumero?: string;
  modePaiement?: string;
  montantPaye?: number;
  lignes?: Array<{
    produitId: number;
    nomProduit: string;
    quantite: number;
    prixUnitaire: number;
    montantLigne: number;
  }>;
}
