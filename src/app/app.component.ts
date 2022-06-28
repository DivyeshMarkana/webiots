import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router) {}
  title = 'webiots';

  isLoggedIn:boolean 

  logout() {
    this.auth.loggedIn = false
    this.auth.logOut()
    // this.isLoggedIn = false
    localStorage.clear()
    console.log('logout');
    this.router.navigate(['/Login'])
    
  }
}
