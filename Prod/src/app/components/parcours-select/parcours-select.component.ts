import { Component, OnInit } from '@angular/core';
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {PointsService} from "../../services/points/points.service";

@Component({
  selector: 'app-parcours-select',
  templateUrl: './parcours-select.component.html',
  styleUrls: ['./parcours-select.component.scss']
})
export class ParcoursSelectComponent implements OnInit {

  constructor(private pointsService: PointsService) { }

  faDownload = faDownload;

  parcoursList: any;

  ngOnInit(): void {
    this.pointsService.recupParcours().subscribe( data => {
      this.parcoursList = data;
    })
  }

}
