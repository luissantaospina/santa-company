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
  createModalActive: boolean = false
  selectedOrder: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteOrder(this.selectedOrder.id)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getOrdersList()
    this.createModalActive = false
  }

  deleteOrder(orderId: string): void {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.getOrdersList()
    })
  }

  getOrdersList(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders
    })
  }

  ngOnInit(): void {
    this.getOrdersList()
  }

  selectDeleteOrder(order: Order) {
    this.selectedOrder = order
    this.deleteModalActive = true
  }
}
