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
const greenIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-green.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const redIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-red.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const blueIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-blue.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const orangeIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-orange.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const yellowIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-yellow.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const greyIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-grey.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const violetIcon = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-violet.png',
  shadowUrl: '../../../assets/Map/marker/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const positionIcon = greenIcon;
const pointIcon = redIcon;
const routingIcon = blueIcon;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit, OnInit {
  private map;
  private pointList;
  private currentlatlng = [50.67, 4.61];
  private pointToGolatlng = [50.78, 4.62];
  private positionMarker;
  private positionCircle;

  constructor(private mapsService: MapsService, private pointsService: PointsService) { }

  /**
   * chargement de la page
   */
  ngOnInit(): void {
    this.pointsService.recupPoints().subscribe( data => {
      this.pointList = data;
      this.addPointsFromDb();
    });
    this.initMap();
    this.initPositionMaker();
  }

  /**
   * chargement de la dom
   */
  ngAfterViewInit() {
    // geolocation
    this.map.on('load', this.locate()); // lancement de la géolocalisation
    // ajout des points de test
    this.addPoint([50.668351, 4.611746], 'Louvain La Neuve', 'point de test', -1);
    this.addPoint([50.67, 4.6118], 'Test add point', 'point de test', -1);
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // ajout des tuiles de carte
    const mapLayer = L.tileLayer( mapboxStyle, { // 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
      attribution: '© <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a> © <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a> <strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>Improve this map</a></strong>'
    });
    // création de la map
    this.map = L.map('map', {
      center: ([50.67, 4.61]),
      zoom: 18
    })
    .addLayer(mapLayer);
    L.easyButton('<img src="../../../assets/Map/target.png" width="10" height="10" class="img-resposive">', ((btn, map) => {
      map.panTo([this.currentlatlng[0], this.currentlatlng[1]]);
    })).addTo(this.map);
  }

  /**
   * initalisation du marker de position et de précision
   */
  private initPositionMaker(){
    this.positionMarker = L.marker([0,0], {icon: positionIcon})
      .setOpacity(0.8)
      .bindPopup(L.popup().setContent('you are here'));
    this.positionMarker.addTo(this.map);
    this.positionCircle = L.circleMarker([0,0], {
      opacity: 0.5,
      color: 'green'
    });
    this.positionCircle.setRadius(0);
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
   * @param latlng / description
   * @param name
   */
  addPoint(latlng: [number, number], name: string, description: string, id: number) {
    const point = L.marker(latlng, {icon: pointIcon}).setOpacity(0.8);
    let popupContent = name;
    popupContent += '<br> <p>' + description + '</p>';
    popupContent += '<br> <button class="infoBtn btn btn-dark btn-sm" type="button" ng-click="' + this.moreInfo() +'">Info</button>';
    popupContent += '<br> <button class="goToBtn btn btn-dark btn-sm" type="button" ng-click="' + this.goToPoint(latlng) + '">Aller ici</button>';
    const popup = L.popup().setContent(popupContent);
    point.bindPopup(popup);
    point.addTo(this.map);
  }

  /**
   * redirection vers la page des info du point
   * @param id
   */
  moreInfo(){
    console.log('test');
  }

  /**
   * lancement routing vers le point selectioné
   * @param latlng
   */
  goToPoint(latLng: [number, number]) {
    console.log('lunching routing to :' + latLng);
    this.pointToGolatlng = latLng;
    //this.lunchRouting();
  }

  /**
   * ajout des points depuis la base de donnée
   */
  private addPointsFromDb() {
    console.log('adding points from database with');
    console.log(this.pointList);
    this.pointList.forEach(point => {
      this.addPoint([point.latitudePoint, point.latitudePoint], point.namePoint, point.descriptionPoint, point.idPoint);
    });
    console.log('points from db added');
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
      this.currentlatlng = [e.latlng.lat, e.latlng.lng];
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
        L.latLng([this.currentlatlng[0], this.currentlatlng[1]]),
        L.latLng([this.pointToGolatlng[0], this.pointToGolatlng[1]])
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
