import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-unlock-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './unlock-dialog.component.html',
  styleUrls: ['./unlock-dialog.component.scss']
})
export class UnlockDialogComponent {
  @Input() isDialogOpen: boolean = false;
  personalCode = '';

  constructor(
    public dialogRef: MatDialogRef<UnlockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {}

  verifyCode() {
    console.log("🔑 Code entré:", this.personalCode);
    this.dialogRef.close(this.personalCode);
  }

  ngOnDestroy() {
    console.log("🛑 Le pop-up a été fermé !");
  }
}
