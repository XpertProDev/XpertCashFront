export interface VersementComptableDTO {
  id: number;
  montantInitialCaisse: number;
  montantCourantCaisse: number;
  montantVerse: number;
  dateVersement: string;
  statut: string;
  caisseId: number;
  boutiqueId: number;
  nomBoutique: string;
  nomVendeur: string;
  nomComptable: string;
  dateValidation: string | null;
}
