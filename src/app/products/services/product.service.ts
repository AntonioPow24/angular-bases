import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import {v4 as uuid} from 'uuid';




@Injectable({providedIn: 'root'})
export class ProductService {
  public products: Product[] = [
    {
      id: uuid(),
      title: 'Monitor OLED 144hz',
      price: 12.200
    },
    {
      id: uuid(),
      title: 'Monitor ASUS 165hz',
      price: 1450
    },
    {
      id: uuid(),
      title: 'Mouse Logitech g502',
      price: 310
    },
  ]

  addProduct( product: Product ): void {

    // Spread Operator toma todas las propiedades, y las esparce donde lo escribi
    const newProduct: Product = {id: uuid(), ...product}

    this.products.push(newProduct)
  }


  // onDeleteProduct( product: Product): void{
  //   this.products = this.products.filter(item => item.title !== product.title )

  // }

  deleteProductById( id: string): void{


    this.products = this.products.filter( product => product.id !== id);
    console.log(id);

  }


}
