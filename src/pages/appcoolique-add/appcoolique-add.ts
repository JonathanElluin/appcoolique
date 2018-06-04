import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Alcoolique } from "../../models/appcoolique";

@IonicPage()
@Component({
  selector: "page-appcoolique-add",
  templateUrl: "appcoolique-add.html"
})
export class AppcooliqueAddPage {
  alcoolique: Alcoolique = new Alcoolique();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AppcooliqueAddPage");
  }
}
