import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  loginForm: FormGroup; 
  type='password';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public formBuilder: FormBuilder) {
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
  showPsw(){
    if(this.type=='password'){
      this.type='text'
    }else this.type='password'
  }
   
}
