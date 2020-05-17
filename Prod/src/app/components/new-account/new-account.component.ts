import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert/alert.service';
import {LoginService} from '../../services/login/login.service';
import {AccountService} from '../../services/account/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  hide: any;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
    });
  }

  get f() { return this.registerForm.controls; }

  register(): void {

    this.submitted = true;

    this.alertService.clear();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        ()  => {
          this.alertService.success('Inscription Réussie.', true);
          this.router.navigate(['/login']);
        },
        error => {

          if (error.status === '403') {
            this.alertService.error('Nom d\'utilisateur déjà utilisé.\n Veuillez en choisir un autre.');
            this.loading = false;
          } else {
            this.alertService.error(error);
            this.loading = false;
          }});

  }

}
