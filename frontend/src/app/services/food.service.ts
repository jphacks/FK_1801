import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { url, endpoints } from '../constants/url';
import { Food } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient
  ) {}

  public async post(blob: string): Promise<Food> {
    try {
      const food = await this.http.post<Food>(
        `${url}${endpoints.food}`,
        { blob }
      ).toPromise();

      return food;
    } catch (error) {
      throw error;
    }
  }

}
