import {Component, AfterViewInit, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';
import {PointsService} from '../../services/points/points.service';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-routing-machine';
import 'leaflet-gps';

const mapboxAPI = 'pk.eyJ1IjoiYXJ5bG1lcmEiLCJhIjoiY2s3aGZ1OW0zMDk1bzNubW5ya2twdDZxcSJ9.IVUHXKtgN21QPirw0ZVWpQ';
const mapboxStyle = 'https://api.mapbox.com/styles/v1/arylmera/ck7ix7bma010g1io6aa528sla/tiles/256/{z}/{x}/{y}@2x?access_token='+ mapboxAPI;

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
  private positionMarker;
  private positionCircle;

  constructor(private mapsService: MapsService, private pointsService: PointsService) { }

  /**
   * chargement de la page
   */
  ngOnInit(): void {
    this.pointList = this.pointsService.getPointsList();
    this.initMap();
    this.initPositionMaker();
  }

  /**
   * chargement de la dom
   */
  ngAfterViewInit() {
    // geolocation
    this.map.on('load', this.locate());
    //this.lunchRouting();
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
   * initalisation du marker de position et de précision
   */
  private initPositionMaker(){
    this.positionMarker = L.marker([0,0], {icon: PositionIcon})
      .setOpacity(0.8)
      .bindPopup(L.popup().setContent('you are here'));
    this.positionMarker.addTo(this.map);
    this.positionCircle = L.circle([0,0], 0, {
      opacity: 0.5,
      color: 'green'
    });
    this.positionMarker.addTo(this.map);
  }

  /**
   * définition de la positon du marker de position
   * @param position
   */
  private setPositionMarker(position: any){
    this.positionMarker.setLatLng([position.latlng.lat, position.latlng.lng]);
    this.positionCircle.setLatLng([position.latlng.lat, position.latlng.lng]);
    this.positionCircle.setRadius( position.accuracy / 2 );
  }

  /**
   * helper pour l'ajout d'un point sur la carte
   * @param latlong / description
   */
  addPoint(latlong: [number, number], description: string) {
    const point = L.marker(latlong, {icon: pointIcon}).setOpacity(0.8);
    const popupText = description + '<br> <button (click)="goToPoint(' + latlong + ')">Aller ici</button>';
    const popup = L.popup().setContent(popupText);
    point.bindPopup(popup);
    point.addTo(this.map);
  }

  /**
   * lancement routing vers le point selectioné
   * @param latlong
   */
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
    console.log(this.pointList);
    for (const point in this.pointList) {
      console.log(point);
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
    this.map.locate(({
      setView : false,
      maxZoom: 120,
      watch : true, // localisation en continu
      enableHighAccuracy : true
    }))
      .on('locationfound', (e) => {
      console.log (' your are at '+  e.latlng + ' with in '+ e.accuracy + 'm');
      this.setPositionMarker(e);
      this.map.panTo([e.latlng.lat, e.latlng.lng]);
    });
    //this.map.setZoom(18);
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
