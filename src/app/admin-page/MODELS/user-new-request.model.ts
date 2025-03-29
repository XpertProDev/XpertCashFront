export interface UserNewRequest {
    id: number;
    personalCode: string;
    nomComplet: string;
    email: string;
    roleType: string;
    phone: string;
    pays: string;
    enabledLien: boolean;
    role?: {
        id: number;
        name: string;
        permissions: {
          id: number;
          type: string;
        }[];
      };
}
