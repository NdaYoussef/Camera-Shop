// products.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../models/iproducts';
import { ProductCardDirective } from '../models/CardDirective';
import { CurrencyPipe, UpperCasePipe, TitleCasePipe, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../Services/product-service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardDirective,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    NgStyle,        
    RouterLink
  ],
  templateUrl: './models.html',
  styleUrls: ['./models.css']
})
export class ProductsComponent implements OnChanges {

  @Input() searchQuery: string = '';

  activeFilter: string = 'ALL';
  showDetail: boolean = false;
  selectedProduct: IProduct | null = null;
  filterProducts: IProduct[] = [];

  filters: string[] = ['ALL', 'FULL FRAME', 'APS-C'];

  constructor(private productsService: ProductsService) {}

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.filterProducts = this.search(this.searchQuery);
    }
  }


  search(query: string): IProduct[] {
    const allProducts = this.productsService.getFilteredProducts(this.activeFilter);

    if (!query.trim()) {
      return allProducts;
    }

    return allProducts.filter(p =>
      p.name.toLowerCase().includes(query.trim().toLowerCase())
    );
  }

  
  get displayedProducts(): IProduct[] {
    if (this.searchQuery.trim()) {
      return this.filterProducts;
    }
    return this.productsService.getFilteredProducts(this.activeFilter);
  }

  get categories() {
    return this.productsService.categories;
  }

  setFilter(f: string): void {
    this.activeFilter = f;
    if (this.searchQuery.trim()) {
      this.filterProducts = this.search(this.searchQuery);
    }
  }

  addToCart(product: IProduct): void {
    this.productsService.buy(product);
  }

  openDetail(product: IProduct): void {
    this.selectedProduct = product;
    this.showDetail = true;
  }

  goBack(): void {
    this.showDetail = false;
    this.selectedProduct = null;
  }
}