import { Component, OnInit } from '@angular/core';
import { TemporalService } from '../../services/temporal.service';
import { Restaurant } from '../../models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public restaurant: Restaurant;

  constructor(
    private navCtrl: NavController,
    private temporalService: TemporalService
  ) {
    this.restaurant = this.temporalService.get();
  }

  ngOnInit() {
  }

  public openCamera() {
    this.navCtrl.navigateForward('/camera');
  }

}
