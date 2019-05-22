import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../garages.service';

@Component({
  selector: 'app-garages-map',
  templateUrl: './garages-map.component.html',
  styleUrls: ['./garages-map.component.scss']
})
export class GaragesMapComponent implements OnInit {
  garages: object[];
  garage: object;
  markers: object[] = [];
  zoom: number = 10;
  markerIconActive: string = 'assets/img/marker-active.png';
  markerIconDisabled: string = 'assets/img/marker-disabled.png';
  showAllButtonStatus = true;

  constructor(private garageData: GaragesService) { }

  ngOnInit() {
    this.garageData.fetchResults().subscribe(data => {
      this.markers = this.garages = data['features'];
    })
    this.garageData.currentGarage.subscribe(data => {
      if (!Object.keys(data).length) return;
      this.garage = data;
      this.setMarker();
    })
  }

  setMarkers() {
    this.markers = this.garages;
  }

  setMarker() {
    this.markers = [];
    this.markers.push(this.garage);
  }

}
