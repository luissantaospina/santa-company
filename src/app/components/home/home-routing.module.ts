import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { UserComponent } from "./user/user.component";
import { ClientComponent } from "./client/client.component";
import { ProductComponent } from "./product/product.component";
import { RoleComponent } from "./role/role.component";
import { OrderComponent } from "./order/order.component";
import { HomeGuard } from "../../guards/home.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [HomeGuard],
    children: [
      { path: 'users', component: UserComponent},
      { path: 'roles', component: RoleComponent},
      { path: 'clients', component: ClientComponent},
      { path: 'products', component: ProductComponent},
      { path: 'orders', component: OrderComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
