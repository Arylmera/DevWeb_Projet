import { Component, OnInit } from '@angular/core';
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {PointsService} from "../../services/points/points.service";
import {forEach} from "ol/geom/flat/segments";

@Component({
  selector: 'app-parcours-select',
  templateUrl: './parcours-select.component.html',
  styleUrls: ['./parcours-select.component.scss']
})
export class ParcoursSelectComponent implements OnInit {

  constructor(private pointsService: PointsService) { }

  faDownload = faDownload;

  parcoursList: any;
  parcoursPointList: any;
  parcoursNum: number;
  currentParcoursPoints: any[] = [];

  ngOnInit(): void {
    this.pointsService.recupParcours().subscribe( data => {
      this.parcoursList = data;
    })
  }

  loadParcours() {
    console.log(this.parcoursNum);
    this.pointsService.recupParcoursPointsById(this.parcoursNum).subscribe( data => {
      this.parcoursPointList = data;
      this.loadPoints();
    });
  }

  loadPoints() {
    this.currentParcoursPoints = [];
    for (let pointParcours of this.parcoursPointList) {
      this.pointsService.recupPointById(pointParcours.idPoint).subscribe( data => {
        let point = data[0];
        this.currentParcoursPoints.push(point);
      })
    }
  }
}
