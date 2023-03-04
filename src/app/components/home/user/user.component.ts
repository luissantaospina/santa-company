import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./User";
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: User | undefined

  constructor(
    private userService: UserService,
    // private _snackBar: MatSnackBar
  ) { }

  users: Array<User> = []

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(user => {
      this.user = user
    })
    this.openSnackBar('Usuario eliminado exitosamente')
    this.getUsersList()
  }

  getUsersList(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  ngOnInit(): void {
    this.getUsersList()
  }

  openSnackBar(message: string) {
    // this._snackBar.open(
    //   message, '', {
    //     duration: 4000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top'
    //   }
    // );
  }
}
