import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class GaragesService {

  private garageData = new BehaviorSubject<object>({});
  currentGarage = this.garageData.asObservable();

  constructor(private http: HttpClient) {

  }

  fetchResults(): Observable<Object> {
    return this.http.get('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25')
  }

  updateMapCoordinates( garageInfo: object ) {
    this.garageData.next(garageInfo);
  }
}
