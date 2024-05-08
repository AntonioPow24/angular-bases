import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],

  exports: [
    MainPageComponent
  ]

})
export class ProductsModule { }
