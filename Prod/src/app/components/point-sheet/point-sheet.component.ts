import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {PointsService} from "../../services/points/points.service";
import {MapComponent} from "../map/map.component";
import {HttpClient} from "@angular/common/http";
import {MapsService} from "../../services/maps/maps.service";
import {forEach} from "ol/geom/flat/segments";

@Component({
  selector: 'app-point-sheet',
  templateUrl: './point-sheet.component.html',
  styleUrls: ['./point-sheet.component.scss']
})
export class PointSheetComponent implements OnInit {

  point: any;
  html: any;
  ready = false;
  imgURL: any;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private pointsService: PointsService,
              private mapsService: MapsService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.ready = false;
    this.pointsService.recupPointById(this.data).subscribe( pointData => {
      this.point = pointData[0];
      this.ready = true;
      this.getImageFromWiki(this.point.namePoint);
    });
  }

  /**
   * ouvertre page wiki du point
   * @param name
   */
  goToWiki(name: any) {
    let nameURI = encodeURIComponent(name.trim());
    let url = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search="+nameURI+"&limit=1&format=json";
    this.http.get(url).subscribe( data => {
      if(data[3]){
        let wikiUrl = data[3];
        window.open(wikiUrl, '_bank');
      }
    });
  }

  getImageFromWiki(name: any){
    let nameURI = encodeURIComponent(name.trim());
    console.log(nameURI);
    let urlImage = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&formatversion=2&prop=pageimages|pageterms&piprop=original&titles="+nameURI;
    this.http.get(urlImage).subscribe( data => {
      // @ts-ignore
      data = data.query.pages[0];
      // @ts-ignore
      if( data.original){
        // @ts-ignore
        data = data.original.source;
        console.log(data);
      }
      this.imgURL = data;
    });
  }
}
