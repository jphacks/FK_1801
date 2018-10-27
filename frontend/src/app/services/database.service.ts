import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { databases, stores } from '../constants/database';
import { Calorie } from '../models/calorie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: Dexie = new Dexie(databases.foods);

  constructor() {
    this.database.version(1).stores({
      [stores.calories]: '++id, name, calorie, timestamp'
    });
  }

  public async add(name: string, calorie: number) {
    try {
      await (this.database as any).calories.add({
        name,
        calorie,
        timestamp: new Date().getTime()
      });
    } catch (error) {
      throw error;
    }
  }

  // TODO: とりあえず全部取得して表示側で filter する
  // NOTE: where と below，above を使って取得できそう（https://www.npmjs.com/package/dexie）
  public async getAll(): Promise<Calorie[]> {
    try {
      return await (this.database as any).carories.where('id').above(0).toArray();
    } catch (error) {
      throw error;
    }
  }
}
