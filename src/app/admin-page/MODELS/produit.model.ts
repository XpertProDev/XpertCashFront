export interface Categorie {
  id: number;
  nom: string;
  createdAt?: string;
}

export interface UniteDeMesure {
  id: number;
  nom: string;
}
export interface Boutique {
  id: number;
  nom: string;
  quantite: number;
  typeBoutique: string
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

  // Identifiants (possiblement redondants avec les objets complets)
  categorieId: number | null;
  uniteId: number | null;
  boutiqueId: number | null;

  categorie?: Categorie;
  uniteDeMesure?: UniteDeMesure;

  // Champs àplatir pour faciliter le binding ou les filtres
  nomCategorie?: string;
  nomUnite?: string;
  nomBoutique?: string;

  codeBare: string;
  photo: string;
  enStock: boolean;
  createdAt?: string;
  lastUpdated?: string;
  typeProduit?: string;

  datePreemption?: string;

  deleted?: boolean;
  deletedAt?: string | null;
  deletedBy?: string | null;

  boutiques?: Boutique[];

  photoUrl?: string;
}
