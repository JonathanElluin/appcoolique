import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/observable";
import { Alcoolique } from "../../models/appcoolique";
import { AlcooliqueProvider } from "../../providers/alcoolique/alcoolique";
import { AppcooliqueAddPage } from "../appcoolique-add/appcoolique-add";

@IonicPage()
@Component({
  selector: "page-appcoolique-list",
  templateUrl: "appcoolique-list.html"
})
export class AppcooliqueListPage {
  appcooliques: Observable<Alcoolique[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alcooliqueProvidder: AlcooliqueProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AppcooliqueListPage");
  }

  ionViewWillEnter() {
    this.appcooliques = this.alcooliqueProvidder.get(/*ref =>
      ref.orderBy("appcooliquescore", "desc")
    */);
  }

  ngOnInit() {}

  addAlcoolique() {
    this.navCtrl.push(AppcooliqueAddPage);
  }

  removeAlcoolique(alcoolique: Alcoolique){
    this.alcooliqueProvidder.remove(alcoolique.id);
  }
}
