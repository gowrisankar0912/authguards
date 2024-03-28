import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private isloggedIn = false;
  redirectUrl: string = '/';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isloggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isloggedIn = false;
    this.router.navigate(['/login']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  isloggedin(): boolean {
    return this.isloggedIn;
  }

  redirectToPreviousUrl(): void {
    this.router.navigateByUrl(this.redirectUrl);
  }
}
