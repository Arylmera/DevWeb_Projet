import { Component } from '@angular/core';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {faMapPin} from '@fortawesome/free-solid-svg-icons/faMapPin';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt';
import {faRoute} from '@fortawesome/free-solid-svg-icons/faRoute';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {CamComponent} from '../cam/cam.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent  {
  currentUser: User;
  faHome = faHome;
  faMapPin = faMapPin;
  faMapMarkedAlt = faMapMarkedAlt;
  faRoute = faRoute;
  faCamera = faCamera;
  faSignOutAlt = faSignOutAlt;
  faCog = faCog;


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService
  ) {
    // Récupération de l'utilisateur -> sert à vérifier si c'est un admin et lui afficher ou non l'accès à la page admin
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
    document.getElementById('user').innerHTML = this.currentUser.username;
  }

  // Ouverture du component de scan dans un dialog
  openCam(): void {
    this.dialog.open(CamComponent);
  }

  // Logout de l'utilisateur
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
