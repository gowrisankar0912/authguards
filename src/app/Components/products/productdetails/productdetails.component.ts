import { Component } from '@angular/core';
import { Product } from '../../../Domain/product';
import { ProductService } from '../../../Service/product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../../../Service/auth-service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  productId!: number;
  product!: Product | undefined;
  outProduct!: Product;

  constructor(
    private productService: ProductService,
    private authService: AuthGuard,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
    console.log('temp');
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.product = this.productService.getProductById(id);
      if (this.product != undefined) {
        this.outProduct = this.product;
      } else {
        alert('Product Not Found');
      }
    });
  }

  checkLoginStatus(): void {
    if (!this.authService.isloggedin()) {
      this.authService.redirectUrl = '/getproducts';
      this.authService.redirectToLogin();
    }
  }
}
