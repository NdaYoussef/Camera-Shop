import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { API_URLS } from '../constants/APi_URLS';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

 getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URLS.getAllProducts)
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(API_URLS.getProductById(id));
  }
filterProducts(title:string):Observable<IProduct[]>{
  return this.http.get<IProduct[]>(API_URLS.filterProductsBytitle(title))
}
}