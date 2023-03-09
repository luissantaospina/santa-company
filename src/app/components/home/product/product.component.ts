import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";
import { Product } from "./Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductsService
  ) { }

  products: Array<Product> = []
  deleteModalActive: boolean = false
  createModalActive: boolean = false
  updateModalActive: boolean = false
  selectedProduct: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteProduct(this.selectedProduct)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getProductsList()
    this.createModalActive = false
  }

  confirmUpdate() {
    this.getProductsList()
    this.updateModalActive = false
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProductsList()
    })
  }

  getProductsList(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  ngOnInit(): void {
    this.getProductsList()
  }
}
