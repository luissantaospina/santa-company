import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from "../user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../User";
import { Role } from "../../role/role";
import { RoleService } from "../../role/role.service";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html'
})
export class UserUpdateComponent implements OnInit {

  @Input() userId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) { }

  userSave: any
  roles: Array<Role> = []
  roleSelect: string = ''
  updateUserForm!: FormGroup

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.getRolesList()
    this.getUser(this.userId)
    this.updateUserForm = this.formBuilder.group({
      name: ["", Validators.required],
      role_id: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  changeRole() {
    this.updateUserForm.patchValue({
      role_id: this.roleSelect
    });
  }

  getRolesList(): void {
    this.roleService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles
    })
  }

  getUser(id: string): void {
    this.userService.getUser(id).subscribe(user => {
      this.userSave = user
      this.roleSelect = this.userSave.role.id
      this.updateUserForm = this.formBuilder.group({
        name: [this.userSave.name, Validators.required],
        role_id: [this.userSave.role.id, Validators.required],
        email: [this.userSave.email, Validators.required],
        password: ["", Validators.required]
      })
    })
  }

  updateUser(user: User) {
    this.userService.updateUser(this.userId, user).subscribe(() => {
      this.updateUserForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
