import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../garages.service';

@Component({
  selector: 'app-garages-status',
  templateUrl: './garages-status.component.html',
  styleUrls: ['./garages-status.component.scss']
})
export class GaragesStatusComponent implements OnInit {
  garages: object[];
  total: number = 0;
  available: number = 0;

  constructor(private garagesService: GaragesService) { }

  ngOnInit() {
    this.garagesService.fetchResults()
      .subscribe((data: any) => {
        this.garages = data.features;
        this.updateStatus();
      });
  }

  updateStatus() {
    this.total = this.garages.length;
    for( let i = 0; i < this.garages.length; i++) {
      let garageItem = this.garages[i]['properties']['layers']['parking.garage']['data'];
      if ( garageItem['State'] == 'ok' ) this.available++;
    }
  }

}
