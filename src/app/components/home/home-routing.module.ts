import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { UserComponent } from "./user/user.component";
import { ClientComponent } from "./client/client.component";
import { ProductComponent } from "./product/product.component";
import { RoleComponent } from "./role/role.component";
import { OrderComponent } from "./order/order.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'users', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clients', component: ClientComponent},
      { path: 'products', component: ProductComponent},
      { path: 'orders', component: OrderComponent},
      // { path: 'ordenes/crear', component: CreateOrderComponent},
      // { path: 'ordenes/editar/:id', component: EditOrderComponent},
      // { path: 'productos/crear', component: CreateProductComponent},
      // { path: 'productos/editar/:id', component: EditProductComponent},
      // { path: 'usuarios/crear', component: CreateUserComponent},
      // { path: 'usuarios/editar/:id', component: EditUserComponent},
      // { path: 'clientes/crear', component: CreateClientComponent},
      // { path: 'clientes/editar/:id', component: EditClientComponent},
      // { path: 'roles/crear', component: CreateRolComponent},
      // { path: 'roles/editar/:id', component: EditRoleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
