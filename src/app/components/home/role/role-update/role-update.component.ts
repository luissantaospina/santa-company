import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RoleService } from "../role.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role } from "../role";
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html'
})
export class RoleUpdateComponent implements OnInit {

  @Input() roleId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  role: any
  roleSave: any
  updateRoleForm!: FormGroup

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.getRole(this.roleId)
    this.updateRoleForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
  }

  getRole(id: string): void {
    this.roleService.getRole(id).subscribe(role => {
      this.roleSave = role
      this.updateRoleForm = this.formBuilder.group({
        nombre: [this.roleSave.nombre, Validators.required]
      })
    })
  }

  updateRole(role: Role) {
    this.roleService.updateRole(this.roleId, role).subscribe(() => {
      this.updateRoleForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
