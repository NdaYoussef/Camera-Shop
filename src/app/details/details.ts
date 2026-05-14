// src/app/details/details.component.ts
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { IProduct } from '../models/iproducts';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { ProductsService } from '../Services/product-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class ProductDetailComponent  {

 product!: IProduct;
productsService = inject(ProductsService);
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    const id =  this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productsService.getProductById(+id)!;
    }
  }

  
  goBack() {
    this.router.navigate(['/products']);
  }

  buyProduct() {
    this.productsService.buy(this.product);
  }
}