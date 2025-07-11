import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-session-expired-modal',
  imports: [],
  templateUrl: './session-expired-modal.component.html',
  styleUrl: './session-expired-modal.component.scss',
})
export class SessionExpiredModalComponent {
  @Output() confirmed = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
  }

}
