import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../models/models';

@Component({
  selector: 'app-product-serach',
  imports: [FormsModule,ProductsComponent],
  templateUrl: './product-serach.html',
  styleUrl: './product-serach.css',
})
export class ProductSerach {
query: string = '';
}
