import { Component, OnInit } from '@angular/core';
import { ShowGarageOnMapService } from '../show-garage-on-map.service';

@Component({
  selector: 'app-garages-map',
  templateUrl: './garages-map.component.html',
  styleUrls: ['./garages-map.component.scss']
})
export class GaragesMapComponent implements OnInit {
  garageInfo: object;
  garageGeometry: object;

  // Amsterdam by default
  lat: number = 52.3545653;
  lng: number = 4.7585408;
  zoom: number = 10;
  
  // Marker
  markerLat: number;
  markerLng: number;

  constructor(private garageData: ShowGarageOnMapService) { }

  ngOnInit() {
    this.garageData.currentGarage.subscribe(data => {
      if (!Object.keys(data).length) return;
      this.garageInfo = data['properties']['layers']['parking.garage']['data'];
      this.garageGeometry = data['geometry'];
      this.setMarker();
    })
  }

  setMarker() {
    this.markerLng = this.lng = this.garageGeometry['coordinates'][0];
    this.markerLat = this.lat = this.garageGeometry['coordinates'][1];
    this.zoom = 14;
  }

}
