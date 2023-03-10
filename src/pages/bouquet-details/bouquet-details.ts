import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bouquet-details',
  templateUrl: 'bouquet-details.html',
})
export class BouquetDetailsPage {
  list:Array<any>;
  wrap:Array<any>;
  selectItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {
        name: "Tulip",   
        price: "$ 10 Per one",
        count:1,
        color:''
      },   
      {
        name: "Ren",
        price: "$ 8 Per one",
        count:1,
        color:''
      },
      {
        name: "Tulip",   
        price: "$ 10 Per one",
        count:1,
        color:''
      },   
      {
        name: "Ren",
        price: "$ 8 Per one",
        count:1,
        color:''
      }
    ]

    this.wrap = [
      {
        name: "Canvas",   
        price: "$ 10",
      },   
      {
        name: "Paper",
        price: "$ 8",
      },
      {
        name: "Canvas",   
        price: "$ 10",   
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

  onSelectChange(item){
    item.selectItem=true;
  }
}

