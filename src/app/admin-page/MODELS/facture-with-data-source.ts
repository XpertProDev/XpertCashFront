import { MatTableDataSource } from "@angular/material/table";
import { Facture } from "./facture.model";

export interface FactureWithDataSource extends Facture {
    dataSource: MatTableDataSource<any>;
    totalSum: number; // Ajouter cette ligne
  }