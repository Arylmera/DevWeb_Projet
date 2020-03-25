import {AfterContentInit, Component, OnInit} from '@angular/core';
import {PointListComponent} from '../point-list/point-list.component';
import {ActivatedRoute} from '@angular/router';
import {PointsService} from '../../services/points/points.service';
@Component({
  selector: 'app-point-info',
  providers: [PointListComponent],
  templateUrl: './point-info.component.html',
  styleUrls: ['./point-info.component.scss']
})
export class PointInfoComponent implements OnInit {

  public point: any;

  constructor(private pointList: PointListComponent,
              private route: ActivatedRoute,
              private pointsService: PointsService) { }

  ngOnInit(): void {
    this.pointsService.recupPointById(Number(this.route.snapshot.params['id'])).subscribe( data => {
      this.point = data[0];
      console.log(this.point);
    });
  }

}
