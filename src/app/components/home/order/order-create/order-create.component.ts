import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "../order.service";
import { Order } from "../order";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent implements OnInit {

  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  createOrderForm!: FormGroup
  user: string | null | undefined
  date: string | undefined

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.user = localStorage.getItem('user')
    this.createOrderForm = this.formBuilder.group({
      codigo: ["", Validators.required],
      precio: ["", Validators.required],
      cliente_id: [this.user, Validators.required],
      fecha_compra: ["", Validators.required]
    })
  }

  createOrder(order: Order) {
    this.orderService.createOrder(order).subscribe(() => {
      this.createOrderForm.reset()
      this.emitConfirmCreation(true)
    })
  }
}
