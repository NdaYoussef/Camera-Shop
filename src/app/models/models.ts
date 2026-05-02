import { Component } from '@angular/core';
import { Store } from './Store'; 
import { IProduct } from '../models/iproducts';
import { ICategory } from '../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-models',   
  standalone: true,
  templateUrl: './models.html',
  imports: [CommonModule,FormsModule],
})


export class ProductsComponent {

  searchText: string = '';
  store: Store = new Store(
    'My Store',
    ['Qena', 'Aswan'],
    '/Images/store.jpg'
  );

  storeOwner: string = 'Nda';
  Categories: ICategory[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Mobile' }
  ];


  productList: IProduct[] = [
    {
      id: 1,
      name: 'Laptop',
      quantity: 5,
      price: 10000,
      img: 'Images/prd1.jpg',
      categoryID: 1
    },
    {
      id: 2,
      name: 'Phone',
      quantity: 0,
      price: 5000,
      img: 'Images/prd2.jpg',
      categoryID: 2
    },
    {
      id: 3,
      name: 'Tablet',
      quantity: 2,
      price: 3000,
      img: 'Images/prd3.jpg',
      categoryID: 1
    }
  ];

  
  buy(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  showDetails(product: IProduct) {
    alert(`Name: ${product.name} - Price: ${product.price}`);
  }
}

