import { ProduitDetailsResponseDTO } from "./produit-category.model";

export class Categorie {
    id?: number;
    nom!: string;
    produitCount?: number;
    produits?: ProduitDetailsResponseDTO[];

    produitCountBoutique?: number;
}
  