import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaTelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda-tela',
  templateUrl: 'segunda-tela.html',
})
export class SegundaTelaPage {
  parameter1: string;
  parameter2: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parameter1 = navParams.get('param1');
    this.parameter2 = navParams.get('param2');
    console.log('console.log do constructor', this.parameter1, this.parameter2);
  }

  ngOnInit() {
    console.log('console.log do on init', this.parameter1, this.parameter2);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaTelaPage');
  }
}
