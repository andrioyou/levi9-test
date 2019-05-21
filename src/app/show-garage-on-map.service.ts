import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShowGarageOnMapService {

  private garageData = new BehaviorSubject<object>({});
  currentGarage = this.garageData.asObservable();

  constructor() { }

  updateMapCoordinates( garageInfo: object ) {
    this.garageData.next(garageInfo);
  }
}
