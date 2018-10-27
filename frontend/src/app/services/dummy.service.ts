import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { url, endpoints } from '../constants/url';
import { Dummy } from '../models/dummy';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(
    private http: HttpClient
  ) {}

  public async get(): Promise<Dummy> {
    try {
      const dummy = await this.http.get<Dummy>(
        `${url}${endpoints.dummy}`
      ).toPromise();

      return dummy;
    } catch (error) {
      throw error;
    }
  }

  public async post(parameters): Promise<Dummy> {
    try {
      const dummy = await this.http.post<Dummy>(
        `${url}${endpoints.dummy}`,
        { ...parameters }
      ).toPromise();

      return dummy;
    } catch (error) {
      throw error;
    }
  }

}
