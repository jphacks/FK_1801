import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporalService {

  // NOTE: ページ間で値の受け渡しをするときどうするの？
  // TODO: Ionic 4 だと上手くできないので調べる
  private temporal: any;

  set(temporal) {
    this.temporal = temporal;
  }

  get() {
    return this.temporal;
  }

}
