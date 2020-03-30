import { Component, OnInit} from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {faMapPin} from "@fortawesome/free-solid-svg-icons/faMapPin";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faRoute} from "@fortawesome/free-solid-svg-icons/faRoute";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {CamComponent} from "../cam/cam.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faMapPin = faMapPin;
  faMapMarkedAlt = faMapMarkedAlt;
  faRoute = faRoute;
  faCamera = faCamera;


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openCam(): void {
    this.dialog.open(CamComponent, {
      height: '50%',
      width: '30%',
    });
  }

}
