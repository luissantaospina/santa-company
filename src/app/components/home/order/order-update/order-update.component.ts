import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from "../order.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {Order} from "../order";

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html'
})
export class OrderUpdateComponent implements OnInit {

  @Input() orderId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
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
      codigo: ["", Validators.required],
      precio: ["", Validators.required],
      cliente_id: ["", Validators.required],
      fecha_compra: ["", Validators.required]
    })
  }

  getOrder(id: string): void {
    this.orderService.getOrder(id).subscribe(order => {
      this.orderSave = order
      this.updateOrderForm = this.formBuilder.group({
        codigo: [this.orderSave.codigo, Validators.required],
        precio: [this.orderSave.precio, Validators.required],
        cliente_id: [this.orderSave.cliente_id, Validators.required],
        fecha_compra: [this.orderSave.fecha_compra, Validators.required]
      })
    })
  }

  updateOrder(order: Order) {
    this.orderService.updateOrder(this.orderId, order).subscribe(order => {
      this.updateOrderForm.reset()
      this.router.navigate(['inicio/ordenes'])
    })
  }
}
