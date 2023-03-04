import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service'
import { Router } from '@angular/router'
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(
    private api:LoginService,
    // private _snackBar: MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['home/orders'])
    }
  }

  onLogin(form: any) {
    this.api.login(form).subscribe({
      next: this.loginSuccess.bind(this),
      error: this.loginError.bind(this)
    });
  }

  loginSuccess(loginResponse: any) {
    localStorage.setItem("token", loginResponse.access_token)
    localStorage.setItem('permissions', JSON.stringify(loginResponse.permissions))
    localStorage.setItem('user', JSON.stringify(loginResponse.user.id))
    this.router.navigate(['inicio/ordenes'])
  }

  loginError(loginError: any) {
    this.openSnackBar('El email y/o contraseña es incorrecto')
    this.loginForm.reset()
  }

  openSnackBar(message: string) {
    // this._snackBar.open(
    //   message, '', {
    //     duration: 5000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top'
    //   }
    // );
  }
}
