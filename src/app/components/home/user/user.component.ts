import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { User} from "./User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: User | undefined

  constructor(private userService: UserService) { }

  users: Array<User> = []
  deleteModalActive: boolean = false
  createModalActive: boolean = false
  updateModalActive: boolean = false
  selectedUser: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteUser(this.selectedUser.id)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getUsersList()
    this.createModalActive = false
  }

  confirmUpdate() {
    this.getUsersList()
    this.updateModalActive = false
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(user => {
      this.user = user
      this.getUsersList()
    })
  }

  getUsersList(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  ngOnInit(): void {
    this.getUsersList()
  }
}
