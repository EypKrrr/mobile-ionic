import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Item } from '../../models/item';

@Injectable()
export class Items {
 
  items: Item[] = [];

  defaultItem: any = {
    "name": "Portal Site",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": 'ITEM1_ABOUT',
  }

  constructor(public translateService: TranslateService) {
    
    let items = [
      {
        "name": "Portal Site",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM1_ABOUT'
      },
      {
        "name": "Portal Base",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM2_ABOUT'
      },
      {
        "name": "Portal Content",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM3_ABOUT'
      },
      {
        "name": "Portal User",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM4_ABOUT'
      },
      {
        "name": "Portal Menu",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM5_ABOUT'
      },
      {
        "name": "Portal Theme",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM6_ABOUT'
      },
      {
        "name": "Portal Gii",
        "profilePic": "assets/img/speakers/open_temo.jpeg",
        "about": 'ITEM7_ABOUT'
      }
    ];

    for (let item of items){
    this.translateService.get('ITEM'+item.about.substr(4,1)+'_ABOUT').subscribe((value) => {
      item.about=value;
      console.log(value)
    })
  }
    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
