import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import {SegundaTelaPage} from '../pages/segunda-tela/segunda-tela'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  public rootPage:any = SegundaTelaPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    menu: MenuController
  ) {
    platform.ready().then(() => {
      //Okay, so the platform is ready and our plugins are available.
      //Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

