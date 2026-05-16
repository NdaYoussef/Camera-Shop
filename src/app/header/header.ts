// header.component.ts
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../productsAPI/Services/authservice';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  public authService = inject(AuthService);
    private router = inject(Router);

    logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}