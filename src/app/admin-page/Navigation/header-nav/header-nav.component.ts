import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {

  constructor(private router: Router) {}


  goTologin() {
  this.router.navigate(['/connexion']);
}

}
