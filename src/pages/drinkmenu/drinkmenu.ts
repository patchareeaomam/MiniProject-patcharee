import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmazonProvider } from '../../providers/amazon/amazon';
import { DrinkmenudetailPage } from '../../pages/drinkmenudetail/drinkmenudetail';


@IonicPage()
@Component({
  selector: 'page-drinkmenu',
  templateUrl: 'drinkmenu.html',
})
export class DrinkmenuPage {
  drink:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:AmazonProvider) {
    this.data.loaddrink().then(result=>{
      this.drink=result;
      console.log(result);
    });
  }

  
  showDetal(id){
    this.navCtrl.push(DrinkmenudetailPage,{code:id});
  }

  goToDrinkmenudetailPage(drink_id:any){
   
    this.navCtrl.push(DrinkmenudetailPage,{ id:drink_id });
  }

}
 