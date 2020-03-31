import { Injectable } from '@angular/core';
import { PointsService} from '../points/points.service';
import {MapComponent} from "../../components/map/map.component";
import * as L from "leaflet";


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private pointsService: PointsService) { }

  SetRoutingCoord(latLng: [number, number]){
    console.log(latLng);
  }
}
