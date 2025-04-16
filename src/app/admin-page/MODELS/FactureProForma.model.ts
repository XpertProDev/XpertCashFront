export interface FactureProForma {

    client?: { id: number };
    entrepriseClient?: { id: number };
    lignesFacture: {
      produit: { id: number };
      quantite: number;
    }[];
    tva?: boolean;

}
