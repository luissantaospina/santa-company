import { Component, OnInit } from '@angular/core';
import { RoleService } from "./role.service";
import { Role } from "./role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  constructor(private roleService: RoleService) {}

  roles: Array<Role> = []
  deleteModalActive: boolean = false
  createModalActive: boolean = false
  updateModalActive: boolean = false
  selectedRole: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteRole(this.selectedRole.id)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getRolesList()
    this.createModalActive = false
  }

  confirmUpdate() {
    this.getRolesList()
    this.updateModalActive = false
  }

  deleteRole(roleId: string): void {
    this.roleService.deleteRole(roleId).subscribe(() => {
      this.getRolesList()
    })
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles
    })
  }

  ngOnInit(): void {
    this.getRolesList()
  }
}
