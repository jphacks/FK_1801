import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.page.html',
  styleUrls: ['./dummy.page.scss'],
})
export class DummyPage implements OnInit {

  constructor(
    private dummyService: DummyService
  ) { }

  ngOnInit(): void {
    this.getDummy();
    this.postDummy();
  }

  private async getDummy(): Promise<void> {
    try {
      const dummy = await this.dummyService.get();

      console.log('get', dummy);
    } catch (error) {
      throw error;
    }
  }

  private async postDummy(): Promise<void> {
    try {
      const dummy = await this.dummyService.post({
        message: 'Hello World'
      });

      console.log('post', dummy);
    } catch (error) {
      throw error;
    }
  }

}
