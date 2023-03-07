import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + 'products')
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + 'product/' + id)
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'products', product)
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + 'product/' + id, product)
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'product/' + id)
  }
}
