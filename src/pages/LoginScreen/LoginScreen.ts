import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LoginDoneScreen} from "../LoginDoneScreen/LoginDoneScreen";

@Component({
  selector: 'page-loginscreen',
  templateUrl: 'LoginScreen.html'
})
export class LoginScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onLogin() {
    this.navCtrl.push(LoginDoneScreen);
  }

  onBack() {
    this.navCtrl.pop();
  }
}
