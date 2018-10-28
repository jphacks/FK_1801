import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { SearchService } from '../../services/search.service';
import { LocationService } from '../../services/location.service';
import { TemporalService } from '../../services/temporal.service';
import { DatabaseService } from '../../services/database.service';
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

  public restOfCalorie: number;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private searchService: SearchService,
    private temporalService: TemporalService,
    private locationService: LocationService,
    private databaseService: DatabaseService
  ) {}

  public ngOnInit() {
    this.update();
  }

  public open(restaurant: Restaurant) {
    this.temporalService.set(restaurant);
    this.navCtrl.navigateForward('/detail')
  }

  private async update() {
    try {
      // 現在の残りカロリー値を取得する
      const restOfCalorie = await this.databaseService.getRestOfCalorie();
      this.restOfCalorie = restOfCalorie;

      await this.locationService.update();
      const latitude = this.locationService.getLatitude();
      const longitude = this.locationService.getLongitude();

      const restaurants = await this.searchService.get(latitude, longitude);

      // 差分出して振り分ける

      restaurants.forEach(restaurant => {
        if (restaurant.cal === null) {
          this.unknownCalorieRestaurants.push(restaurant);
          return;
        }

        if (restOfCalorie - restaurant.cal > 0) {
          this.restaurants.push(restaurant);
          return;
        }

        // NOTE: 食べると残りカロリー数が超過するお店を持つ
        this.highCalorieRestaurants.push(restaurant);
      });
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
