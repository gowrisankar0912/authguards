import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Login } from '../../Domain/login';
import { Product } from '../../Domain/product';
import { ProdApi } from '../../Domain/prod';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  constructor(public prodService: ProductService) {}

  ngOnInit() {
    this.get();
    this.getproducts();
  }
  data!: any;
  login!: Login;
  prod!: ProdApi;
  get() {
    this.prodService.getdata();
  }
  post() {
    this.login = new Login('admin', 'admin');
    console.log(this.login);
    this.prodService.postData(this.login);
  }

  insertlogin() {
    this.login = new Login('angular', 'training');
    console.log(this.login);
    this.prodService.insertData(this.login);
  }

  getproducts() {
    this.prodService.getproductsfromapi();
  }

  postproducts() {
    this.prod = new ProdApi(
      '3fa85f64-5717-4562-b3fc-2c963f66afa8',
      'xyz',
      62000
    );
    console.log(this.prod);
    this.prodService.postproducts(this.prod);
  }

  deleteproducts() {
    this.prodService.deleteProducts('3fa85f64-5717-4562-b3fc-2c963f66afa8');
  }
}
