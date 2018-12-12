import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '..//home/home';
import { FavoritosPage } from '..//favoritos/favoritos';
import { ConfiguracionPage } from '..//configuracion/configuracion';

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

  openSetting(){
    this.navCtrl.push(ConfiguracionPage)
  }

  openHome(){
  	this.navCtrl.setRoot(HomePage)
  }

  openFavorite(){
    this.navCtrl.setRoot(FavoritosPage)
  }


}
