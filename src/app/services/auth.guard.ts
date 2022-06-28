import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {

    // if (this.auth.logIn()) {

    //   this.router.navigate['/todo-dashboard']
    //   return true
    // }
    // return false

    let l = localStorage.getItem('login-state')!
    let p = JSON.parse(l)

    if (p === true) {
        this.router.navigate['/todo-dashboard']
      return true
    }
    return false
  }
}


