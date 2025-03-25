export interface Transfert {
    id?: number;
    produitId: number;
    boutiqueSourceId: number;
    boutiqueDestinationId: number;
    quantite: number;
    dateTransfert?: Date;
}