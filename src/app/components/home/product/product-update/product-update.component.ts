import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from "../products.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../Product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html'
})
export class ProductUpdateComponent implements OnInit {

  @Input() productId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) { }

  product: any
  productSave: any
  updateProductForm!: FormGroup

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.getProduct(this.productId)
    this.updateProductForm = this.formBuilder.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      category: ["", Validators.required],
      code: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    })
  }

  getProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
      this.productSave = product
      this.updateProductForm = this.formBuilder.group({
        name: [this.productSave.name, Validators.required],
        amount: [this.productSave.amount, Validators.required],
        category: [this.productSave.category, Validators.required],
        code: [this.productSave.code, Validators.required],
        description: [this.productSave.description, Validators.required],
        price: [this.productSave.price, Validators.required]
      })
    })
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(this.productId, product).subscribe(() => {
      this.updateProductForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
