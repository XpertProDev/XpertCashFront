import { Produit } from "./produit.model";

export interface ProduitPaginatedResponseDTO {
  produits: Produit[];      // ✅ correspond à ton JSON
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  first: boolean;
  last: boolean;
}
