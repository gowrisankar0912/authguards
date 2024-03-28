import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../Service/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  title = 'Route Gaurds';
  active = 'active';
  constructor(public authService: AuthGuard) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  getClass() {
    return 'active';
  }
}
