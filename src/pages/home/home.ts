import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FavoritosPage } from '..//favoritos/favoritos';
import { MapsPage } from '..//maps/maps';
import { ConfiguracionPage } from '..//configuracion/configuracion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	

  constructor(public navCtrl: NavController) {
  

  }

  openSetting(){
    this.navCtrl.push(ConfiguracionPage)
  }
  
  openFavorite(){
  	this.navCtrl.setRoot(FavoritosPage)
  }

  openMaps(){
    this.navCtrl.setRoot(MapsPage)
  }

}
