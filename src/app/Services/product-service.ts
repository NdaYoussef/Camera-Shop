// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproducts';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  categories: ICategory[] = [
    { id: 1, name: 'FULL FRAME' },
    { id: 2, name: 'APS-C' }
  ];

  productList: IProduct[] = [
    {
      id: 1,
      name: 'ALPHA 7R V',
      quantity: 1,
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

  getFilteredProducts(activeFilter: string): IProduct[] {
    if (activeFilter === 'ALL') return this.productList;
    const cat = this.categories.find(c => c.name === activeFilter);
    return cat
      ? this.productList.filter(p => p.categoryID === cat.id)
      : this.productList;
  }

  buy(product: IProduct): void {
    if (product.quantity > 0) product.quantity--;
  }

  getProductById(id: number): IProduct | null {
    return this.productList.find(p => p.id === id) ?? null;
  }
}