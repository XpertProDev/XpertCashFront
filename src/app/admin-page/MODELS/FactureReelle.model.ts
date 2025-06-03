// src/app/MODELS/FactureReelle.model.ts
export interface UserRequest {
  id: number;
  username: string;
  // … autres champs si nécessaires
}

export interface EntrepriseClientDTO {
  id: number;
  nom: string;
  // … autres champs (email, tél, …) si vous les renvoyez
}

export interface ClientDTO {
  id: number;
  nomComplet: string;
  // … autres champs (adresse, tél, …) si vous les renvoyez
}

export interface LigneFactureDTO {
  id: number;
  produit: {
    id: number;
    nom: string;
  };
  ligneDescription: string;
  prixUnitaire: number;
  quantite: number;
  // => vous pouvez ajouter d’autres champs si vous en renvoyez d’autres
}

export interface FactureReelle {
  id: number;
  numeroFacture: string;
  dateCreation: string;      // JSON envoie la date sous forme de string ISO
  totalHT: number;           // total hors taxe
  remise: number;
  tva: boolean;
  totalFacture: number;
  statutPaiement: string;    // Enum StatutPaiementFacture (en string)
  utilisateur: UserRequest | null;
  entrepriseClient: EntrepriseClientDTO | null;
  client: ClientDTO | null;
  lignesFacture: LigneFactureDTO[];
  // … vous pouvez l’enrichir si le DTO a plus de champs
}
