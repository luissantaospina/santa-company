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
  selectedRole: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteRole(this.selectedRole.id)
    this.deleteModalActive = false
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

  selectDeleteRole(role: Role) {
    this.selectedRole = role
    this.deleteModalActive = true
  }
}
