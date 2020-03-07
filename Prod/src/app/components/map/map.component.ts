import {Component, AfterViewInit, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';
import {PointsService} from '../../services/points/points.service';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-routing-machine';

const mapBoxKey = 'pk.eyJ1IjoiYXJ5bG1lcmEiLCJhIjoiY2s3aGZ1OW0zMDk1bzNubW5ya2twdDZxcSJ9.IVUHXKtgN21QPirw0ZVWpQ';
// lln = [50.668351,4.611746];
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
const routingIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/routing-pin.svg',
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

export class MapComponent implements AfterViewInit, OnInit {
  private map;
  private pointList: any[] = [];
  private currentLatlong = [50.67, 4.61];
  private pointToGoLatlong = [50.67, 4.61];

  constructor(private mapsService: MapsService, private pointsService: PointsService) { }

  ngOnInit(): void {
    this.pointList = this.pointsService.getPointsList();
    console.log(this.pointList);
    this.initMap();
  }

  ngAfterViewInit() {
    // geolocation
    this.map.on('locationfound', this.onLocationFound);
    this.lunchRouting();

    setInterval(this.locate, 3000);
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // création de la map
    this.map = L.map('map').setView([50.668351, 4.611746], 17);
    // ajout des tuiles
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
      minZoom: 1,
      maxZoom: 20,
    }).addTo(this.map);
    // ajout des points
    this.addPoint([50.668351, 4.611746], 'Louvain La Neuve');
    this.addPoint([50.67, 4.6118], 'Test add point');
    console.log('adding point from database with');
    for (const point in this.pointList) {
      if (this.pointList[point]) {
        this.addPoint([this.pointList[point].lat, this.pointList[point].long], this.pointList[point].description);
      }
    }
    console.log('print from db added');
  }

  /**
   * helper pour l'ajout d'un point sur la carte
   * @param latlong
   * @param description
   */
  addPoint(latlong: [number, number], description: string) {
    const point = L.marker(latlong, {icon: pointIcon}).addTo(this.map).setOpacity(0.8);
    const popup = L.popup().setContent(description);
    point.bindPopup(popup);
  }

  /**
   * when one point is clicked set pointToGoLatlong to position
   */
  private clickOnPoint(latlong: [number, number]) {
    this.pointToGoLatlong = latlong;
    this.map.locate({setView: true , watch: true , maxZoom: 20});
    console.log('on your way from your position to : ' + this.pointToGoLatlong);
  }

  private locate() {
    this.map.locate({setView: true , watch: true , maxZoom: 20});
  }

  /**
   * si géolocalisé
   * @param e
   */
  private onLocationFound(e) {
    const radius = e.accuracy / 2;
    this.currentLatlong = e.latlng;
    console.log('you are currently at : ' + this.currentLatlong);
    // L.marker(e.latlng, {icon: PositionIcon}).addTo(this.map).setOpacity(0.8);
    // L.circle(e.latlng, radius).addTo(this.map);
    // this.map.panTo(e.latlng);
    // this.map.setZoom(17);
  }

  /**
   * calculate the route between 2 points
   */
  lunchRouting() {
    const options = { profile: 'mapbox/walking', polylinePrecision: 6 };
    const mapRouter = L.Routing.control({
      router: (L.Routing as any).mapbox( mapBoxKey, options),
      waypoints: [
        L.latLng([this.currentLatlong[0], this.currentLatlong[1]]),
        L.latLng([this.pointToGoLatlong[0], this.pointToGoLatlong[1]])
      ],
      fitSelectedRoutes : false,
      routeWhileDragging: false,
      autoRoute: false,
      showAlternatives: false,
      collapsible: true,
      lineOptions: {
        styles: [{
          color: 'green',
          opacity: 1,
          weight: 3
        }]
      },
    });
    mapRouter.addTo(this.map);
  }

}
