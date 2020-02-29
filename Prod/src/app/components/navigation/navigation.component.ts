import { Component, OnInit } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {faMapPin} from "@fortawesome/free-solid-svg-icons/faMapPin";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faMapPin = faMapPin;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() { }

  ngOnInit(): void {

  }

}
