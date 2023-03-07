import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from "../user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../User";
import { Role } from "../../role/role";
import { RoleService } from "../../role/role.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {

  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) { }

  createUserForm!: FormGroup
  roles: Array<Role> = []
  roleSelect: string = ''

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.getRolesList()
    this.createUserForm = this.formBuilder.group({
      name: ["", Validators.required],
      role_id: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  changeRole() {
    this.createUserForm.patchValue({
      role_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  createUser(user: User) {
    this.userService.createUser(user).subscribe(() => {
      this.createUserForm.reset()
      this.emitConfirmCreation(false)
    })
  }
}
