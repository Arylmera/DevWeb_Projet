import {Component, AfterViewInit} from '@angular/core';
import {MapsService} from "../../services/maps/maps.service";
import * as L from 'leaflet';
import 'leaflet-easybutton';
import "leaflet-routing-machine";


const lln = [50.668351,4.611746];

// iconMap
const PositionIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/IIcon.svg',
  iconSize: [25, 35],
  iconAnchor: [25, 50],
  shadowAnchor: [25, 25],
  popupAnchor: [-12.5, -50],
});
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
  private current_latlong: [number,number] = [50.67,4.61];
  private pointToGo_latlong: [number, number];

  constructor() { }

  ngAfterViewInit() {
    this.initMap();
    //ajout des points
    this.addPoint([50.668351,4.611746],'Louvain La Neuve');
    this.addPoint([50.67, 4.6118], 'Test add point');
    // geolocation
    this.map.locate({setView: true ,watch: true , maxZoom: 20});
    this.map.on('locationfound', this.onLocationFound);
    this.lunchRouting();
  }

  /**
   * calculate the route between 2 points
   */
  lunchRouting() {
    L.Routing.control({
      waypoints: [
        L.latLng(this.current_latlong),
        L.latLng(this.pointToGo_latlong)
      ],
      routeWhileDragging: false
    }).addTo(this.map);
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // création de la map
    this.map = L.map('map').setView([50.668351,4.611746], 17);
    // ajout des tuiles
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
      minZoom: 1,
      maxZoom: 20,
    }).addTo(this.map);
    //ajout des boutons
  }

  /**
   * helper pour l'ajout d'un point sur la carte
   * @param latlong
   * @param description
   */
  addPoint(latlong: [number,number], description: string){
    let point = L.marker(latlong, {icon: pointIcon}).addTo(this.map).setOpacity(0.8);
    let popup = L.popup().setContent(description);
    point.bindPopup(popup);
  }

  /**
   * when one point is clicked set pointToGo_latlong to position
   */
  private clickOnPoint(latlong: [number,number]) {
    this.pointToGo_latlong = latlong;
    this.map.locate({setView: true ,watch: true , maxZoom: 20});
    console.log('on your way from your position to : ' + this.pointToGo_latlong);
  }

  /**
   * si géolocalisé
   * @param e
   */
  private onLocationFound(e) {
    let radius = e.accuracy / 2;
    this.current_latlong = e.latlng;
    console.log("you are currently at : " + this.current_latlong);
    L.marker(e.latlng, {icon: PositionIcon}).addTo(this.map).setOpacity(0.8);
    L.circle(e.latlng, radius).addTo(this.map);
    this.map.panTo(e.latlng);
    this.map.setZoom(17);
  }

}
