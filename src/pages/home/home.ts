import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DrinkmenuPage } from '../drinkmenu/drinkmenu';
import { DessertmenuPage } from '../dessertmenu/dessertmenu';
import { ContactPage } from '../contact/contact';
import { HealthnewsPage } from '../healthnews/healthnews';
import { OrderlistPage } from '../orderlist/orderlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

}
goToDrinkmenu(){
  this.navCtrl.push(DrinkmenuPage);
}
goToDessertmenu(){
  this.navCtrl.push(DessertmenuPage);
  }
goToContact(){
  this.navCtrl.push(ContactPage);
  }
goToHealthnews(){
  this.navCtrl.push(HealthnewsPage);
  }
  goToOrderlistPage(){
    this.navCtrl.push(OrderlistPage);
    }

}
