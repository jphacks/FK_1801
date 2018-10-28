import { Injectable } from '@angular/core';
import { gravityMin, gravityMax } from '../constants/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  private steps: number = 0;
  private isStep = false;

  private listener;

  constructor() {
    this.listener = (window as any).addEventListener('devicemotion', this.onDevicemotion.bind(this));
  }

  private onDevicemotion(event) {
    event.preventDefault();

    console.log(event)

    const a = event.accelerationIncludingGravity;
    const accumulator = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);

    if (this.isStep) {
      if (accumulator < gravityMin) {
        this.steps++;
        this.isStep = false;
      }
    } else {
      if (accumulator > gravityMax) {
        this.isStep = true;
      }
    }
  }
}
