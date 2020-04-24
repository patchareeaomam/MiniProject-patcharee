import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmazonProvider } from '../../providers/amazon/amazon';
import { NweactivityPage } from '../nweactivity/nweactivity';


@IonicPage()
@Component({
  selector: 'page-drinkmenudetail',
  templateUrl: 'drinkmenudetail.html',
})
export class DrinkmenudetailPage {
  drink:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: AmazonProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.Iddrink(id).then(res=>{
      this.drink=res;
    });

  }
  gotoNweactivityPage(){
      this.navCtrl.push(NweactivityPage);
  }
}

 