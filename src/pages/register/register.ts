import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/User";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  auth_service: AuthProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, auth_service: AuthProvider) {
    this.auth_service = auth_service;
  }

  user = {} as User;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signup(user: User){
    this.auth_service.signup(user);
  }
}
