import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';

import { url, endpoints } from '../constants/url';
import { Restaurant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {}

  public async get(latitude: number, longitude: number, count?: number): Promise<Restaurant[]> {
    try {
      count = count || 10;
      const position = { lat: latitude.toString(), lng: longitude.toString(), count: count.toString() };
      const params = new HttpParams(<HttpParamsOptions>{ fromObject: position });
      const restaurant = await this.http.get<Restaurant[]>(
        `${url}${endpoints.search}`,
        { params }
      ).toPromise();

      return restaurant;
    } catch (_) {
      return [];
    }
  }

}
