import { Component } from '@angular/core';
import { ProductService } from '../../../Service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../Domain/product';
import { AuthGuard } from '../../../Service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  constructor(
    private productService: ProductService,
    private authService: AuthGuard,
    private router: Router
  ) {}
  productDetails = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    price: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (!this.authService.isloggedin()) {
      this.router.navigateByUrl('/login');
    }
  }

  onSubmit() {
    if (this.productDetails.valid) {
      const productToAdd: Product = {
        id: Number(this.productDetails.value.id),
        name: String(this.productDetails.value.name),
        price: Number(this.productDetails.value.price),
      };
      this.productService.addProduct(productToAdd);
      this.resetform();
    }
  }

  resetform() {
    this.productDetails.reset();
  }
}
