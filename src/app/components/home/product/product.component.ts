import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";
import { Product } from "./Product";
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    // private _snackBar: MatSnackBar
  ) { }

  products: Array<Product> = []

  getProductsList(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.openSnackBar('Producto eliminado exitosamente')
      this.getProductsList()
    })
  }

  ngOnInit(): void {
    this.getProductsList()
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
