import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../core/auth/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-unauthorized-navbar',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './unauthorized-navbar.component.html',
  styleUrl: './unauthorized-navbar.component.scss'
})
export class UnauthorizedNavbarComponent implements OnInit {
  mobileMenuOpen = false;
  
  protected authService = inject(AuthService);
  private router = inject(Router);
  private translateService = inject(TranslateService);
  protected isLoggedIn = this.authService.isLoggedIn;
  protected userName = this.authService.userName;
  protected currentLang = localStorage.getItem('lang') || 'en';

  constructor() {
    this.translateService.setDefaultLang('en');
    const savedLang = localStorage.getItem('lang') || 'en';
    this.useLanguage(savedLang);
  }

  useLanguage(language: string){
    this.translateService.use(language);
    localStorage.setItem('lang', language);

    const htmlTag = document.dir;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }
  
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.userName = this.authService.userName;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }



  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  logout() {
    this.closeMobileMenu();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
