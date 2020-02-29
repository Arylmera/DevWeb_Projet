import { Component, AfterViewInit } from '@angular/core';

import 'ol/ol.css';
import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    /**
     * création de la vue
     */
    let view = new View({
      center: [0,0],
      zoom: 2
    });

    /**
     * création de la map
     */
    let map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: view
    });

    /**
     * création de la géolocalisation
     */
    let geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: view.getProjection()
    });

    /**
     * ajout de la géolocalisation
     */
    let accuracyFeature = new Feature();
    geolocation.on('change:accuracyGeometry', function() {
      accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    /**
     * affichage de la possition sur la carte
     */
    let positionFeature = new Feature();
    positionFeature.setStyle(new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));

    /**
     * géolocalisation dynamique
     */
    geolocation.on('change:position', function() {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
        new Point(coordinates) : null);
    });

    geolocation.on('error', function(error) {
      console.log('error in geolocation : '+ error);
    });

    geolocation.on('change', function() {
      getId('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
      getId('speed').innerText = geolocation.getSpeed() + ' [m/s]';
    });

    /**
     * nouveau layer avec la map
     */
    new VectorLayer({
      map: map,
      source: new VectorSource({
        features: [accuracyFeature, positionFeature]
      })
    });

    /**
     * lancement de la géolocalisation
     */
    geolocation.setTracking(true);

    /**
     * get element by id helper
     * @param id
     * @return element html
     */
    function getId(id) {
      return document.getElementById(id);
    }
  }


}
