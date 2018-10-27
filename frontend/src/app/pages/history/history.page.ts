import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Calorie, Type } from '../../models/calorie';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public histories: Calorie[] = [];
  public total: number = 0;

  constructor(
    private databaseService: DatabaseService
  ) {}

  public async ngOnInit() {
    try {
      this.histories = await this.databaseService.getTodayCalories();
      this.total = await this.databaseService.getTotalCalorie();
    } catch (error) {
      throw error;
    }
  }

}
