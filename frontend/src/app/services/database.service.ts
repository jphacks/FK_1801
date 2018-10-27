import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { databases, stores } from '../constants/database';
import { Calorie, Type } from '../models/calorie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: Dexie = new Dexie(databases.foods);

  constructor() {
    this.database.version(1).stores({
      [stores.calories]: '++id, name, type, calorie, timestamp'
    });
  }

  // NOTE: 摂取したカロリーとして保存する
  public async eatFood(name: string, calorie: number): Promise<boolean> {
    try {
      await (this.database as any).calories.add({
        name,
        calorie,
        type: Type.food,
        timestamp: new Date().getTime()
      });

      return true;
    } catch (_) {
      return false;
    }
  }

  // NOTE: 消費したカロリーとして保存する
  public async doExcercise(steps: number): Promise<boolean> {
    try {
      await (this.database as any).calories.add({
        name: 'excercise',
        // NOTE: Google Fit で 1 歩あたりの消費カロリーが 0.1Kcal だったため 0.1 にしている
        calorie: steps * 0.1,
        type: Type.food,
        timestamp: new Date().getTime()
      });

      return true;
    } catch (_) {
      return false;
    }
  }

  // TODO: とりあえず全部取得して表示側で filter する
  // NOTE: where と below，above を使って取得できそう（https://www.npmjs.com/package/dexie）
  public async getAll(): Promise<Calorie[]> {
    try {
      return await (this.database as any).calories.where('id').above(0).toArray();
    } catch (error) {
      throw error;
    }
  }

  public async getTodayCalorie(): Promise<Calorie[]> {
    try {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 0);

      return await (this.database as any).calories
        .where('timestamp').above(start.getTime())
        .and(data => data.timestamp < end.getTime()).toArray();
    } catch (error) {
      throw error;
    }
  }
}
