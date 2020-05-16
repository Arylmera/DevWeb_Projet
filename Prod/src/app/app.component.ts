import {Component} from '@angular/core';
import {LoginService} from './services/login/login.service';
import {User} from './models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

}
