// src/app/MODELS/FactureReelle.model.ts
export interface UserRequest {
  id: number;
  username: string;
  // … autres champs si nécessaires
}

export interface EntrepriseClientDTO {
  id: number;
  nom: string;
  
}

export interface ClientDTO {
  id: number;
  nom: string;
}

export interface LigneFactureDTO {
  id: number;
  produitNom: string;
  ligneDescription: string;
  prixUnitaire: number;
  quantite: number;
  montantTotal: number;
}

export interface FactureReelle {
  id: number;
  numeroFacture: string;
  dateCreation: string;
  dateCreationPro: string;
  description: string;
  totalHT: number;
  totalFacture: number;
  remise: number;
  tauxRemise?: number;
  tva: boolean;
  statutPaiement: string;
  utilisateur: UserRequest | null;
  entrepriseClient: EntrepriseClientDTO | null;
  client: ClientDTO | null;
  utilisateurValidateur?: string;
  utilisateurCreateur?: string;
  lignesFacture: LigneFactureDTO[];
  statut: 'VALIDE' | 'ANNULEE';
  factureProFormaId: number | null;
  montantRestant?: number;

  factureProForma: {
    id: number;
  };
}

export interface PaiementDTO {
  id: number;
  montant: number;
  datePaiement: string;
  modePaiement: string;
  encaissePar: string;
}
