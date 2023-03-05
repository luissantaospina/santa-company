import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DeleteModalComponent } from "../share/delete-modal/delete-modal.component";


@NgModule({
  declarations: [
    OrderComponent,
    ProductComponent,
    ClientComponent,
    RoleComponent,
    UserComponent,
    HomeComponent,
    SidebarComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
