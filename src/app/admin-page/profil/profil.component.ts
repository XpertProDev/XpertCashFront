import { Component } from '@angular/core';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-profil',
  imports: [
    CodeInputModule
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

    // this called every time when user changed the code
  onCodeChanged(code: string) {
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
  }

}
