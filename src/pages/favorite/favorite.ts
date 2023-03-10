import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  list:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {
        img: "assets/imgs/008.png",   
        title: "Bouquet Name",
        price: "$350",
      },
      {
        img: "assets/imgs/006.png",
        title: "Bouquet Name",
        price: "$ 330",
      },
      {
        img: "assets/imgs/007.png",
        title: "Bouquet Name",
        price: "$ 300",
      },
      {
        img: "assets/imgs/004.png",
        title: "Bouquet Name",
        price: "$350",
      },
      {
        img: "assets/imgs/005.png",   
        title: "Bouquet Name",
        price: "$350",
      },
      {
        img: "assets/imgs/002.png",
        title: "Bouquet Name",
        price: "$ 330",
      },
      {
        img: "assets/imgs/001.png",
        title: "Bouquet Name",
        price: "$ 300",
      },
      {
        img: "assets/imgs/004.png",
        title: "Bouquet Name",
        price: "$350",
      }
    ]
  }

  //delete item
  deleteItem(item,ev) {
    this.list.splice(this.list.indexOf(item), 1);
    ev.stopPropagation();
  }
}
