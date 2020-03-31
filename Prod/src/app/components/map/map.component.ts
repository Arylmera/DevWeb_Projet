import {Component, AfterViewInit, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';
import {PointsService} from '../../services/points/points.service';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-routing-machine';
import 'leaflet-gps';
import * as $ from 'jquery';
import {ActivatedRoute} from "@angular/router";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {PointSheetComponent} from "../point-sheet/point-sheet.component";

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
  private pointList: any = [];
  private positionMarker;
  private positionCircle;
  private mapRouter;
  private parcoursId = 0;
  private parcoursName;

  private currentlatlng = [50.67, 4.61];
  mapTitle = 'Carte des Arbres';

  constructor(private mapsService: MapsService,
              private route: ActivatedRoute,
              private pointsService: PointsService,
              private pointSheet: MatBottomSheet
              ) { }

  /**
   * chargement de la page
   */
  ngOnInit(): void {
    // add de tout les points
    this.parcoursId = Number(this.route.snapshot.params['id']);
    if (typeof this.parcoursId != "number"){ this.parcoursId = 0}
    console.log('chargement de la carte avec le parcours : '+ this.parcoursId);
    if (this.parcoursId) {
      this.pointsService.recupParcoursPointsById(this.parcoursId).subscribe( data => {
        let pointIdList = data;
        this.pointsService.recupParcoursById(this.parcoursId).subscribe( data => {
          this.parcoursName = data[0].nameParcours;
          this.setTitle();
        });
        for (let id in pointIdList) {
          this.pointsService.recupPointById(Number(id)).subscribe( data => {
            if (!this.pointList[0]){
              this.pointList = [data[0]];
            }
            else {
              this.pointList.push(data[0]);
            }
            console.log(Object.keys(this.pointList).length);
            console.log(Object.keys(pointIdList).length);
            if(Object.keys(this.pointList).length +1 == Object.keys(pointIdList).length){
              this.addPointsFromDb();
            }
          })
        }
      });
    }
    else {
      this.pointsService.recupPoints().subscribe(data => {
        this.pointList = data;
        this.addPointsFromDb();
      });
    }
    this.initMap();
    this.initPositionMaker();
  }

  /**
   * chargement de la dom
   */
  ngAfterViewInit() {
    // geolocation
    this.map.on('load', this.locate()); // lancement de la géolocalisation
    this.setUpRouting(); // setup layer routing
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // ajout des tuiles de carte
    const mapLayer = L.tileLayer( mapboxStyle, { // 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
      attribution: '© <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a>' +
        '© <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a>' +
        '<strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>' +
        'Improve this map</a></strong>'
    });
    // création de la map
    this.map = L.map('map', {
      center: ([50.67, 4.61]),
      zoom: 16
    })
      .addLayer(mapLayer);
    L.easyButton('<img src="../../../assets/Map/target.png" width="10" height="10" class="img-resposive">',
      ((btn, map) => {
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
   * @param vernaculaire
   * @param name
   * @param description
   * @param id
   */
  addPoint(latlng: [number, number], id: number) {
    const point = L.marker(latlng, {icon: pointIcon}).setOpacity(0.8);
    point.on('click', () => {
      this.openSheet(id);
    });
    point.addTo(this.map);
  }

  /**
   * open BottomSheet based on point
   */
  openSheet(id: number){
    console.log('open popup from point');
    console.log(id);
    this.pointSheet.open(PointSheetComponent, {
      data: id
    });
  }

  /**
   * lancement routing vers le point selectioné
   * @param latlng
   */
  goToPoint(latLng: [number, number]) {
    console.log('lunching routing to :' + latLng);
    this.lunchRouting(latLng);
  }

  /**
   * ajout des points depuis la base de donnée
   */
  private addPointsFromDb() {
    console.log('adding points from database with');
    console.log(this.pointList);
    this.pointList.forEach(point => {
      let pXY = L.point(point.latitudePoint, point.longitudePoint);
      let pLatLng = this.map.layerPointToLatLng(pXY);
      this.addPoint([pLatLng.lat, pLatLng.lng], point.idPoint);
      console.log(pLatLng);
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
   * setup du modul de routing
   */
  setUpRouting() {
    this.mapRouter = L.Routing.control({
      router: (L.Routing as any).mapbox( mapboxAPI, {
        profile: 'mapbox/walking',
        language: 'fr',
        polylinePrecision: 6
      }),
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
    }).addTo(this.map);
  }

  /**
   * calculate the route between 2 points
   */
  lunchRouting(latLng: [number, number]) {
    this.mapRouter.getPlan().setWaypoints([
      L.latLng([this.currentlatlng[0], this.currentlatlng[1]]),
      L.latLng(latLng)
    ]);
  }

  /**
   * définition dynamique du titre de la carte
   */
  private setTitle() {
    this.mapTitle = 'Carte du '+ this.parcoursName;
  }
}
