import { Component, OnInit } from '@angular/core';
import {OrderService} from "./order.service";
// import {MatSnackBar} from "@angular/material/snack-bar";
import {Order} from "./order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    // private _snackBar: MatSnackBar
  ) { }

  orders: Array<Order> = []

  deleteOrder(orderId: string): void {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.openSnackBar('Orden eliminada exitosamente')
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

  openSnackBar(message: string) {
    // this._snackBar.open(
    //   message, '', {
    //     duration: 4000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top'
    //   }
    // );
  }
}
