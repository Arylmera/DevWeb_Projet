import {Component, AfterViewInit, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';
import {PointsService} from '../../services/points/points.service';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-routing-machine';
import {control} from "leaflet";
import zoom = control.zoom;

const mapboxAPI = 'pk.eyJ1IjoiYXJ5bG1lcmEiLCJhIjoiY2s3aGZ1OW0zMDk1bzNubW5ya2twdDZxcSJ9.IVUHXKtgN21QPirw0ZVWpQ';
// tslint:disable-next-line:max-line-length
const mapboxStyle = 'https://api.mapbox.com/styles/v1/arylmera/ck7ix7bma010g1io6aa528sla/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJ5bG1lcmEiLCJhIjoiY2s3aGZwYjhqMDNyeDNncXNzb2E1YXU4biJ9.ZwIiUW7BQRCOjwfhgLw6uA';

// lln = [50.668351,4.611746];
// iconMap
const PositionIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/IIcon.svg',
  iconSize: [25, 35],
  iconAnchor: [25, 50],
  popupAnchor: [-12.5, -50],
});
const pointIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/location.svg',
  iconSize: [25, 35],
  iconAnchor: [25, 50],
  popupAnchor: [-12.5, -50],
});
const routingIcon = L.icon({
  iconUrl: '../../../assets/Map/Points/routing-pin.svg',
  iconSize: [25, 35],
  iconAnchor: [25, 50],
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
  private pointToGoLatlong = [50.78, 4.62];

  constructor(private mapsService: MapsService, private pointsService: PointsService) { }

  /**
   * chargement de la page
   */
  ngOnInit(): void {
    this.pointList = this.pointsService.getPointsList();
    console.log(this.pointList);
    this.initMap();
  }

  /**
   * chargement de la dom
   */
  ngAfterViewInit() {
    // geolocation
    this.map.on('load', this.locate());
    this.map.on('locationfound', this.onLocationFound);
    this.lunchRouting();

    //setInterval( () => { this.locate(); }, 1000);
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // ajout des tuiles de carte
    const mapLayer = L.tileLayer( mapboxStyle, { // 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>'
    });
    // création de la map
    this.map = L.map('map', {
      center: ([50.67, 4.61]),
      zoom: 18,
    })
    .addLayer(mapLayer);
    // ajout des points de test
    this.addPoint([50.668351, 4.611746], 'Louvain La Neuve');
    this.addPoint([50.67, 4.6118], 'Test add point');
    // ajout des point de la base de donnée
    this.addPointsFromDb();
  }

  /**
   * helper pour l'ajout d'un point sur la carte
   * @param latlong / description
   */
  addPoint(latlong: [number, number], description: string) {
    const point = L.marker(latlong, {icon: pointIcon}).setOpacity(0.8);
    const popupText = description + '<br> <button (click)="goToPoint(' + latlong + ')">Aller ici</button>'
    const popup = L.popup().setContent(popupText);
    point.bindPopup(popup);
    point.addTo(this.map);
  }

  goToPoint(latlong: [number, number]) {
    this.pointToGoLatlong = latlong;
    console.log('lunching routing');
    this.lunchRouting();
  }

  /**
   * when one point is clicked set pointToGoLatlong to position
   */
  private clickOnPoint(latlong: [number, number]) {
    this.pointToGoLatlong = latlong;
    console.log('on your way from your position to : ' + this.pointToGoLatlong);
  }

  /**
   * ajout des points depuis la base de donnée
   */
  private addPointsFromDb() {
    console.log('adding point from database with');
    for (const point in this.pointList) {
      if (this.pointList[point]) {
        console.log(this.pointList[point]);
        console.log(this.pointList[point].lat);
        this.addPoint([this.pointList[point].lat, this.pointList[point].long], this.pointList[point].description);
      }
    }
    console.log('print from db added');
  }

  /**
   * localisation
   */
  private locate() {
    this.map.locate({setView: true , watch: true , maxZoom: 18});
    this.map.setZoom(18);
  }

  /**
   * si position trouvée
   */
  private onLocationFound(e) {
    const radius = e.accuracy / 2;
    this.currentLatlong = e.latlng;
    console.log('you are currently at : ' + this.currentLatlong + ' with in : ' + radius + ' meters');
  }

  /**
   * calculate the route between 2 points
   */
  lunchRouting() {
    const mapRouter = L.Routing.control({
      router: (L.Routing as any).mapbox( mapboxAPI, {
        profile: 'mapbox/walking',
        language: 'fr',
        polylinePrecision: 6
      }),
      waypoints: [
        L.latLng([this.currentLatlong[0], this.currentLatlong[1]]),
        L.latLng([this.pointToGoLatlong[0], this.pointToGoLatlong[1]])
      ],
      fitSelectedRoutes : false,
      routeWhileDragging: false,
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
