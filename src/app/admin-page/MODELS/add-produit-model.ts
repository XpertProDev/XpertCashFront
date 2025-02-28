export interface Produit {
    id?: number;
    nom: string;
    prixVente: number;
    prixAchat: number;
    quantite: number;
    seuilAlert: number;
    description?: string;
    codeBare?: string;
    photo?: string;
    enStock?: boolean;
    // Saisie des noms pour catégorie et unité (optionnels)
    categorieNom?: string;
    uniteNom?: string;
  }
  