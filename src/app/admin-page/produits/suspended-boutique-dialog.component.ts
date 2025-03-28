// suspended-boutique-dialog.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-suspended-boutique-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
],
  template: `
    <h2 mat-dialog-title>Boutique suspendue</h2>
    <mat-dialog-content>
      <p>Cette boutique est actuellement suspendue. Vous ne pouvez pas accéder à ses produits.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fermer</button>
    </mat-dialog-actions>
  `
})
export class SuspendedBoutiqueDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuspendedBoutiqueDialogComponent>) {}
}