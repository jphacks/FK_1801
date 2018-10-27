import { Component } from '@angular/core';
import { Menu } from '../../models';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public name = '';
  public menus: Menu[] = [{
    name: 'Top',
    url: '',
    icon: 'home'
  }];

}
