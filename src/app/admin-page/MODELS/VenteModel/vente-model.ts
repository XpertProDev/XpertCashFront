
export interface VenteRequest {
  boutiqueId: number;
  produitsQuantites: { [produitId: string]: number };
  description?: string;
  nomClient?: string;
  telClient?: string;
  modePaiement?: string;
  montantPaye?: number;
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
