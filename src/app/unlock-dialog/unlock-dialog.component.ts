import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
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
  @ViewChild('pin0') firstInput!: ElementRef;
  personalCode = '';
  isCodeWrong = false;
  pin: string[] = ["", "", "", ""];


  constructor(
    public dialogRef: MatDialogRef<UnlockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdRef: ChangeDetectorRef
  ) {}

  goToNext(currentInput: HTMLInputElement, nextInput?: HTMLInputElement) {
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  }

  handleBackspace(event: KeyboardEvent, index: number, currentInput: any, previousInput: any) {
    if (event.key === "Backspace") {
        if (this.pin[index]) {
            this.pin[index] = "";
            event.preventDefault();
        } else if (previousInput && index > 0) {
            previousInput.focus();
        }
    }
}



  verifyCode() {
    const enteredCode = this.pin.join("");
    if (enteredCode !== this.data.userPersonalCode) {
        this.isCodeWrong = true;
        setTimeout(() => {
            this.isCodeWrong = false;
            this.pin = ["", "", "", ""];
            this.cdRef.detectChanges();
            setTimeout(() => {
                if (this.firstInput) {
                    this.firstInput.nativeElement.focus(); 
                }
            }, 50);
        }, 500);
    } else {
        console.log("✅ Code correct, fermeture du pop-up...");
        this.dialogRef.close(enteredCode);
    }
}






  ngOnDestroy() {
    console.log("🛑 Le pop-up a été fermé !");
  }
}
