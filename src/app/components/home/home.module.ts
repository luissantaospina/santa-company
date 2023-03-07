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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteModalComponent } from "../share/delete-modal/delete-modal.component";
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { ToastComponent } from "../share/toast/toast.component";
import { OrderUpdateComponent } from './order/order-update/order-update.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientUpdateComponent } from './client/client-update/client-update.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { RoleUpdateComponent } from './role/role-update/role-update.component';

@NgModule({
  declarations: [
    OrderComponent,
    ProductComponent,
    ClientComponent,
    RoleComponent,
    UserComponent,
    HomeComponent,
    SidebarComponent,
    DeleteModalComponent,
    OrderCreateComponent,
    ToastComponent,
    OrderUpdateComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    UserCreateComponent,
    UserUpdateComponent,
    RoleCreateComponent,
    RoleUpdateComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class HomeModule { }
