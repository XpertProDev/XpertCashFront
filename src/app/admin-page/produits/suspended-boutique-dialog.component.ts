// suspended-boutique-dialog.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-suspended-boutique-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="ds-modal-content ds-elevated" role="dialog">
      <!-- En-tête avec icône warning et titre -->
      <div class="ds-modal-header">
        <div class="ds-modal-title-wrapper">
          <mat-icon class="warning-icon">warning</mat-icon>
          <h2 mat-dialog-title class="ds-modal-title">Boutique suspendue</h2>
        </div>
        <button mat-icon-button class="ds-icon-button" (click)="dialogRef.close()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Contenu -->
      <mat-dialog-content class="ds-modal-body">
        <p>Cette boutique est actuellement suspendue. Vous ne pouvez pas accéder à ses produits.</p>
      </mat-dialog-content>

    </div>
  `,
  styles: [`
    /* Structure principale */
    .ds-modal-content {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      max-width: 450px;
      width: 100%;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* En-tête */
    .ds-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start; /* Alignement en haut pour séparer titre et bouton */
      margin-bottom: 16px;
    }

    .ds-modal-title-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ds-modal-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      color: #d32f2f; /* Rouge pour alerte */
      margin-top: -13px;
    }

    /* Icônes */
    .warning-icon {
      color: #ff9800; /* Orange warning */
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .ds-icon-button {
      color: #666;
      margin-top: -8px; /* Décalage pour aligner avec le titre */
      margin-right: -8px; /* Décalage pour espacer du bord */
      transition: all 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    }

    /* Corps */
    .ds-modal-body {
      color: #0b3558;
      font-size: 0.9375rem;
      line-height: 1.5;
      padding: 0 0 16px 0;
    }

    /* Pied de modal */
    .ds-modal-footer {
      padding-top: 16px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    /* Utilitaires */
    .ds-flex {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    /* Boutons (style DeepSeek-like) */
    .ds-button {
      border-radius: 4px;
      padding: 8px 16px;
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
      border: none;
      transition: background 0.2s;

      &--secondary {
        background-color: #f0f0f0;
        color: #333;
      }

      &--primary {
        background-color: #1976d2;
        color: white;
      }
    }
  `]
})
export class SuspendedBoutiqueDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuspendedBoutiqueDialogComponent>) {}
}