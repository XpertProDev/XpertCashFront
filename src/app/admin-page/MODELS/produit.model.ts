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
  // Nouveaux champs issus du DTO
  nomCategorie?: string; // ex: "Catégorie inconnue" ou la valeur réelle
  nomUnite?: string;     // ex: "" ou la valeur réelle
  createdAt?: string;
  lastUpdated?: string;
  
}
