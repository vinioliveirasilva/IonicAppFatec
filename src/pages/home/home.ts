import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SegundaTelaPage} from '../segunda-tela/segunda-tela'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  avancar(){
    this.navCtrl.push(SegundaTelaPage)
  }

}
