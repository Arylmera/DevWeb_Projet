import { Component, OnInit } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  famMapMakerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {

  }

}
