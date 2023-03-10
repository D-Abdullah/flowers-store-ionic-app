import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  img='assets/imgs/profile.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public _myApp:MyApp, public actionSheetCtrl: ActionSheetController, public camera: Camera) {
  }

    getPhoto(){
      var buttons=[
        {
          text: 'Camera',
          handler: () => {
            this.get_camera(2);
          }
        },{
          text: 'Gallery',
          handler: () => {
              this.get_camera(1);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }

      ]
      if(this.img!='assets/imgs/default.png'){ 
        let butttondelete={text:'Delete',handler:()=>{this.delete_image()}}
        buttons.push(butttondelete) 
      }
      this.actionSheetCtrl.create({buttons: buttons}).present();
    }

    delete_image(){
        this.img='assets/imgs/default.png';
    } 

    get_camera=function (source) {
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          allowEdit:true,
          targetWidth:80,
          targetHeight:80,
          correctOrientation:true
      }

      if(source==1)options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
      else options.sourceType= this.camera.PictureSourceType.CAMERA

      this.camera.getPicture(options).then((imageData) => {
        console.log(imageData)
            this.img='data:image/jpeg;base64,' + imageData;
      }, (err) => {
          alert('camera.getPicture ... error')
      });
    } 

  // animate Function
  animateApp(e:any){ 
    this._myApp.animateVarible = e.checked;
  }

}
