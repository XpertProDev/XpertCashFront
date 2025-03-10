export interface Stock {
    id?: number;
    descriptionAjout?: string;
    descriptionRetire?: string;
    stockActuel?: number;
    quantiteAjoute?: number;
    quantiteRetirer?: number;
    stockApres?: number;
    seuilAlert?: number;
    // Vous pouvez choisir d'inclure l'objet complet ou uniquement son identifiant
    produitId?: number;
    boutiqueId?: number;
    // Les dates sont généralement manipulées sous forme de string en JSON
    createdAt?: string;
    lastUpdated?: string;

    produit?: { id: number; nom: string;};
  }
  