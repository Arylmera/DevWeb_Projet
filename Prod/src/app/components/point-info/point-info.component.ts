import {Component, Input, OnInit} from '@angular/core';
import {PointListComponent} from "../point-list/point-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-point-info',
  providers: [PointListComponent],
  templateUrl: './point-info.component.html',
  styleUrls: ['./point-info.component.scss']
})
export class PointInfoComponent implements OnInit {


  id: number;
  name: string;
  description: string;
  coord: number[];
  caract: number[];


  constructor(private pointList: PointListComponent,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    console.log(this.id);
    console.log(this.pointList.getPointById(this.id));
    this.name = this.pointList.getPointById(this.id).name;
    this.description = this.pointList.getPointById(this.id).description;
    this.coord = this.pointList.getPointById(this.id).coord;
    this.caract = this.pointList.getPointById(this.id).caract;
  }

}
