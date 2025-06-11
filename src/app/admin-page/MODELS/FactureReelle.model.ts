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
  nomComplet: string;
  // … autres champs (adresse, tél, …) si vous les renvoyez
}

export interface LigneFactureDTO {
  id: number;
  produitNom: string; // Changé (était 'produit')
  ligneDescription: string;
  prixUnitaire: number;
  quantite: number;
  montantTotal: number; // Ajouté
}

export interface FactureReelle {
  id: number;
  numeroFacture: string;
  dateCreation: string;
  description: string; // Ajouté
  totalHT: number; // Ajouté
  totalFacture: number;
  remise: number;
  tauxRemise?: number; // Ajouté
  tva: boolean;
  statutPaiement: string;
  utilisateur: UserRequest | null;
  entrepriseClient: EntrepriseClientDTO | null;
  client: ClientDTO | null;
  lignesFacture: LigneFactureDTO[];
}
