import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-authorized-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './authorized-navbar.component.html',
  styleUrl: './authorized-navbar.component.scss',
})
export class AuthorizedNavbarComponent implements OnInit {
  //injections
  authService = inject(AuthService);
  router = inject(Router);

  //variables
  mobileMenuOpen = false;
  isLoggedIn = false;

  constructor() {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.isLoggedIn = true;
    }
  }

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
