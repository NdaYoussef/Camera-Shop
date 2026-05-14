import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products-service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class ProductApiComponent implements OnInit {
  products: IProduct[] = [];
  error: string | null = null;

  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.error = null;

    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products loaded:', this.products);
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again.';
        console.error(err);
      },
    });
  }


}