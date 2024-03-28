import { Component } from '@angular/core';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Domain/product';
import { AuthGuard } from '../../../Service/auth-service';

@Component({
  selector: 'app-getproducts',
  templateUrl: './getproducts.component.html',
  styleUrl: './getproducts.component.css',
})
export class GetproductsComponent {
  products!: Product[];

  constructor(
    public productService: ProductService,
    private authService: AuthGuard
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (!this.authService.isloggedin()) {
      this.authService.redirectUrl = '/getproducts';
      this.authService.redirectToLogin();
    }
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  deleteProduct(idx: number) {
    this.productService.deleteProduct(idx);
  }
}
