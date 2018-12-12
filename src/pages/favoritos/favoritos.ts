import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '..//home/home';
import { MapsPage } from '..//maps/maps';
import { ConfiguracionPage } from '..//configuracion/configuracion';


@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  openSetting(){
    this.navCtrl.push(ConfiguracionPage)
  }

  openHome(){
  	this.navCtrl.setRoot(HomePage)
  }

  openMaps(){
    this.navCtrl.setRoot(MapsPage)
  }

}
