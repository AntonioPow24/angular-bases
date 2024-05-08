import { Component } from '@angular/core';

import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-main-page',
  templateUrl: './main-page.component.html',
  styleUrl:'./main-page.component.css'
})

export class MainPageComponent {
  constructor(private productService: ProductService ){}

  get products(): Product[] {
    return [...this.productService.products];
  }

  onDeleteProduct(id: string): void {
    this.productService.deleteProductById(id)
  }

  onNewProduct (product: Product): void {
    this.productService.addProduct(product)
  }
}
