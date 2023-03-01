import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivateChild {

  constructor(private router:Router) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
