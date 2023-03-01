import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    OrderComponent,
    ProductComponent,
    ClientComponent,
    RoleComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
