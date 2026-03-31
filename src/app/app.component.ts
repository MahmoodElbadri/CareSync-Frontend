import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorizedNavbarComponent } from "./layout/authorized-navbar/authorized-navbar.component";
import { UnauthorizedNavbarComponent } from "./layout/unauthorized-navbar/unauthorized-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorizedNavbarComponent, UnauthorizedNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clinic.front';
}
