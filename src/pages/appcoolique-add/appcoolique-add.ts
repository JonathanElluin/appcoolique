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
      this.alcooliqueProvider.update(this.alcoolique.id, this.alcoolique).then(res => {
        console.log(res);
      });
    }
    else{
      this.alcooliqueProvider.add(this.alcoolique).then(res => {
        console.log(res);
      });
    }
    this.navCtrl.pop();
  }
}
