// export interface PagedResponse<T> {
//   content: T[];
//   totalElements: number;
//   totalPages: number;
//   size: number;
//   number: number;
//   // ... ajoute d'autres champs si nécessaire
// }

import { Produit } from "./produit.model";

export interface PaginatedResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  isFirst: boolean;
  isLast: boolean;
}

// Pour les produits d'entreprise (avec agrégation)
export interface ProduitEntreprisePaginatedResponse extends PaginatedResponse<Produit> {
  totalProduitsUniques: number;
  totalBoutiques: number;
}

// Pour les produits de boutique
export interface ProduitStockPaginatedResponse extends PaginatedResponse<Produit> {
  totalProduitsActifs: number;
  totalProduitsEnStock: number;
  totalProduitsHorsStock: number;
}