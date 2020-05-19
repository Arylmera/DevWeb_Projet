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
  ) {}

  ngOnInit(): void {

    // Si l'utilisateur est déjà connecté le redirige vers la page d'accueil
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }

    // Initie les controls du formulaire
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // récupération des entrées du fromulaire
  get f() { return this.loginForm.controls; }

  connect(): void {

    this.submitted = true;

    this.alertService.clear();

    // Si formulaire invalide
    if (this.loginForm.invalid) {
      return;
    }

    // loading = true permet l'affichage de la roue de chargement
    this.loading = true;

    // Appel à la fonction de connection
    this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        // Si la requete sql a renvoyé une réponse
        () => {
          this.router.navigate(['/']);
        },
        // Si la requete sql a renvoyé une erreur
        () => {
          this.alertService.error('Nom d\'utilisateur ou mot de passe incorrect.\n Veuillez réessayer ou vous inscrire.');
          this.loading = false;
          });

  }

}
