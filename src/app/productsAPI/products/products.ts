import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products-service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-productsApi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class ProductsComponent implements OnInit,OnChanges {
  products: IProduct[] = [];
   filteredproducts: IProduct[] = [];

  error: string | null = null;
@Input() searchQuery :string = '';

  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.searchProducts();
  }
 ngOnChanges(changes: SimpleChanges): void {
   if(changes['searchQuery']){
    this.searchProducts()
   }
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
        console.log(err);
      },
    });
  }
searchProducts(): void {
    this.productsService.filterProducts(this.searchQuery).subscribe({
      next:(res)=>{
       this.filteredproducts = res;
       console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }

    })

}

}