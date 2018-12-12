import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '..//home/home';
import { MapsPage } from '..//maps/maps';

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  openHome(){
  	this.navCtrl.setRoot(HomePage)
  }

  openMaps(){
    this.navCtrl.setRoot(MapsPage)
  }

}
