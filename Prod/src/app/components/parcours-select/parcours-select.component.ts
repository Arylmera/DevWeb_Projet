import { Component, OnInit } from '@angular/core';
import {faDownload} from '@fortawesome/free-solid-svg-icons/faDownload';
import {PointsService} from '../../services/points/points.service';

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
  parcoursName: string;

  parcours;
  parcours_points;

  ngOnInit(): void {
    this.pointsService.recupParcours().subscribe( data => {
      this.parcoursList = data;
    });
  }

  loadParcours() {
    console.log(this.parcoursNum);
    this.pointsService.recupParcoursPointsById(this.parcoursNum).subscribe( data => {
      console.log(this.parcoursPointList);
    });
    this.pointsService.recupParcoursById(this.parcoursNum).subscribe( data => {
      this.parcoursName = data[0].nameParcours;
      console.log(this.parcoursName);
      this.parcours = '../../assets/Parcours/' + this.parcoursName + '.png';
      this.parcours_points = '../../assets/Parcours/' + this.parcoursName + '-Points.png';
    });
  }

  numberOfPoints() {
    let size = 0, key;
    for (key in this.parcoursPointList) {
      if (this.parcoursPointList.hasOwnProperty(key)) { size++; }
    }
    return size;
  }
}
