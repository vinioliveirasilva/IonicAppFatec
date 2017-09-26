import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MaterialDeSalaPage } from '../pages/material-de-sala/material-de-sala';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { GerenciarMateriasPage } from '../pages/gerenciar-materias/gerenciar-materias';
import { DataDasProvasPage } from '../pages/data-das-provas/data-das-provas';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMaterialDeSala(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MaterialDeSalaPage);
  }goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AjudaPage);
  }goToGerenciarMaterias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GerenciarMateriasPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToDataDasProvas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DataDasProvasPage);
  }
}
