import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestoreDocument } from
  'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
