import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../../services/alert/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: any;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  connect(form): void {

    this.submitted = true;

    this.loading = true;

    this.loginService.login(form.value.username.value, form.value.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
