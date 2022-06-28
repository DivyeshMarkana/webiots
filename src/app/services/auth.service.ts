import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn: boolean = false 

  logIn(){
   return this.loggedIn 
  }

  logOut(){
   return this.loggedIn
  }
}
