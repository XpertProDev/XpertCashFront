export interface Produit {
  id: number;
  codeProduit?: string;
  nomProduit: string;
  description: string;
  prix: number;
  photo: string;
  prixAchat: number;
  quantite: number;
  alertSeuil: number;
  codebar?: string;
  createdAt: string; 
  category: {
    id: number;
    nomCategory: string;
  };
  uniteMesure: {
    id: number;
    nomUnite: string;
  };
  // Propriétés ajoutées pour simplifier l'affichage dans le composant
  nomCategory?: string;
  nomUnite?: string;
}
