import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Enquiry-Management_Application');
  
  authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn$;
  username$ = this.authService.username$;

  logout() {
    this.authService.logout();
  }
}
