import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestoreDocument } from
  'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "../../models/User";
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthProvider} from "../../providers/auth/auth";
import {RegisterPage} from "../register/register";
import {AppcooliqueListPage} from "../appcoolique-list/appcoolique-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Items {
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  auth_service: AuthProvider;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, auth_service: AuthProvider) {
    this.auth_service = auth_service;
  }

  /*ngOnInit(){
    if(this.auth_service.authenthicated){
      this.navCtrl.push(AppcooliqueListPage);
    }
  }*/


  user = {} as User;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user: User){
    this.auth_service.login(user);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }


}
