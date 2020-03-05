import { Injectable } from '@angular/core';
import { PointsService} from "../points/points.service";


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private pointsService: PointsService) { }

}
