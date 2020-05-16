import { Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
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
  }

  ngOnInit(): void {
  }

  openCam(): void {
    this.dialog.open(CamComponent);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
