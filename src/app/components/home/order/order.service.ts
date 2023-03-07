import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Order } from "./order";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {
  }

  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(this.apiUrl + 'order/' + id)
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'orders')
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + 'orders', order)
  }

  updateOrder(id: string, order: Order): Observable<Order> {
    return this.http.put<Order>(this.apiUrl + 'order/' + id, order)
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + 'order/' + id)
  }
}
