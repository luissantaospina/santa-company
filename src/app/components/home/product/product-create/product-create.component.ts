import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ProductsService } from "../products.service";
import { Product } from "../Product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent implements OnInit {

  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) { }

  createProductForm!: FormGroup

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.createProductForm = this.formBuilder.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      category: ["", Validators.required],
      code: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    })
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(() => {
      this.createProductForm.reset()
      this.emitConfirmCreation(true)
    })
  }
}
