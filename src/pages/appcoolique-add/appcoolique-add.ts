import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Alcoolique } from "../../models/appcoolique";
import { AlcooliqueProvider } from "../../providers/alcoolique/alcoolique";

@IonicPage()
@Component({
  selector: "page-appcoolique-add",
  templateUrl: "appcoolique-add.html"
})
export class AppcooliqueAddPage {
  alcoolique: Alcoolique = new Alcoolique();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alcooliqueProvider: AlcooliqueProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AppcooliqueAddPage");
  }

  createAppcoolique() {
    console.log("createAppcoolique", this.alcoolique);
    this.alcooliqueProvider.add(this.alcoolique).then(res => {
      console.log(res);
    });
    this.navCtrl.pop();
  }
}
