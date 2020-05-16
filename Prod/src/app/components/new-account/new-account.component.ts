import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert/alert.service';
import {LoginService} from '../../services/login/login.service';
import {AccountService} from '../../services/account/account.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  hide: any;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private accountService: AccountService
  ) {
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  register(form): void {

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    this.accountService.register(form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
