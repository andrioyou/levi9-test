import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../garages.service';

@Component({
  selector: 'app-garages-list',
  templateUrl: './garages-list.component.html',
  styleUrls: ['./garages-list.component.scss']
})
export class GaragesListComponent implements OnInit {
  garages: object[];
  garagesAvailable: object[];

  constructor(private garagesService: GaragesService) { }

  ngOnInit() {
    this.garagesService.fetchResults()
      .subscribe((data: any) => {
        this.garages = data.features;
        this.garagesAvailable = this.garages.filter((item) => item['properties']['layers']['parking.garage']['data']['State'] == 'ok');
      });
  }

}
