import { Component, OnInit, Input } from '@angular/core';
// import { ShowGarageOnMapService } from '../../show-garage-on-map.service';
import { GaragesService } from '../../garages.service';

@Component({
  selector: 'app-garages-item',
  templateUrl: './garages-item.component.html',
  styleUrls: ['./garages-item.component.scss']
})
export class GaragesItemComponent implements OnInit {
  @Input() garage: object;
  @Input() active: boolean;
  garageInfo: object;
  garageTitle: string;

  // constructor(private garageData: ShowGarageOnMapService) { }
  constructor(private garageData: GaragesService) { }

  ngOnInit() {
    this.garageTitle = this.garage['properties']['title'];
    this.garageInfo = this.garage['properties']['layers']['parking.garage']['data'];
  }

  showOnMap() {
    let headerClientTop: any = document.querySelector("app-header").clientHeight;
    let top = window.pageYOffset;
    if (top > headerClientTop) {
      window.scrollTo({
        top: headerClientTop,
        behavior: "smooth"
      });
    }    
    this.garageData.updateMapCoordinates(this.garage);
  }

}
