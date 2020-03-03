import { Component, OnInit } from '@angular/core';
import {PointsService} from "../../services/points/points.service";

class Point {
  id: number;
  name: string;
  description: string;
  long: number;
  lat: number;
  caract: number[];

  constructor(id: number, name: string, description: string, long: number, lat: number, caract: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.long = long;
    this.lat = lat;
    this.caract = caract;
  }
}
class Caract {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.scss']
})

export class PointListComponent implements OnInit {

  pointList: Point[] = []; // liste total des points depuis la db
  pointListSelected: Point[] = []; // liste des points selectionnés
  caractList: Caract[] = []; // liste total des caractérisitques
  caractListSelected: Caract[] = []; // liste des caractérisitues selectionnés

  constructor(private pointsService: PointsService) { }

  ngOnInit(): void {
    this.pointsService.getPoints().subscribe(data => {
      console.log(data)
    });

    for(let i = 0; i < 10; i++){
      let caractNumber = [Math.floor(Math.random() * Math.floor(10)),Math.floor(Math.random() * Math.floor(10)),Math.floor(Math.random() * Math.floor(10))];
      let p = new Point(i,'test point' + i, 'description du point', 1, 1, caractNumber);
      this.pointList[i] = p;
    }
    for(let i = 0; i < 10; i++){
      let c = new Caract(i,'caract nbr '+i);
      this.caractList[i] = c;
    }
    this.pointListSelected = [...this.pointList];
  }

  /**
   * affichage des points en fonction de la catégorie sélectionnée dans les checkbox
   */
  selectPointsFromCaract() {
    this.caractListSelected = [];
    let caractSelected = <any> document.getElementsByName('caractList');
    for( let i = 0; i < caractSelected.length;i++){
      if (caractSelected[i].checked){
        this.caractListSelected.push(caractSelected[i].value);
      }
    }
    if (this.caractListSelected.length === 0){
      this.caractListSelected = [...this.caractList];
    }

    this.pointListSelected = [];
    for(let i = 0; i < this.pointList.length; i++){
      for(let j = 0; j < this.pointList[i].caract.length; j++) {
        for (let x = 0; x < this.caractListSelected.length; x++) {
          if (this.pointList[i].caract[j] === Number(this.caractListSelected[x])) {
            this.pointListSelected.push(this.pointList[i]);
          }
        }
      }
    }
  }

  /**
   * renvois d'un point par sont id
   * @param id
   * @return point
   */
  getPointById(id: number){
    for(let i = 0; i < this.pointList.length; i++){
      if(this.pointList[i].id == id){
        console.log("returned point :"+ this.pointList[i]);
        return this.pointList[i];
      }
    }
  }
}
