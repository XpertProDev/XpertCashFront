export interface Boutique {
  id: number;
  nom: string;
  quantite: number;
}

export interface Produit {
  id: number;
  nom: string;
  prixVente: number;
  description: string;
  codeGenerique: string;
  prixAchat: number;
  quantite: number;
  seuilAlert: number;
  categorieId: number | null;
  uniteId: number | null;
  codeBare: string;
  photo: string;
  enStock: boolean;
  nomCategorie?: string;
  nomUnite?: string;
  createdAt?: string;
  lastUpdated?: string;
  boutiqueId: number | null;
  nomBoutique?: string;
  typeProduit?: string;
  
  boutiques?: Boutique[];

  photoUrl?: string;
}
