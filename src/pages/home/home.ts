import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
slides:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        img: "assets/imgs/001.png",
        description: "Pick your Perfect",
        title: "Bouquet",
      },
      {
        img: "assets/imgs/002.png",
        description: "The Best Gift is ",
        title: "Plant",
      },
      {
        img: "assets/imgs/003.png",
        description: "Bouquet for",
        title: "Brides",
      },
      {
        img: "assets/imgs/004.png",
        description: "Make your bouquet ",
        title: "Special",
      }
    ]
  }
}
