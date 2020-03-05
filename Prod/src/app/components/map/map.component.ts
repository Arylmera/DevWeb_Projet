import {Component, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';

const lln = [50.668351,4.611746];
const pointIcon = L.icon({
  iconUrl: '../../../assets/pointIcon.png',
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
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
      minZoom: 1,
      maxZoom: 20,
    }).addTo(this.map);
  }

  addPoint(lat: number, long: number, description: string){
    let point = L.marker([lat, long], {icon: pointIcon}).addTo(this.map);
    point.bindPopup(description);
  }

}
