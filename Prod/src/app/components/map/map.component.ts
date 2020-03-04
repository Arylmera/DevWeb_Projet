import { Component, AfterViewInit } from '@angular/core';
import 'ol/ol.css';
import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer} from 'ol/layer';
import {OSM} from 'ol/source';
import {fromLonLat} from "ol/proj";
import Overlay from "ol/Overlay";
import LineString from "ol/geom/LineString";

const lln = [4.611746,50.668351];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit() {

    // creating the view
    const view = new View({
      center: fromLonLat(lln),
      zoom: 17
    });

    // creating layer
    const tileLayer = new TileLayer({
      source: new OSM()
    });

    // creating the map
    const map = new Map({
      layers: [tileLayer],
      target: 'map',
      view: view
    });

    // Geolocation marker
    const markerEl = document.getElementById('geolocation_marker') as HTMLImageElement;
    const marker = new Overlay({
      positioning: 'center-center',
      element: markerEl,
      stopEvent: false
    });
    map.addOverlay(marker);

    // LineString to store the different geolocation positions. This LineString
    // is time aware.
    // The Z dimension is actually used to store the rotation (headiing).
    const positions = new LineString([]);

    // Geolocation Control
    const geolocation = new Geolocation({
      projection: view.getProjection(),
      trackingOptions: {
        maximumAge: 10000,
        enableHighAccuracy: true,
        timeout: 600000
      }
    });

    let deltaMean = 600; // the geolocation sampling period mean in ms

    // Listen to position changes
    geolocation.on('change', function() {
      const position = geolocation.getPosition();
      const accuracy = geolocation.getAccuracy();
      const heading = geolocation.getHeading() || 0;
      const m = Date.now();

      addPosition(position, heading, m);

      const html = [
        'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
        'Accuracy: ' + accuracy + ' m',
      ].join('<br />');
      document.getElementById('info').innerHTML = html;
    });

    geolocation.on('error', function() {
      alert('geolocation error');
    });

    // convert radians to degrees
    function radToDeg(rad) {
      return rad * 360 / (Math.PI * 2);
    }
    // convert degrees to radians
    function degToRad(deg) {
      return deg * Math.PI * 2 / 360;
    }
    // modulo for negative values
    function mod(n) {
      return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
    }

    function addPosition(position, heading, m) {
      const x = position[0];
      const y = position[1];
      const fCoords = positions.getCoordinates();
      const previous = fCoords[fCoords.length - 1];
      const prevHeading = previous && previous[2];
      if (prevHeading) {
        let headingDiff = heading - mod(prevHeading);

        // force the rotation change to be less than 180°
        if (Math.abs(headingDiff) > Math.PI) {
          const sign = (headingDiff >= 0) ? 1 : -1;
          headingDiff = -sign * (2 * Math.PI - Math.abs(headingDiff));
        }
        heading = prevHeading + headingDiff;
      }
      positions.appendCoordinate([x, y, heading, m]);

      // only keep the 20 last coordinates
      positions.setCoordinates(positions.getCoordinates().slice(-20));

      if (heading) {
        markerEl.src = '../../../assets/geolocation_marker_heading.png';
      } else {
        markerEl.src = '../../../assets/geolocation_marker.png';
      }
    }

    // recenters the view by putting the given coordinates at 3/4 from the top or the screen
    function getCenterWithHeading(position, rotation, resolution) {
      const size = map.getSize();
      const height = size[1];

      return [
        position[0] - Math.sin(rotation) * height * resolution / 4,
        position[1] + Math.cos(rotation) * height * resolution / 4
      ];
    }

    let previousM = 0;
    function updateView() {
      // use sampling period to get a smooth transition
      let m = Date.now() - deltaMean * 1.5;
      m = Math.max(m, previousM);
      previousM = m;
      // interpolate position along positions LineString
      const c = positions.getCoordinateAtM(m, true);
      if (c) {
        view.setCenter(getCenterWithHeading(c, -c[2], view.getResolution()));
        view.setRotation(-c[2]);
        marker.setPosition(c);
      }
    }
    geolocation.setTracking(true); // Start position tracking
    tileLayer.on('postrender', updateView);
    map.render();
  }
}
