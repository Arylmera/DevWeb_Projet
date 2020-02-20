import { Component, OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {FourthOFourthComponent} from "../../fourth-o-fourth/fourth-o-fourth.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
