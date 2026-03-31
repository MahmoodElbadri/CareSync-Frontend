import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-authorized-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './authorized-navbar.component.html',
  styleUrl: './authorized-navbar.component.scss'
})
export class AuthorizedNavbarComponent {
mobileMenuOpen = false;

  constructor() {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  logout() {
    this.closeMobileMenu();
  }

}
