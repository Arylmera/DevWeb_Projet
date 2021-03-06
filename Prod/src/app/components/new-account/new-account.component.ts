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
  ) {}

  ngOnInit(): void {

    // Si l'utilisateur est déjà connecté le redirige vers la page d'accueil
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }

    // Initie les controls du formulaire
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
    });

  }

  // Récupération du formulaire
  get f() { return this.registerForm.controls; }

  register(): void {

    this.submitted = true;

    this.alertService.clear();

    // Si formulaire invalide
    if (this.registerForm.invalid) {
      return;
    }

    // loading = true permet l'affichage de la roue de chargment
    this.loading = true;

    // Appel de la requete d'enregistrement
    this.accountService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        // Si la requete réussi
        ()  => {
          this.alertService.success('Inscription réussie.', true);
          this.router.navigate(['/login']);
        },
        // Si une erreur est renvoyée
        () => {
          this.alertService.error('Ce d\'utilisateur éxiste déjà,\n veuillez en choisir un autre.');
          this.loading = false;
          });

  }

}
