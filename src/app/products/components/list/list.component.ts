import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'products-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  @Output()
  public onDeleteProduct2: EventEmitter<string> = new EventEmitter();

  @Input()
  public productList: Product[] = []


  deleteProduct(id?: string): void {
    // TODO: Emitir el ID del personaje

    // this.onDeleteProduct.emit(this.productList[index])
    if(!id) return

    this.onDeleteProduct2.emit(id)

  }
}
