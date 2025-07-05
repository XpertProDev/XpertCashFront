// module-paiement-model.ts
export interface ModulePaiementModel {
  nomModule: string;
  dureeMois: number;
  numeroCarte: string;
  cvc: string;
  dateExpiration: string; // Format: "MMAA" (ex: "1225")
  nomCompletProprietaire: string;
  emailProprietaireCarte: string;
  pays: string;
  adresse: string;
  ville: string;
//   saveInfo?: string;
//   acceptTerms?: string;
}





// export interface ModulePaiementModel{
// nomModule: string;
//   dureeMois: number;
//   numeroCarte: string;
//   cvc: string;
//   dateExpiration: string;
//   nomCompletProprietaire: string;
//   emailProprietaireCarte: string;
//   pays: string;
//   adresse: string;
//   ville: string;
//   saveInfo?: string;
//   acceptTerms?: string;
  
// }

