import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmazonProvider } from '../../providers/amazon/amazon';
import { NweactivityPage } from '../nweactivity/nweactivity';

@IonicPage()
@Component({
  selector: 'page-dessertdetail',
  templateUrl: 'dessertdetail.html',
})
export class DessertdetailPage {
  dessert:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: AmazonProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.Iddessert(id).then(res=>{
      this.dessert=res;
    });
 
  }
  gotoNweactivityPage(){
      this.navCtrl.push(NweactivityPage);
  }
}
