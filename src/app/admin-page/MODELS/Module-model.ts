export interface Module{
    nom: string;
    code: string;
    description?: string;
    payant: boolean;
    actif: boolean;
    prix: number;
    tempsRestantEssai: string
}
