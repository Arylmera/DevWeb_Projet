import { Component, OnInit } from '@angular/core';

class Point {
  id: number;
  name: string;
  description: string;
  coord: number[];
  caract: number[];

  constructor(id: number, name: string, description: string, coord: number[], caract: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coord = coord;
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

  pointList: Point[] = [];
  caractList: Caract[] = [];
  caractListSelected: Caract[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++){
      let caractNumber = [Math.floor(Math.random() * Math.floor(10)),Math.floor(Math.random() * Math.floor(10)),Math.floor(Math.random() * Math.floor(10))];
      let p = new Point(i,'test point' + i, 'description du point', [i,i], caractNumber);
      this.pointList[i] = p;
    }
    for(let i = 0; i < 10; i++){
      let c = new Caract(i,'caract nbr '+i);
      this.caractList[i] = c;
    }
  }

  selectPointsFromCateg() {
    let caratSelected = <any> document.getElementsByName('caractList');
    for( let i = 0; i < caratSelected.length;i++){
      if (caratSelected[i].checked){
        this.caractListSelected.push(caratSelected.value);
      }
    }
    if (this.caractListSelected.length === 0){
      this.caractListSelected = [...this.caractList];
    }
    console.log(this.caractList);
    console.log(this.caractListSelected);
  }
}
