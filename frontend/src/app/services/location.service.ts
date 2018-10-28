import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private latitude: number;
  private longitude: number;

  constructor() {
    this.update();
  }

  public update() {
    return new Promise((resolve) => {

      // NOTE: デモのため決め打ちで位置情報を返す
      this.latitude = 33.5903689;
      this.longitude = 130.4239637;

      resolve();

      // navigator.geolocation.getCurrentPosition(position => {
      //   this.latitude = position.coords.latitude;
      //   this.longitude = position.coords.longitude;
      //
      //   resolve();
      // });
    });
  }

  public getLatitude() {
    return this.latitude;
  }

  public getLongitude() {
    return this.longitude;
  }

}
