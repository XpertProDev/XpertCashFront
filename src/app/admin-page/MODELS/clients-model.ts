import { Entreprise } from "./entreprise-model";

export interface Clients {
    id: number;
    nomComplet: string;
    adresse: string;
    email: string;
    telephone?: string;
    entrepriseClient: Entreprise;
    poste: string;
    pays: string;
    ville: string;
    createdAt?: Date;
    photoUrl: string;
}
