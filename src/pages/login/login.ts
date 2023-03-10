import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})    
export class LoginPage { 
  loginForm: FormGroup; 
  type='password'

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public menuCtrl: MenuController, public formBuilder: FormBuilder) {
     this.menuCtrl.swipeEnable(false);

    // Email And Password Validation
    this.loginForm = this.formBuilder.group({
      email: [   
        '', Validators.compose([
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
          Validators.required
        ])
      ],
    });

  }
  
 forgotPassword() {
    let forgotpas = this.alertCtrl.create({
      title: 'Forgot password',
      message: "Enter your email address and we'll help you reset your password",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    forgotpas.present();
  }

  showPsw(){
    if(this.type=='password'){
      this.type='text'
    }else this.type='password'
  }
}
