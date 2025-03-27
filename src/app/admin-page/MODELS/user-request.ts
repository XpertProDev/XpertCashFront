export interface UserRequest {
    id: number;
    nomComplet: string;
    nomEntreprise: string;
    email: string;
    roleType: string;
    phone: string;
    pays: string;
    adresseEntreprise: string;
    logoEntreprise: string;
    entrepriseId: number; // <-- Ajoutez cette ligne
    boutiques: {
      id: number;
      nomBoutique: string;
      telephone: string;
      email: string;
      adresse: string;
      entreprise: { // <-- Ajoutez cette sous-structure
        id: number;
      };
    }[];
  }