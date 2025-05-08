export interface UserRequest {
  id: number;
  personalCode: string;
  entrepriseId: number;
  nomComplet: string;
  nomEntreprise: string;
  email: string;
  roleType: string;
  phone: string;
  pays: string;
  adresseEntreprise: string;
  logoEntreprise : string,
  siege: string;
  boutiques: {
    id: number;
    nomBoutique: string;
    telephone: string;
    email: string;
    adresse: string; // Ajout du champ adresse
  }[];
}