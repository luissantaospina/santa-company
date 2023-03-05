import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";
import { Order } from "./order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  constructor(
    private orderService: OrderService
  ) { }

  orders: Array<Order> = []
  deleteModalActive: boolean = false

  deleteOrder(orderId: string): void {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.getOrdersList()
    })
  }

  confirmDeletion(value: boolean, orderId: string) {
    if (value) this.deleteOrder(orderId)
    this.deleteModalActive = false
  }

  getOrdersList(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders
    })
  }

  ngOnInit(): void {
    this.getOrdersList()
  }
}
