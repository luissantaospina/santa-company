import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Order } from "../order";
import { OrderService } from "../order.service";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html'
})
export class OrderUpdateComponent implements OnInit {

  @Input() orderId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  orderSave: any
  updateOrderForm!: FormGroup
  date: string | undefined

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.getOrder(this.orderId)
    this.updateOrderForm = this.formBuilder.group({
      code: ["", Validators.required],
      price: ["", Validators.required],
      client_id: ["", Validators.required],
      date_purchase: ["", Validators.required]
    })
  }

  getOrder(id: string): void {
    this.orderService.getOrder(id).subscribe(order => {
      this.orderSave = order
      this.updateOrderForm = this.formBuilder.group({
        code: [this.orderSave.code, Validators.required],
        price: [this.orderSave.price, Validators.required],
        client_id: [this.orderSave.client_id, Validators.required],
        date_purchase: [this.orderSave.date_purchase, Validators.required]
      })
    })
  }

  updateOrder(order: Order) {
    this.orderService.updateOrder(this.orderId, order).subscribe(order => {
      this.updateOrderForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
