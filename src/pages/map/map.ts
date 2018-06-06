import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Alcoolique } from "../../models/appcoolique";
import * as firebase from "firebase/app";
import { AlcooliqueProvider } from "../../providers/alcoolique/alcoolique";

declare const google;

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  geocoder: any;
  alcoolique: Alcoolique;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alcooliqueProvider: AlcooliqueProvider
  ) {
    let param = this.navParams.get("alcoolique");
    if (param !== undefined) {
      this.alcoolique = param;
    }
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geocoder = new google.maps.Geocoder();
    let latLng = new google.maps.LatLng(-34.929, 138.601);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.codeAddress();
  }

  codeAddress() {
    let geopoint;
    const addressObj = this.alcoolique.address;
    const address =
      addressObj.address + ", " + addressObj.city + ", " + addressObj.country;
    this.geocoder.geocode({ address: address }, (results, status) => {
      if (status == "OK") {
        geopoint = results[0].geometry.location;
        this.alcoolique.address.coordinates = new firebase.firestore.GeoPoint(
          geopoint.lat(),
          geopoint.lng()
        );
        this.alcooliqueProvider.update(this.alcoolique.id, this.alcoolique);
        this.setAddress(geopoint);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  setAddress(geopoint:any) {
    this.map.setCenter(geopoint);
    var marker = new google.maps.Marker({
      map: this.map,
      position: geopoint
    });
  }
}
