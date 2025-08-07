export interface OuvrirCaisseRequest {
  boutiqueId: number;
  montantInitial: number;
}

export interface CaisseResponse {
  id: number;
  montantInitial: number;
  montantCourant: number;
  statut: string;
  dateOuverture: string;
  dateFermeture: Date | null;
  vendeurId: number | null;
  nomVendeur: string | null;
  boutiqueId: number | null;
  nomBoutique: string | null;
}