import { Component, OnInit, Input } from '@angular/core';
import { ShowGarageOnMapService } from '../../show-garage-on-map.service';

@Component({
  selector: 'app-garages-item',
  templateUrl: './garages-item.component.html',
  styleUrls: ['./garages-item.component.scss']
})
export class GaragesItemComponent implements OnInit {
  @Input() garage: object;
  garageInfo: object;

  constructor(private garageData: ShowGarageOnMapService) { }

  ngOnInit() {
    this.garageInfo = this.garage['properties']['layers']['parking.garage']['data'];
  }

  showOnMap() {
    this.garageData.updateMapCoordinates(this.garage);
  }

}
