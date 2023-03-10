import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
list:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {
        img: "assets/imgs/005.png",   
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
      }
    ]
  }

}
