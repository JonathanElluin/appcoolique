import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore} from "angularfire2/firestore";
import {NavController} from "ionic-angular";
import {User} from "../../models/User";
import { App } from "ionic-angular";
import {AppcooliqueListPage} from "../../pages/appcoolique-list/appcoolique-list";


@Injectable()
export class AuthProvider {
  private user: firebase.User;
  private navCtrl: NavController;

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth, private app:App) {
    console.log('Hello AuthProvider Provider');
    this.navCtrl = app.getActiveNav();
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(AppcooliqueListPage);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  async signup(user: User){
    try{
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(AppcooliqueListPage);
      }
    }catch (e) {
      console.error(e);
    }
  }

  get authenthicated(): boolean{
    return this.user !== null;
  }

}
