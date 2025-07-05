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
    <div class="confirmation-modal-aver">
      <div class="modal-content-aver">
        <!-- En-tête avec icône warning et titre -->
        <div class="modal-header-aver">
          <div class="modal-title-wrapper-aver">
            <mat-icon class="warning-icon">warning</mat-icon>
            <h4 style="font-size: 16px; margin-bottom: 10px; color: #d20909;">Boutique suspendue</h4>
          </div>
          
        </div>

        <!-- Contenu -->
        <div class="modal-body-aver">
          <p style="margin: 0; font-size: 12px;">Cette boutique est actuellement suspendue. Vous ne pouvez pas accéder à ses produits.</p>
        </div>

        <!-- Actions -->
        <div class="modal-actions-aver">
          <button class="btn-confirm" style="font-size: 12px;" (click)="dialogRef.close()">OK</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .confirmation-modal-aver {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1050;
    }

    .confirmation-modal-aver .modal-content-aver {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      width: 300px;
    }

    .modal-header-aver {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    .modal-title-wrapper-aver {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .warning-icon {
      color: #ff9800;
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      margin-bottom: 8px;
    }



    .modal-body-aver {
      margin-bottom: 15px;
    }

    .modal-actions-aver {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }

    .btn-confirm {
      background-color: #0672E4;
      color: white;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class SuspendedBoutiqueDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuspendedBoutiqueDialogComponent>) {}
}