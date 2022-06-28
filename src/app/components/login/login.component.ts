import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private todoService: ToDoService, private router: Router,
    private auth: AuthService) { }

  isLoggin: boolean

  ngOnInit(): void {
  }

  login_form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  })

  logIn() {
    // console.log(this.login_form.value);
    this.auth.loggedIn = true

    this.isLoggin = this.auth.loggedIn
    this.router.navigate(['/todo-dashboard'])

    localStorage.setItem('login-state', JSON.stringify(this.isLoggin))
  }

}
