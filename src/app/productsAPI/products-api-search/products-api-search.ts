import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ProductsComponent } from '../products/products';

@Component({
  selector: 'app-products-api-search',
  imports: [FormsModule,ProductsComponent],
  templateUrl: './products-api-search.html',
  styleUrl: './products-api-search.css',
})
export class ProductsApiSearch {
 query: string = '';

}
