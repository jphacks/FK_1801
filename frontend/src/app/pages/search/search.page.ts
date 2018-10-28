import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { SearchService } from '../../services/search.service';
import { LocationService } from '../../services/location.service';
import { TemporalService } from '../../services/temporal.service';
import { DatabaseService } from '../../services/database.service';
import { Restaurant } from '../../models';
import { gravityMin, gravityMax } from '../../constants/measurement';

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

  private listener: any;
  private steps = 0;
  private isStep = false;

  // NOTE: デバイスの動きを取得するかどうか
  private isCaptureMotion: boolean = false;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private searchService: SearchService,
    private temporalService: TemporalService,
    private locationService: LocationService,
    private databaseService: DatabaseService
  ) {
    this.listener = this.devicemotion.bind(this);
    (window as any).addEventListener('devicemotion', this.listener, false);
  }

  public ngOnInit() {
    this.update();
  }

  public open(restaurant: Restaurant) {
    this.temporalService.set(restaurant);
    this.navCtrl.navigateForward('/detail');
    this.isCaptureMotion = false;
  }

  public ionViewDidEnter() {
    this.isCaptureMotion = true;
  }

  private devicemotion(event) {
    if (this.isCaptureMotion) {
      event.preventDefault();

      const a = event.accelerationIncludingGravity;
      const accumulator = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);

      if (this.isStep) {
        if (accumulator < gravityMin) {
          this.steps++;
          this.isStep = false;
        }

        if (this.steps >= 100) {
          this.databaseService.doExcercise(this.steps);
          this.steps = 0;
        }
      } else {
        if (accumulator > gravityMax) {
          this.isStep = true;
        }
      }
    }
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
