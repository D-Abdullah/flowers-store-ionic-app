import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-make-bouquet',
  templateUrl: 'make-bouquet.html',
})
export class MakeBouquetPage {
  list:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {
        img: "assets/imgs/007.png",
        name: "Rose Bouquet 1",
        pricesmall: "$ 50",
        pricemedium: "$ 150",
        pricelarg: "$ 200"
      },    
      {
        img: "assets/imgs/005.png",
        name: "Rose Bouquet 2",
        pricesmall: "$ 100",
        pricemedium: "$ 150",
        pricelarg: "$ 250"
      },
      {
        img: "assets/imgs/006.png",
        name: "Rose Bouquet 3",
        pricesmall: "$ 100",
        pricemedium: "$ 200",
        pricelarg: "$ 300"
      }
    ]
  }
}
   