export interface ProduitFacture {
    codeProduit: string;
    nomProduit: string;
    prixUnitair: number;
    quantite: number;
    total: number;
    codeGenerique: string;

  }
  
  export interface Facture {
    id: number;
    numeroFacture: string;
    type: string;
    description: string;
    dateFacture: string; // ou Date, selon vos besoins
    nomUtilisateur: string;
    telephoneUtilisateur: string;
    produits: ProduitFacture[];
    codeFournisseur: string
    boutiqueIds: number[]; // Ajouter ce champ
    boutiqueNames?: string[]; // Ajouter ce champ
  }
  
  // Ajoutez l'interface FactureWithDataSource ici
  import { MatTableDataSource } from '@angular/material/table';
  
  export interface FactureWithDataSource extends Facture {
    dataSource: MatTableDataSource<any>;
  }
  