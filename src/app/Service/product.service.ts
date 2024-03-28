import { Injectable } from '@angular/core';
import { Product } from '../Domain/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

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
}
