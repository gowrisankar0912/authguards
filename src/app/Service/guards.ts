import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { AddproductComponent } from '../Components/products/addproduct/addproduct.component';
import { AuthGuard } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class Guards
  implements CanActivate, CanDeactivate<AddproductComponent>, CanActivateChild
{
  constructor(private authService: AuthGuard) {}

  canActivate(): boolean {
    if (this.authService.isloggedin()) {
      return true;
    } else {
      this.authService.redirectUrl = '/home';
      this.authService.redirectToLogin();
      return false;
    }
  }

  canDeactivate(component: AddproductComponent): boolean {
    if (this.authService.isloggedin()) {
      return component.productDetails.pristine;
    } else {
      return false;
    }
  }

  canActivateChild() {
    if (this.authService.isloggedin()) {
      return true;
    } else {
      this.authService.redirectToLogin();
      return false;
    }
  }
}
