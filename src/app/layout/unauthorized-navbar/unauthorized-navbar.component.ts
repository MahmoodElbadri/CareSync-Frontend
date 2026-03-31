import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-unauthorized-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unauthorized-navbar.component.html',
  styleUrl: './unauthorized-navbar.component.scss'
})
export class UnauthorizedNavbarComponent {
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
