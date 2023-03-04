import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PERMISSIONS_CONSTANTS } from '../../../consts/PermissionsConstants'
import { LoginService } from "../../login/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private router:Router,
    private loginService:LoginService
  ) { }

  permissions = PERMISSIONS_CONSTANTS
  // @ts-ignore
  permissionsUser = JSON.parse(localStorage.getItem('permissions'));
  reviewPurchaseOrder = this.permissionsUser.includes(this.permissions.REVISAR_ORDENES_COMPRA)
  loadProducts = this.permissionsUser.includes(this.permissions.CARGAR_PRODUCTOS)
  administration = this.permissionsUser.includes(this.permissions.ADMINISTRAR_SISTEMA)
  viewPurchaseOrders = this.permissionsUser.includes(this.permissions.VER_ORDENES_COMPRA)

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout().subscribe()
    localStorage.removeItem("token")
    this.router.navigate(['login'])
  }
}
