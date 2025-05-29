export interface Note {
  id: number;
  content: string;
  dateCreation: Date;
  auteur: string;
  modifiee?: boolean;
  dateModification?: Date;
  numeroIdentifiant: string;
}
        