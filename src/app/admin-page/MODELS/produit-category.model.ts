export class ProduitDetailsResponseDTO {
    id!: number;
    nom!: string;
    prixVente!: number;
    prixAchat!: number | null;
    quantite!: number;
    seuilAlert!: number;
    categorieId!: number;
    uniteId!: number | null;
    codeBare!: string;
    photo!: string;
    enStock!: boolean;
    nomCategorie!: string;
    nomUnite!: string;
    typeProduit!: string;
    createdAt!: string; // Ou Date si vous convertissez
    lastUpdated!: string; // Ou Date
    datePreemption!: string | null; // Ou Date
    boutiqueId!: number | null;
    nomBoutique!: string | null;
    description!: string;
    codeGenerique!: string;
    remise?: number;
    discount?: number;

    boutiques!: {
    id: number;
    nom: string;
    quantite: number;
    }[];
    constructor(data: Partial<ProduitDetailsResponseDTO> = {}) {
        Object.assign(this, data);
    }
}