import { Component, EventEmitter, Output } from "@angular/core";
import { Product } from "../../interfaces/product.interface";




@Component({
  selector:'products-add-product',
  templateUrl:'./add-product.component.html',
  styleUrl:'./add-product.component.css',
})

export class AddProductComponent {


  @Output()
  public onNewProduct: EventEmitter<Product> = new EventEmitter()

  public product: Product ={
    title: '',
    price:0,
  }

  addProduct(): void {
    // console.log(this.product);

    if(this.product.title.length === 0) return;

    this.onNewProduct.emit(this.product)

    this.product = {title:'', price:0}
  }

}
