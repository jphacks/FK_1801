import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SearchService } from '../../services/search.service';
import { LocationService } from '../../services/location.service';
import { Restaurant } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public restaurants: Restaurant[] = []; // NOTE: 一日の摂取カロリー未満のお店のリストを持つ
  public highCalorieRestaurants: Restaurant[] = []; // NOTE: 一日の摂取カロリーを超えるお店のリストを持つ
  public unknownCalorieRestaurants: Restaurant[] = []; // NOTE: カロリー値が未定のお店のリストを持つ

  constructor(
    private alertCtrl: AlertController,
    private searchService: SearchService,
    private locationService: LocationService
  ) {}

  public ngOnInit() {
    this.update();
  }

  private async update() {
    try {
      await this.locationService.update();
      const latitude = this.locationService.getLatitude();
      const longitude = this.locationService.getLongitude();

      this.restaurants = await this.searchService.get(latitude, longitude);
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: '読み込みに失敗しました',
        subHeader: error.message,
        buttons: ['OK']
      });

      await alert.present();
    }
  }

}
