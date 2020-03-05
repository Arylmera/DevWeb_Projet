import {Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-easybutton';

declare var fullscreen: any;
const lln = [50.668351,4.611746];
const pointIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/location.svg',
  iconSize: [25, 35],
  iconAnchor: [25, 50],
  shadowAnchor: [25, 25],
  popupAnchor: [-12.5, -50],
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {
  private map;

  public fullscreenOptions: {[key:string]:any} = {
    position: 'topleft',
    title: 'View Fullscreen',
    titleCancel: 'Exit Fullscreen',
  };

  constructor() { }

  ngAfterViewInit() {
    this.initMap();
    this.map.locate({setView: true, maxZoom: 16});
    this.addPoint(50.668351,4.611746,'Louvain La Neuve');
    this.addPoint(50.67, 4.6118, 'Test add point');
  }

  private initMap(): void {

    // création de la map
    this.map = L.map('map').setView([50.668351,4.611746], 15);

    // ajout des tuiles
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', { // 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
        //'| Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      minZoom: 1,
      maxZoom: 20,
    }).addTo(this.map);

    //ajout des boutons
    let centerButton= L.easyButton('fa-globe', function(btn, map){
      helloPopup.setLatLng(map.getCenter()).openOn(map);
    }).addTo( this.map );

  }

  addPoint(lat: number, long: number, description: string){
    let point = L.marker([lat, long], {icon: pointIcon}).addTo(this.map);
    point.bindPopup(description);
  }

}
