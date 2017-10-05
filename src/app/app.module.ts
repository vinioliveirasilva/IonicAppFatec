import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GerenciarMateriasPage } from '../pages/gerenciar-materias/gerenciar-materias';
import { DataDasProvasPage } from '../pages/data-das-provas/data-das-provas';
import { MaterialDeSalaPage } from '../pages/material-de-sala/material-de-sala';
import { AjudaPage } from '../pages/ajuda/ajuda';
import {CamapaPage} from '../pages/camapa/camapa'

import {CanvasDrawComponent} from '../components/canvas-draw/canvas-draw'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GerenciarMateriasPage,
    DataDasProvasPage,
    MaterialDeSalaPage,
    AjudaPage,
    CamapaPage,
    CanvasDrawComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GerenciarMateriasPage,
    DataDasProvasPage,
    MaterialDeSalaPage,
    AjudaPage,
    CamapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}