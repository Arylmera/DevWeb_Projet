import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../../services/alert/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get f() { return this.loginForm.controls; }

  connect(): void {

    this.submitted = true;

    this.alertService.clear();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.alertService.success('Connexion réussie.');
          this.router.navigate(['/']);
        },
        error => {

          if (error.status === '403') {
            this.alertService.error('Mot de passe érroné.');
            this.loading = false;
          } else if (error.status === '401') {
            this.alertService.error('Nom d\'utilisateur incorrect ou inexistant,\n veuillez vous inscrire.');
            this.loading = false;
          } else {
            this.alertService.error(error);
            this.loading = false;
          }});

  }

}
