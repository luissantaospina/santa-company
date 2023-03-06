import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RoleService } from "../role.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role } from "../role";

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html'
})
export class RoleCreateComponent implements OnInit {

  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private roleService: RoleService,
    private formBuilder: FormBuilder
  ) { }

  createRoleForm!: FormGroup

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.createRoleForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
  }

  createRole(role: Role) {
    this.roleService.createRole(role).subscribe(() => {
      this.createRoleForm.reset()
      this.emitConfirmCreation(false)
    })
  }
}
