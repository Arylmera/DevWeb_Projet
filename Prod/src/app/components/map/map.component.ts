import {Component, AfterViewInit, OnInit} from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';
import {PointsService} from '../../services/points/points.service';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-routing-machine';
import 'leaflet-gps';
import {ActivatedRoute} from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {PointSheetComponent} from '../point-sheet/point-sheet.component';
import {faTree} from '@fortawesome/free-solid-svg-icons/faTree';

//------------------------------------------------------------
// définition Variables globales
//------------------------------------------------------------

const mapboxAPI = 'pk.eyJ1IjoiYXJ5bG1lcmEiLCJhIjoiY2s3aGZ1OW0zMDk1bzNubW5ya2twdDZxcSJ9.IVUHXKtgN21QPirw0ZVWpQ';
// tslint:disable-next-line:max-line-length
const mapboxStyle = 'https://api.mapbox.com/styles/v1/arylmera/ck7ix7bma010g1io6aa528sla/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapboxAPI;
const routingOptions = {profile: 'mapbox/walking', polylinePrecision: 0};

// iconMap
const markerGreen = new L.Icon({
  iconUrl: '../../../assets/Map/marker/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -34],
  shadowSize: [25, 25]
});
const greenIconLeaf = new L.Icon({
  iconUrl: '../../../assets/Map/marker/leaf-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [25, 25]
});
const redIconLeaf = new L.Icon({
  iconUrl: '../../../assets/Map/marker/leaf-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [25, 25]
});

const positionIcon = markerGreen;
const pointIcon = redIconLeaf;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit, OnInit {

  //------------------------------------------------------------
  // définition Variables locales
  //------------------------------------------------------------

  faTree = faTree;
  private map;
  private pointList: any = [];
  private positionMarker;
  private positionCircle;
  parcoursId = 0;
  private parcoursName;
  private localisationCenter = false;

  // init map variables
  private currentlatlng = [50.67, 4.61];
  mapTitle = 'Carte des Arbres';

  // routing variables
  routingWaypointsBkp: any = [];
  routingWaypoints: any = [];
  routingWayPointsSecondPart: any = [];
  twoPartRouting: boolean = false;
  routingWaypointsCoord: any = [];
  routingControl: any;
  showRouting: boolean = true;
  showRoutingBtn: boolean = false;
  routing: boolean = false;
  loading: boolean = true;
  trajetRdy: boolean = true;

  constructor(private mapsService: MapsService,
              private route: ActivatedRoute,
              private pointsService: PointsService,
              private pointSheet: MatBottomSheet
  ) { }


  //------------------------------------------------------------
  // initalisation
  //------------------------------------------------------------

  /**
   * chargement de la page
   */
  ngOnInit(): void {
    // add de tout les points
    this.parcoursId = Number(this.route.snapshot.params.id);
    if (typeof this.parcoursId != 'number') { this.parcoursId = 0; }
    console.log('chargement de la carte avec le parcours : ' + this.parcoursId);
    if (this.parcoursId) {
      this.pointsService.recupParcoursPointsById(this.parcoursId).subscribe( data => {
        const pointIdList = data;
        this.pointsService.recupParcoursById(this.parcoursId).subscribe( data => {
          this.parcoursName = data[0].nameParcours;
          this.setTitle();
        });
        for (const id in pointIdList) {
          this.pointsService.recupPointById(Number(id)).subscribe( data => {
            if (!this.pointList[0]) {
              this.pointList = [data[0]];
            } else {
              this.pointList.push(data[0]);
            }
            if (Object.keys(this.pointList).length + 1 == Object.keys(pointIdList).length) {
              this.addPointsFromDb();
            }
          });
        }
      });
    } else {
      this.pointsService.recupPoints().subscribe(data => {
        this.pointList = data;
        this.addPointsFromDb();
      });
    }
    if (!this.map) {
      this.initMap();
    }
    this.initPositionMaker();
    this.initRouting();
  }

  /**
   * chargement de la dom
   */
  ngAfterViewInit() {
    // geolocation
    this.map.on('load', this.locate()); // lancement de la géolocalisation
  }

  /**
   * initilaisation de la map
   */
  private initMap(): void {
    // ajout des tuiles de carte
    const mapLayer = L.tileLayer( mapboxStyle, {
      attribution: '© <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a>' +
        '© <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a>' +
        '<strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>' +
        'Improve this map</a></strong>'
    });
    // création de la map
    this.map = L.map('map', {
      center: ([51.673, 2.826]),
      zoom: 17,
      trackResize: true
    })
      .addLayer(mapLayer);
    L.easyButton('<img src="../../../assets/Map/target.png" width="12em" height="auto">',
      ((btn, map) => {
        map.panTo([this.currentlatlng[0], this.currentlatlng[1]]);
      }),
      'Centrer sur moi').addTo(this.map);
  }

  /**
   * initalisation du marker de position et de précision
   */
  private initPositionMaker() {
    this.positionMarker = L.marker([0, 0], {icon: positionIcon})
      .setOpacity(0.8)
      .bindPopup(L.popup().setContent('you are here'));
    this.positionMarker.addTo(this.map);
    this.positionCircle = L.circleMarker([0, 0], {
      opacity: 0.5,
      color: 'green'
    });
    this.positionCircle.setRadius(0);
    this.positionMarker.addTo(this.map);
  }

  //------------------------------------------------------------
  // Localisation
  //------------------------------------------------------------

  /**
   * localisation
   */
  private locate() {
    this.map.locate(({
      setView : false,
      maxZoom: 120,
      watch : false, // localisation en continu
      enableHighAccuracy : true
    }))
      .on('locationfound', (e) => {
        console.log (' your are at ' +  e.latlng + ' with in ' + e.accuracy + 'm');
        this.currentlatlng = [e.latlng.lat, e.latlng.lng];
        this.setPositionMarker(e);
        this.map.panTo([e.latlng.lat, e.latlng.lng]);
        this.loading = false;
      });
  }

  //------------------------------------------------------------
  // Gestion Points
  //------------------------------------------------------------

  /**
   * définition de la positon du marker de position
   * @param position
   */
  private setPositionMarker(position: any) {
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
    const point = L.marker(latlng, {icon: pointIcon}).setOpacity(1);
    point.on('click', () => {
      this.openSheet(id);
    });
    point.addTo(this.map);
  }

  /**
   * ajout des points depuis la base de donnée
   */
  private addPointsFromDb() {
    this.pointList.forEach(point => {
      if (point.disponiblePoint) {
        if (point.latitudePoint > 90 || point.latitudePoint < -90 || point.longitudePoint > 90 || point.longitudePoint < 90) { // si coordonnées XY
          const pLatLng = this.parsPointXYLatLng([point.latitudePoint, point.longitudePoint]);
          this.addPoint([pLatLng.lat, pLatLng.lng], point.idPoint);
          point.latitudePoint = pLatLng.lat;
          point.longitudePoint = pLatLng.lng;
        }
      } else { // si coordonnées LatLong
        this.addPoint([point.latitudePoint, point.longitudePoint], point.idPoint);
      }
    });
    console.log('points from db loaded');
  }

  //------------------------------------------------------------
  // Routing
  //------------------------------------------------------------

  /**
   * initalisation du module de routing
   */
  initRouting() {
    this.routingControl = L.Routing.control({
      router: (L.Routing as any).mapbox(mapboxAPI, routingOptions),
      waypoints: [],
      // @ts-ignore
      createMarker : () => null, // suppression de la création du markeur propre au routing
      routeWhileDragging: false,
      fitSelectedRoutes: 'smart',
      autoRoute: false,
      lineOptions: {
        addWaypoints : false,
        styles: [{
          color: '#43A047',
          opacity: 0.9,
          weight: 3
        }]
      },

    })
      .on('routingstart', () => {
        console.log('plotting routes ...');
      })
      .on('routesfound', (e) => {
        console.log('routing');
      })
      .on('routingerror', () => console.log('error in routing'))
      .addTo(this.map);
  }

  /**
   * lancement du routing sur base de la liste des waypoints
   */
  lunchRouting() {
    this.addRoutingPoint();
    this.routingWaypointsCoord = [];
    this.routingWaypointsCoord.push(L.latLng(this.currentlatlng[0], this.currentlatlng[1]));
    this.routingWaypoints.forEach( point => {
      if(point.disponiblePoint) {
        this.routingWaypointsCoord.push([point.latitudePoint, point.longitudePoint]);
      }
    });
    console.log(this.routingWaypoints);
    this.routingControl.setWaypoints(this.routingWaypointsCoord);
    this.routingControl.route(); // lancement du routing
    this.showRoutingBtn = true;
    this.routing = true;
    if( this.parcoursId){

    }
  }

  /**
   * définition de parcours ou custom
   */
  addRoutingPoint() {
    if (!this.parcoursId) {
      this.addCustomPoint();
    }
  }

  /**
   * ajout des points customs pour le routing
   */
  addCustomPoint() {
    const numberList = this.mapsService.getRoutingPoint();
    this.routingWaypoints = [];
    for (const number of numberList) {
      for (const point of this.pointList) {
        if ( number == point.idPoint) {
          this.routingWaypoints.push(point);
          break;
        }
      }
    }
  }

  /**
   * ajout de tout les points chargé pour création de route
   */
  addAllRoutingPoint() {
    this.routingWaypointsBkp = this.pointList;
    if (this.pointList.length > 24) { // plus de 24 points => en 2 parties
      this.twoPartRouting = true;
      this.mapTitle = 'Carte du ' + this.parcoursName + ' 1er partie';
      for (let i = 0; i < 24; i++) {
        this.routingWaypoints.push(this.pointList[i]);
      }
      for (let i = 24; i < 49; i++) {
        if (this.pointList[i]) {
          this.routingWayPointsSecondPart.push(this.pointList[i]);
        } else {
          break;
        }
      }
      this.routing = false;
    } else {
      this.routingWaypoints = this.pointList;
    }
    this.trajetRdy = true;
    this.lunchRouting();
  }

  /**
   * lanchement de la 2e partie de points du parcours
   */
  addSecondPart() {
    this.mapTitle = 'Carte du ' + this.parcoursName + ' 2e partie';
    this.routingWaypoints = this.routingWayPointsSecondPart;
    console.log('second part');
    this.twoPartRouting = false;
    this.trajetRdy = false;
    this.lunchRouting();
  }

  /**
   * suppression de l'ensembles des routes acutelles et des waypoints
   */
  clearRoute() {
    this.routingWaypoints = [];
    this.mapsService.clearRoutingPoint();
    this.routingControl.setWaypoints([]);
    this.showRoutingBtn = false;
    this.routing = false;
    // si dans un parcours
    if (this.parcoursId){
      this.pointList = this.routingWaypointsBkp; // récupération de la liste des points
      this.routingWayPointsSecondPart = [] // clean de la route
      this.routingWaypoints = [] // clean de la route
      this.twoPartRouting = false; // remise a zero tu routing
      this.trajetRdy = true; // trajet près a etre relancé
      this.setTitle(); // reset titre de la carte
    }
  }

  //------------------------------------------------------------
  // Helpers
  //------------------------------------------------------------

  /**
   * parsing de la coordonée depuis XY vers latLong
   * @param pointXY
   */
  parsPointXYLatLng(pointXY: [number, number]) {
    const point = L.point(pointXY);
    return this.map.layerPointToLatLng(point);
  }

  /**
   * définition dynamique du titre de la carte
   */
  private setTitle() {
    this.mapTitle = 'Carte du ' + this.parcoursName;
  }

  /**
   * actions a effectuer lors de l'ouverture de la liste de navigation
   */
  sidenavOpen() {
    this.addRoutingPoint();
  }

  /**
   * switch affichage de la legende de route
   */
  showRoutingLegend() {
    if ( this.showRouting ) {
      this.routingControl.hide();
    } else {
      this.routingControl.show();
    }
    this.showRouting = !this.showRouting;
  }

  /**
   * open BottomSheet based on point
   */
  openSheet(id: number) {
    this.pointSheet.open(PointSheetComponent, {
      data: id
    });
    this.mapsService.getCurrentSheet(this.pointSheet); // passage au service
    return id;
  }

  /**
   * help au switch de la valeur de centre de localisation sur géolocalisation
   */
  switchLocalisationCenter() {
    if ( this.localisationCenter) {
      this.localisationCenter = false;
      this.map.options.dragging = true;
      console.log('follow is now false');
    } else {
      this.localisationCenter = true;
      this.map.options.dragging = false;
      this.map.panTo([this.currentlatlng[0], this.currentlatlng[1]]);
      console.log('follow is now true');
    }
    this.map.locate.watch = this.localisationCenter;
    this.map.locate.setView = this.localisationCenter;
  }

}
