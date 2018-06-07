import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';

//Pages
import {LoginPage} from '../pages/login/login';
import {AppcooliqueListPage} from '../pages/appcoolique-list/appcoolique-list';
import {AppcooliqueAddPage} from '../pages/appcoolique-add/appcoolique-add';
import {RegisterPage} from '../pages/register/register';
import {MapPage} from '../pages/map/map';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./app.firebaseConfig";
import { AlcooliqueProvider } from '../providers/alcoolique/alcoolique';
import { AuthProvider } from '../providers/auth/auth';
import {Camera} from '@ionic-native/camera'
import {storage} from 'firebase';

@NgModule({
  declarations: [
    MyApp,
    //Pages go here
    LoginPage,
    AppcooliqueListPage,
    AppcooliqueAddPage,
    RegisterPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Pages go here
    LoginPage,
    AppcooliqueListPage,
    AppcooliqueAddPage,
    RegisterPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlcooliqueProvider,
    AuthProvider,
    Camera
  ]
})
export class AppModule {
}
