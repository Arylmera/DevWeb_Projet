import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {PointsService} from "../../services/points/points.service";
import {MapComponent} from "../map/map.component";
import {HttpClient} from "@angular/common/http";
import {MapsService} from "../../services/maps/maps.service";

@Component({
  selector: 'app-point-sheet',
  templateUrl: './point-sheet.component.html',
  styleUrls: ['./point-sheet.component.scss']
})
export class PointSheetComponent implements OnInit {

  point: any;
  html: any;
  ready = false;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private pointsService: PointsService,
              private mapsService: MapsService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.ready = false;
    this.pointsService.recupPointById(this.data).subscribe( pointData => {
      this.point = pointData[0];
      this.ready = true;
    })
  }

  /**
   * ouvertre page wiki du point
   * @param name
   */
  goToWiki(name: any) {
    let nameURI = encodeURIComponent(name.trim());
    this.http.get('https://fr.wikipedia.org/w/api.php?action=opensearch&search='+nameURI+'&limit=1&format=json').subscribe( data => {
      console.log(data[0]);
      if(data[0][3]){
        window.open(data[0][3], '_bank');
      }
    });
  }

  /**
   * lancement de la route vers le point
   * @param latLng
   */
  setRoute(latLng: [number, number]){
    this.mapsService.SetRoutingCoord(latLng);
  }
}
