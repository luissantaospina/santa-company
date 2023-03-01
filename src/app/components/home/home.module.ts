import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrderComponent,
    ProductComponent,
    ClientComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
