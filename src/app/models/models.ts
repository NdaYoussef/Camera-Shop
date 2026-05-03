// products.component.ts
import { Component } from '@angular/core';
import { IProduct } from '../models/iproducts';
import { ICategory } from '../models/icategory';
import { ProductCardDirective } from '../models/CardDirective';
import { CurrencyPipe, UpperCasePipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardDirective, CurrencyPipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './models.html',
  styleUrls: ['./models.css']
})
export class ProductsComponent {

  activeFilter: string = 'ALL';

  filters: string[] = ['ALL', 'FULL FRAME', 'APS-C'];

  Categories: ICategory[] = [
    { id: 1, name: 'FULL FRAME' },
    { id: 2, name: 'APS-C' }
  ];

  productList: IProduct[] = [
    {
      id: 1,
      name: 'ALPHA 7R V',
      quantity: 5,
      price: 3899.99,
      img: 'Images/prd1.png',
      categoryID: 1,
      badge: 'NEW',
      specs: [
        { label: 'RESOLUTION', value: '61.0 MP' },
        { label: 'AF POINTS',  value: '693 PHASE-DETECTION' }
      ]
    },
    {
      id: 2,
      name: 'ALPHA 1',
      quantity: 3,
      price: 6499.99,
      img: 'Images/prd2.png',
      categoryID: 1,
      badge: '',
      specs: [
        { label: 'BURST RATE', value: '30 FPS' },
        { label: 'VIDEO',      value: '8K 30P' }
      ]
    },
    {
      id: 3,
      name: 'ALPHA 7S III',
      quantity: 2,
      price: 3499.99,
      img: 'Images/prd3.png',
      categoryID: 2,
      badge: '',
      specs: [
        { label: 'LOW LIGHT', value: 'ISO 409,600' },
        { label: 'FORMAT',    value: '10-BIT 4:2:2' }
      ]
    }
  ];

  get filteredProducts(): IProduct[] {
    if (this.activeFilter === 'ALL') return this.productList;
    const cat = this.Categories.find(c => c.name === this.activeFilter);
    return cat ? this.productList.filter(p => p.categoryID === cat.id) : this.productList;
  }

  setFilter(f: string) {
    this.activeFilter = f;
  }

  addToCart(product: IProduct) {
    if (product.quantity > 0) product.quantity--;
  }
}