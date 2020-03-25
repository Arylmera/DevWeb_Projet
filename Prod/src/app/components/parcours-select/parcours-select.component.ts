import { Component, OnInit } from '@angular/core';
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";

@Component({
  selector: 'app-parcours-select',
  templateUrl: './parcours-select.component.html',
  styleUrls: ['./parcours-select.component.scss']
})
export class ParcoursSelectComponent implements OnInit {
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
