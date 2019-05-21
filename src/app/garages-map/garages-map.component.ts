import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../garages.service';

@Component({
  selector: 'app-garages-map',
  templateUrl: './garages-map.component.html',
  styleUrls: ['./garages-map.component.scss']
})
export class GaragesMapComponent implements OnInit {
  garage: object;
  garageTitle: string;
  garageInfo: object;
  garageGeometry: object;

  // Amsterdam by default
  lat: number = 52.3545653;
  lng: number = 4.7585408;
  zoom: number = 10;
  
  // Marker
  markerLat: number;
  markerLng: number;

  constructor(private garageData: GaragesService) { }

  ngOnInit() {
    this.garageData.currentGarage.subscribe(data => {
      if (!Object.keys(data).length) return;
      this.garage = data;
      this.garageInfo = data['properties']['layers']['parking.garage']['data'];
      this.garageGeometry = data['geometry'];
      this.setMarker();
    })
  }

  setMarker() {
    this.markerLng = this.lng = this.garageGeometry['coordinates'][0];
    this.markerLat = this.lat = this.garageGeometry['coordinates'][1];
    this.zoom = 14;
    this.garageTitle = this.garage['properties']['title'];
  }

}
