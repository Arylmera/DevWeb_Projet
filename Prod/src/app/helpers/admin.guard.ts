import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../services/login/login.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authenticationService.currentUserValue;

    // Vérifie si l'utilisateur est bien admin
    // pourrait aussi etre implenté en tant boolean dans le model user (gestion des admins necessaires depuis la table utilisateurs)
    if (currentUser.username === 'admin') {
      // True va permettre l'accès
      return true;
    }

  }

}
