import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderNavComponent } from "src/app/admin-page/Navigation/header-nav/header-nav.component";

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, CommonModule, HeaderNavComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',

})
export class LoginPageComponent {

  entrepriseName: string = '';

  updateEntrepriseName(event: Event): void {
    this.entrepriseName = (event.target as HTMLInputElement).value.toLowerCase();
  }

  ngOnInit() {
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    const themePopup = document.querySelector(".theme-popup") as HTMLElement | null;
  
    checkbox?.addEventListener("change", (event) => {
      event.stopPropagation();
    });
  
    document.addEventListener("click", (event) => {
      if (themePopup && !themePopup.contains(event.target as Node)) {
        checkbox.checked = false;
      }
    });
  }
  

  // ngOnInit() {

  //   // Gestion du dropdown Identification
  //   const checkbox = document.getElementById("checkbox") as HTMLInputElement;
  //   const themePopup = document.querySelector(".theme-popup") as HTMLElement;

  //   checkbox?.addEventListener("change", (event) => {
  //     event.stopPropagation();
  //   });

  //   document.addEventListener("click", (event) => {
  //     if (!themePopup.contains(event.target as Node)) {
  //       checkbox.checked = false;
  //     }
  //   });
  // }
}
