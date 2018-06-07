import { Component } from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Camera , CameraOptions} from '@ionic-native/camera';
import { Alcoolique } from "../../models/appcoolique";
import { AlcooliqueProvider } from "../../providers/alcoolique/alcoolique";
import { MapPage } from "../map/map";
import { storage } from 'firebase';

@IonicPage()
@Component({
  selector: "page-appcoolique-add",
  templateUrl: "appcoolique-add.html"
})
export class AppcooliqueAddPage {
  isDetailsView: boolean = false;
  alcoolique;
  loading;
  selectedPhoto;
  currentImage;
  item:string;
  photo;
  randomId;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alcooliqueProvider: AlcooliqueProvider,
    private camera:Camera,
    public loadingCtrl: LoadingController
  ) {
    this.alcoolique = new Alcoolique();
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

  dataURItoBlob(dataURI) {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };

  openMap(){
    this.navCtrl.push(MapPage, {alcoolique: this.alcoolique});
  }

  async takePhoto(){
    //this.randomId = Math.random().toString(36).substring(2);

    // this.requettes_service.modifier_photo(this.item,this.randomId)
    const options: CameraOptions= {
      quality:50,
      targetHeight:600,
      targetWidth:600,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      correctOrientation:true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();

      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
      console.log(this.selectedPhoto)


      this.upload();
    }, (err) => {
      console.log('error', err);
    });

  }
  upload() {
    if (this.selectedPhoto) {
      this.randomId = Math.random().toString(36).substring(2);
      // this.item["photo"] ='images/'+randomId+'.png'
      this.alcoolique.pictures = 'images/'+this.randomId+'.jpg';
      var uploadTask =storage().ref().child('images/'+this.randomId+'.jpg').put(this.selectedPhoto);
      uploadTask.then(this.onSuccess, this.onError);
    }

  }
  onSuccess = (snapshot) => {
    this.alcoolique.pictures = snapshot.ref.getDownloadURL();
    console.log(this.currentImage);
    this.loading.dismiss();
  }

  onError = (error) => {
    console.log('error', error);
    this.loading.dismiss();
  }
}
