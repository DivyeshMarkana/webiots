import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  isLoggin: boolean

  register_form = new FormGroup({
    username: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  })

  register() {
    this.auth.loggedIn = true

    this.isLoggin = this.auth.loggedIn
    this.router.navigate(['/todo-dashboard'])

    localStorage.setItem('login-state', JSON.stringify(this.isLoggin))
  }

}
