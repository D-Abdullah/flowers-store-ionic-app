import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {
        img: "assets/imgs/005.png",   
        title: "Bouquet Name",
        price: "$350",
        count:1
      },
      {
        img: "assets/imgs/006.png",
        title: "Bouquet Name",  
        price: "$ 330",
        count:1
      }
    ]
  }

  incrementValue(item){
    item.count +=1;
  }

  decrementValue(item){
    if(item.count>0){
        item.count -=1;
    }
  }

}
