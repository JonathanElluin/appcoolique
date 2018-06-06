import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Alcoolique } from "../../models/appcoolique";
import { AlcooliqueProvider } from "../../providers/alcoolique/alcoolique";
import { MapPage } from "../map/map";

@IonicPage()
@Component({
  selector: "page-appcoolique-add",
  templateUrl: "appcoolique-add.html"
})
export class AppcooliqueAddPage {
  isDetailsView: boolean = false;
  alcoolique: Alcoolique = new Alcoolique();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alcooliqueProvider: AlcooliqueProvider
  ) {
    let param = this.navParams.get("alcoolique");
    if(param !== undefined){
      this.alcoolique = param;
      this.isDetailsView = true;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AppcooliqueAddPage");
  }

  saveAppcoolique() {
    if(this.isDetailsView){
      console.log(this.alcoolique);
      this.alcooliqueProvider.update(this.alcoolique.id, this.alcoolique).catch(error => {
        alert("An error occured, try again please.");
        console.error(error);
      });
    }
    else{
      this.alcooliqueProvider.add(this.alcoolique).catch(error => {
        alert("An error occured, try again please.");
        console.error(error);
      });
    }
    this.navCtrl.pop();
  }

  openMap(){
    this.navCtrl.push(MapPage, {alcoolique: this.alcoolique});
  }
}
