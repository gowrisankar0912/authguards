import { Injectable } from '@angular/core';
import { Product } from '../Domain/product';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Domain/login';
import { ProdApi } from '../Domain/prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  products: Product[] = [
    new Product(1, 'OnePlus 10 Pro 5G ', 62000),
    new Product(2, 'iPhone 15 Pro Max', 150000),
    new Product(3, 'Samsung Galaxy S24 Ultra', 130000),
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  deleteProduct(idx: number) {
    const deletedProduct = this.products[idx];
    this.products = this.products.filter((_, index) => index !== idx);
  }

  loginGetUrl = 'http://localhost:5018/api/Login/LoginDetails';
  loginCheckUrl = 'http://localhost:5018/api/Login/LoginInfo';
  loginPostUrl = 'http://localhost:5018/api/Login/LoginPOST';
  productsGetUrl = 'http://localhost:5018/api/Product/GetProducts';
  productsPostUrl = 'http://localhost:5018/api/Product/AddProduct';
  productDeleteUrl = 'http://localhost:5018/api/Product/DeleteProduct';
  logindata!: any;
  productdata!: any;
  getdata() {
    this.http.get(this.loginGetUrl).subscribe((res) => {
      this.logindata = res;
      console.log(this.logindata);
    });
  }

  postData(dataToSend: Login) {
    this.http.post(this.loginCheckUrl, dataToSend).subscribe((res) => {
      console.log(res);
    });
  }

  insertData(dataToSend: Login) {
    this.http.post(this.loginPostUrl, dataToSend).subscribe((res) => {
      console.log(res);
    });
  }

  getproductsfromapi() {
    this.http.get(this.productsGetUrl).subscribe((res) => {
      this.productdata = res;
      console.log(res);
    });
  }

  postproducts(prod: ProdApi) {
    this.http.post(this.productsPostUrl, prod).subscribe((res) => {
      console.log(res);
    });
  }

  deleteProducts(id: string) {
    const deleteUrl = `${this.productDeleteUrl}?id=${id}`;
    this.http.delete(deleteUrl).subscribe((res) => {
      console.log(res);
    });
  }
}
